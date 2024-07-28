import React from 'react';
import Header from '@/components/Blog/Post/Header';
import { getBlogPost } from '@/services/contentful/controllers/blog/post/getController';
import Content from '@/components/Blog/Post/Content/Content';
import RelatedPosts from '@/components/Blog/Post/RelatedPosts';
import { notFound } from 'next/navigation';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata';
import { route } from '@/app/routes';
import { Metadata } from 'next';
import { metadata as notFoundMetadata } from '@/app/not-found';

interface ComponentProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ComponentProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFoundMetadata;
  }

  const path = route('post', { slug: post.slug });

  return getMetadataFromContentfulMetaItem(post.meta, path);
}

export default async function Page({ params }: ComponentProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header post={post} />
      <Content content={post.content} />
      <RelatedPosts exceptedSlug={post.slug} />
    </>
  );
}
