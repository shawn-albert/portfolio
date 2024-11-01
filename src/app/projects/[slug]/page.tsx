import { project } from '@/app/source';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';
import type { Article, WithContext } from 'schema-dts';
import React from 'react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

interface ProjectData {
  content: string;
  title: string;
  website?: string;
  github?: string;
  date?: string | Date;
  tags?: { label: string }[];
  description?: string;
  icon?: string;
  full?: boolean;
  _openapi?: Record<string, unknown>;
}

export async function generateStaticParams() {
  const projects = project.getPages();

  return projects.map((project) => ({
    slug: project.slugs[0] || ''
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const page = project.getPage([params.slug]);

  if (!page) {
    return createMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    });
  }

  const publishDate = page.data.date
    ? new Date(page.data.date).toISOString()
    : undefined;

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `/projects/${params.slug}`,
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: publishDate,
      images: [{
        url: `/images/projects/${params.slug}/cover.jpg`,
        width: 1200,
        height: 630,
        alt: page.data.title
      }]
    },
    twitter: {
      title: page.data.title,
      description: page.data.description,
      card: 'summary_large_image',
      images: [`/images/projects/${params.slug}/cover.jpg`]
    }
  });
}

export default function ProjectPage({ params }: ProjectPageProps): React.ReactElement {
  const page = project.getPage([params.slug]);

  if (!page) {
    notFound();
  }

  const formattedDate = page.data.date
    ? new Date(page.data.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : null;

  const publishDate = page.data.date
    ? new Date(page.data.date).toISOString()
    : undefined;

  const jsonLd: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.data.title,
    description: page.data.description || '',
    datePublished: publishDate,
    dateModified: publishDate,
    url: `${meta.site.url}/projects/${params.slug}`,
    image: `/images/projects/${params.slug}/cover.jpg`,
    author: {
      '@type': 'Person',
      name: meta.author.name
    }
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="prose mx-auto max-w-4xl dark:prose-invert">
        <div className="space-y-4 py-6">
          <h1 className="text-4xl font-bold">{page.data.title}</h1>
          {page.data.description && (
            <p className="text-xl text-muted-foreground">
              {page.data.description}
            </p>
          )}
          {formattedDate && (
            <time className="text-sm text-muted-foreground">
              {formattedDate}
            </time>
          )}
          {page.data.tags && page.data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {page.data.tags.map((tag, index) => (
                <span
                  key={`tag_${index}`}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="py-6">{page.data.content}</div>
      </article>
    </main>
  );
}