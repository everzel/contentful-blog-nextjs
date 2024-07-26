import React from 'react';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/list-controller';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/list-controller';
import Heading from '@/components/Topography/Heading';
import Grid from '@/components/Blog/Grid/Grid';
import GridItem from '@/components/Blog/Grid/GridItem';

interface ComponentProps {
  authorSlug: string;
}

export default async function Posts({
  authorSlug,
}: ComponentProps): Promise<React.ReactElement> {
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
        {posts.map((post: PostItemData) => (
          <GridItem key={post.slug} post={post} />
        ))}
      </Grid>
    </section>
  );
}
