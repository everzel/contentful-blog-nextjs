import React from 'react';
import { getAuthor } from '@/services/contentful/controllers/blog/author/getAuthor';
import Header from '@/components/Blog/Author/Header';
import Posts from '@/components/Blog/Author/Posts';
import { notFound } from 'next/navigation';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { route } from '@/app/routes';
import { metadata as notFoundMetadata } from '@/app/not-found';
import { getPosts } from '@/services/contentful/controllers/blog/post/getPosts';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = await getAuthor(params.slug);
  const path = route('author', { slug: params.slug });

  return author?.meta
    ? getMetadataFromContentfulMetaItem(author.meta, path)
    : notFoundMetadata;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const author = await getAuthor(params.slug);
  const posts = await getPosts({ authorSlug: params.slug });

  if (!author) {
    notFound();
  }

  return (
    <>
      <Header author={author} />
      <Posts posts={posts} />
    </>
  );
}
