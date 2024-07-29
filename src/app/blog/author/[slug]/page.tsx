import React from 'react';
import { getBlogAuthor } from '@/services/contentful/controllers/blog/author/getController';
import Header from '@/components/Blog/Author/Header';
import Posts from '@/components/Blog/Author/Posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { route } from '@/app/routes';
import { metadata as notFoundMetadata } from '@/app/not-found';

interface ComponentProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ComponentProps): Promise<Metadata> {
  const author = await getBlogAuthor(params.slug);

  if (!author) {
    return notFoundMetadata;
  }

  const path = route('author', { slug: author.slug });

  return getMetadataFromContentfulMetaItem(author.meta, path);
}

export default async function Page({
  params,
}: ComponentProps): Promise<React.ReactElement> {
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
