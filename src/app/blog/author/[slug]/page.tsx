import React from 'react';
import { getBlogAuthor } from '@/services/contentful/controllers/blog/author/getController';
import Header from '@/components/Blog/Author/Header';
import Posts from '@/components/Blog/Author/Posts';
import { notFound } from 'next/navigation';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { route } from '@/app/routes';
import { metadata as notFoundMetadata } from '@/app/not-found';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = await getBlogAuthor(params.slug);

  if (!author) {
    return notFoundMetadata;
  }

  const path = route('author', { slug: author.slug });

  return getMetadataFromContentfulMetaItem(author.meta, path);
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const author = await getBlogAuthor(params.slug);

  if (!author) {
    notFound();
  }

  return (
    <>
      <Header author={author} />
      <Posts authorSlug={author.slug} />
    </>
  );
}
