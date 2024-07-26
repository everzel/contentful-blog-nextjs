import React from 'react';
import Header from '@/components/Blog/Post/Header';
import { PostPageData } from '@/services/contentful/types/controllers/blog/post/get-controller';
import { getBlogPost } from '@/services/contentful/controllers/blog/post/get-controller';
import Content from '@/components/Blog/Post/Content/Content';
import RelatedPosts from '@/components/Blog/Post/RelatedPosts';

interface ComponentProps {
  params: {
    slug: string;
  };
}

export default async function Page({
  params,
}: ComponentProps): Promise<React.ReactElement> {
  const post: PostPageData = await getBlogPost(params.slug);

  return (
    <>
      <Header post={post} />
      <Content content={post.content} />
      <RelatedPosts exceptedSlug={post.slug} />
    </>
  );
}
