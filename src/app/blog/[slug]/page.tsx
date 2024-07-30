import React from 'react';
import Header from '@/components/Blog/Post/Header';
import { getBlogPost } from '@/services/contentful/controllers/blog/post/get/сontroller';
import Content from '@/components/Blog/Post/Content/Content';
import RelatedPosts from '@/components/Blog/Post/RelatedPosts';
import { notFound } from 'next/navigation';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { route } from '@/app/routes';
import { metadata as notFoundMetadata } from '@/app/not-found';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/list/controller';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getBlogPost(params.slug);
  const path = route('post', { slug: params.slug });

  return post?.meta
    ? getMetadataFromContentfulMetaItem(post.meta, path)
    : notFoundMetadata;
}

export default async function Post({ params }: PostPageProps) {
  const post = await getBlogPost(params.slug);
  const relatedPosts = await getBlogPosts({
    limit: 3,
    exceptedSlugs: [params.slug],
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header post={post} />
      <Content content={post.content as string} />
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
