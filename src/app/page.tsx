import TopographyHeading from '@/components/Topography/TopographyHeading';
import React from 'react';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/list-controller';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/list-controller';
import GridItem from '@/components/Blog/Grid/GridItem';
import Grid from '@/components/Blog/Grid/Grid';

const posts: PostItemData[] = await getBlogPosts();

export default function Page(): React.ReactElement {
  return (
    <section className="py-8 md:py-20">
      <TopographyHeading level={1} className="mb-6 md:mb-12 text-center">
        Latest posts
      </TopographyHeading>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid>
          {posts.map((post: PostItemData) => (
            <GridItem post={post} key={post.slug} />
          ))}
        </Grid>
      </div>
    </section>
  );
}
