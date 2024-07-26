import React from 'react';
import { AuthorPageData } from '@/services/contentful/types/controllers/blog/author/get-controller';
import { getBlogAuthor } from '@/services/contentful/controllers/blog/author/get-controller';
import Header from '@/components/Blog/Author/Header';
import Posts from '@/components/Blog/Author/Posts';

interface ComponentProps {
  params: {
    slug: string;
  };
}

export default async function Page({
  params,
}: ComponentProps): Promise<React.ReactElement> {
  const author: AuthorPageData = await getBlogAuthor(params.slug);

  return (
    <>
      <Header author={author} />
      <Posts authorSlug={author.slug} />
    </>
  );
}
