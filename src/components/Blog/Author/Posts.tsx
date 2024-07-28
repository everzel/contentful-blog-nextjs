import React from 'react';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/listController';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/listController';
import Heading from '@/components/Topography/Heading';
import Grid from '@/components/Blog/Grid/Grid';
import GridItem from '@/components/Blog/Grid/GridItem';

interface ComponentProps {
  authorSlug: string;
}

export default async function Posts({ authorSlug }: ComponentProps) {
  // TODO: calling "getBlogPosts" is a bit of bad practice here, it's better to pass "posts" as a prop.
  // Type "PostItemData[]" is not required here, since it's defined as the return type of "getBlogPosts"
  const posts: PostItemData[] = await getBlogPosts({ authorSlug });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-8 mb-8">
      <Heading
        level={2}
        tag="span"
        className="mb-6 md:mb-8 text-center md:text-left"
      >
        Author's posts
      </Heading>

      <Grid>
        {posts.map((post, index) => (
          <GridItem post={post} priority={index < 3} key={post.slug} />
        ))}
      </Grid>
    </section>
  );
}
