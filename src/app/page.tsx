import Heading from '@/components/Topography/Heading';
import React from 'react';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/list-controller';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/list-controller';
import GridItem from '@/components/Blog/Grid/GridItem';
import Grid from '@/components/Blog/Grid/Grid';
import { Metadata } from 'next';
import { getPage } from '@/services/contentful/controllers/page/get-controller';
import { headers } from 'next/headers';
import { getMetadataFromContentfulMetaItem } from '@/lib/metadata';

const posts: PostItemData[] = await getBlogPosts();

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('homepage');

  if (!page) {
    return {};
  }

  const path = headers().get('x-current-path') || '/';

  return getMetadataFromContentfulMetaItem(page.meta, path);
}

export default function Page(): React.ReactElement {
  return (
    <section className="py-8 md:py-20">
      <Heading level={1} className="mb-6 md:mb-12 text-center">
        Latest posts
      </Heading>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid>
          {posts.map((post, index) => (
            <GridItem post={post} key={post.slug} priority={index < 3} />
          ))}
        </Grid>
      </div>
    </section>
  );
}
