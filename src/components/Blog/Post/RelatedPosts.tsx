import React from 'react';
import Heading from '@/components/Topography/Heading';
import Grid from '@/components/Blog/Grid/Grid';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/listController';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/listController';
import GridItem from '@/components/Blog/Grid/GridItem';

interface ComponentProps {
  exceptedSlug: string;
}

export default async function RelatedPosts({ exceptedSlug }: ComponentProps) {
  // TODO: The same as for <Posts/>. Fetch posts in parent component (page.tsx)
  const posts: PostItemData[] = await getBlogPosts({
    limit: 3,
    exceptedSlugs: [exceptedSlug],
  });

  return (
    <section className="mb-12 md:mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading level={2} tag="span" className="mb-12 text-center">
          Related posts
        </Heading>

        <Grid>
          {posts.map((post: PostItemData) => (
            <GridItem post={post} key={post.slug} />
          ))}
        </Grid>
      </div>
    </section>
  );
}
