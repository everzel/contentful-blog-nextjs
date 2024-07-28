import Heading from '@/components/Topography/Heading';
import React from 'react';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/listController';
import { getBlogPosts } from '@/services/contentful/controllers/blog/post/listController';
import GridItem from '@/components/Blog/Grid/GridItem';
import Grid from '@/components/Blog/Grid/Grid';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { getPageMetadata } from '@/utils/metadata';
import { getPage as getPageNew } from '../contentful/Page/getPage';
import { Page } from '../contentful/Page/Page';

const posts: PostItemData[] = await getBlogPosts();

const slug = 'homepage';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageNew(slug);

  const path = headers().get('x-current-path') || '/';

  return page?.meta ? getPageMetadata(page.meta, path) : {};
}

export default async function Homepage() {
  const page = await getPageNew(slug);
  // TODO: call here getBlogPosts()
  // remove /controllers stuff
  // use generated types where possible (yarn generate:gql-types)

  return (
    <Page {...page}>
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
    </Page>
  );
}
