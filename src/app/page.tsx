import Heading from '@/components/Topography/Heading';
import React from 'react';
import { getPosts } from '@/services/contentful/controllers/blog/post/getPosts';
import GridItem from '@/components/Blog/Grid/GridItem';
import Grid from '@/components/Blog/Grid/Grid';
import { getPage } from '@/services/contentful/controllers/page/getPage';
import { headers } from 'next/headers';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';

export async function generateMetadata() {
  const page = await getPage('homepage');
  const path = headers().get('x-current-path') || '/';

  return page?.meta ? getMetadataFromContentfulMetaItem(page.meta, path) : {};
}

export default async function Homepage() {
  const posts = await getPosts();

  return (
    <section className="py-8 md:py-20">
      <Heading level={1} className="mb-6 md:mb-12 text-center">
        Latest posts
      </Heading>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid>
          {posts.map((post, index) => (
            <GridItem post={post} priority={index < 3} key={post.slug} />
          ))}
        </Grid>
      </div>
    </section>
  );
}
