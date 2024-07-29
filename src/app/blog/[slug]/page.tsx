import React from 'react';
import Header from '@/components/Blog/Post/Header';
import { getBlogPost } from '@/services/contentful/controllers/blog/post/getController';
import Content from '@/components/Blog/Post/Content/Content';
import RelatedPosts from '@/components/Blog/Post/RelatedPosts';
import { notFound } from 'next/navigation';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { route } from '@/app/routes';
import { metadata as notFoundMetadata } from '@/app/not-found';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFoundMetadata;
  }

  const path = route('post', { slug: post.slug });

  return getMetadataFromContentfulMetaItem(post.meta, path);
}

export default async function Post({ params }: PostPageProps) {
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
