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

interface BlogPageProps {
  params: {
    slug: string;
  };
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
    data: { toc, body, structuredData, title, description, date, author }
  } = page;

  return (
    <main className="my-24 flex-1 px-4">
      <div className="container rounded-xl border bg-muted/30 py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr]">
        <div className="prose dark:prose-invert">
          <MDXContent
            code={body}
            components={{
              a: MDXLink,
              img: (props) => <img className="rounded-xl" {...props} />,
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
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="mb-1 text-muted-foreground">Written by</p>
            <p className="font-medium">{author || meta.author.name}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(date ?? page.file.name).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}