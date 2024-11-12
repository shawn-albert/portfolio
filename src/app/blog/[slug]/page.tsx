// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { TOCItemType } from 'fumadocs-core/server';
import { MDXContent } from '@content-collections/mdx/react';
import { notFound } from 'next/navigation';
import { blog } from '@/app/source';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';
import { MDXLink, headingTypes, Heading } from '@/lib/mdx/default-components';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import fs from 'fs/promises';
import path from 'path';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getSvgContent(src: string): Promise<string | null> {
  try {
    const svgPath = path.join(process.cwd(), 'public', src);
    return await fs.readFile(svgPath, 'utf8');
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const posts = blog.getPages();

  return posts.map((post) => ({
    slug: post.slugs[0] || ''
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const page = blog.getPage([params.slug]);

  if (!page) {
    return createMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    });
  }

  const publishDate = page.data.date
    ? new Date(page.data.date).toISOString()
    : new Date(page.file.name).toISOString();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      authors: [meta.author.name],
      modifiedTime: publishDate
    }
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  const {
    data: { body, structuredData, title, description, date, author }
  } = page;

  return (
    <main className="my-24 flex-1 px-4">
      <div className="container">
        <div className="rounded-xl border bg-muted/30 py-12 md:px-8">
          <h1 className="mb-2 text-3xl font-bold">{title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>{author || meta.author.name}</span>
            <span>·</span>
            <span>{new Date(date ?? page.file.name).toDateString()}</span>
          </div>
          <p className="mb-4 mt-4 text-muted-foreground">{description}</p>
          <Link
            href="/blog"
            className={buttonVariants({ size: 'sm', variant: 'secondary' })}
          >
            Back
          </Link>
        </div>
        <article className="grid grid-cols-1 py-8">
          <div className="prose dark:prose-invert max-w-none">
            <MDXContent
              code={body}
              components={{
                a: MDXLink,
                img: async (props) => {
                  if (props.src?.endsWith('.svg')) {
                    const svgContent = await getSvgContent(props.src);
                    if (!svgContent) return <img className="rounded-xl" {...props} />;

                    return (
                      <div className="w-full my-8">
                        <div
                          className="w-full [&>svg]:w-full [&>svg]:h-auto safari-svg-fix"
                          dangerouslySetInnerHTML={{ __html: svgContent }}
                        />
                      </div>
                    );
                  }
                  return <img className="rounded-xl" {...props} />;
                },
                ...Object.fromEntries(
                  headingTypes.map((type) => [
                    type,
                    (props: HTMLAttributes<HTMLHeadingElement>) => (
                      <Heading as={type} {...props} />
                    )
                  ])
                ),
                pre: ({ className, style: _style, ...props }) => (
                  <pre
                    className={cn(
                      'max-h-[500px] overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm',
                      className
                    )}
                    {...props}
                  />
                )
              }}
            />
          </div>
        </article>
      </div>
    </main>
  );
}