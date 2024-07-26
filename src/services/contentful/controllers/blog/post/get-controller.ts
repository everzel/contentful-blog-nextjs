import type {
  PostContentfulData,
  PostContentfulItemData,
  PostPageData,
} from '@/services/contentful/types/controllers/blog/post/get-controller.d';

import contentfulClient from '@/services/contentful/client';
import { gql } from 'graphql-request';

export const getBlogPost = async (
  slug: string,
): Promise<PostPageData | null> => {
  const query: string = gql`
      query {
          blogPostCollection(
              where: {
                  slug: "${slug}",
              }
          ) {
              items {
                  name
                  slug
                  content
                  publishedAt
                  author {
                      name
                      slug
                      position
                      avatar {
                          url
                      }
                  }
                  meta {
                      title
                      description
                      indexable
                      image {
                          url
                      }
                  }
                  image {
                      url
                  }
              }
          }
      }
  `;

  const data: PostContentfulItemData | undefined = (
    await contentfulClient<PostContentfulData>(query)
  ).blogPostCollection.items[0];

  if (!data) {
    return null;
  }

  return {
    name: data.name,
    slug: data.slug,
    published_at: data.publishedAt,
    image_url: data.image.url,
    content: data.content,
    author: {
      name: data.author.name,
      slug: data.author.slug,
      position: data.author.position,
      image_url: data.author.avatar.url,
    },
    meta: {
      title: data.meta.title,
      description: data.meta.description,
      image_url: data.meta.image.url,
      indexable: data.meta.indexable,
    },
  };
};
