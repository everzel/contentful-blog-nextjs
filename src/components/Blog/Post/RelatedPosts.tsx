import type { PostsItemFragmentFragment } from '@/services/contentful/controllers/blog/post/posts.generated';
import React from 'react';
import Heading from '@/components/Topography/Heading';
import Grid from '@/components/Blog/Grid/Grid';
import GridItem from '@/components/Blog/Grid/GridItem';

interface RelatedPostsProps {
  posts: PostsItemFragmentFragment[];
}

export default async function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mb-12 md:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading level={2} tag="span" className="mb-12 text-center">
          Related posts
        </Heading>

        <Grid>
          {posts.map((post) => (
            <GridItem post={post} key={post.slug} />
          ))}
        </Grid>
      </div>
    </section>
  );
}
