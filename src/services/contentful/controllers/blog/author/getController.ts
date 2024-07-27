import type {
  AuthorContentfulData,
  AuthorContentfulItemAboutContentItemContentItemData,
  AuthorContentfulItemAboutContentItemData,
  AuthorContentfulItemData,
  AuthorPageData,
} from '@/services/contentful/types/controllers/blog/author/getController';
import contentfulClient from '@/services/contentful/client';
import { gql } from 'graphql-request';

export const getBlogAuthor = async (
  slug: string,
): Promise<AuthorPageData | null> => {
  const query = gql`
      query {
          blogAuthorCollection(
              where: {
                  slug: "${slug}"
              }
          ) {
              items {
                  name
                  slug
                  position
                  about {
                      json
                  }
                  avatar {
                      url
                  }
                  meta {
                      title
                      description
                      indexable
                      image {
                          url
                      }
                  }
                  background {
                      url
                  }
              }
          }
      }
  `;

  const data: AuthorContentfulItemData | null = (
    await contentfulClient<AuthorContentfulData>(query)
  ).blogAuthorCollection.items[0];

  if (!data) {
    return null;
  }

  let about = null;

  if (data.about?.json) {
    about = data.about.json.content
      .map((element): string => {
        return element.content
          .map((contentElement): string => contentElement.value)
          .join('<br>');
      })
      .join('<br><br>');
  }

  return {
    name: data.name,
    slug: data.slug,
    image_url: data.avatar.url,
    position: data.position,
    about: about as string | undefined,
    background_url: data.background?.url,
    meta: {
      title: data.meta.title,
      description: data.meta.description,
      indexable: data.meta.indexable,
      image_url: data.meta.image.url,
    },
  };
};
