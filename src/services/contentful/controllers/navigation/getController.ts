import type {
  NavigationContentfulData,
  NavigationContentfulItemData,
  NavigationContentfulLinkItemData,
  NavigationContentfulSocialLinkItemData,
  NavigationItemData,
  NavigationLinkItemData,
  NavigationSocialLinkItemData,
} from '@/services/contentful/types/controllers/navigation/getController';

import contentfulClient from '@/services/contentful/client';
import { gql } from 'graphql-request';

export const getNavigationItem = async (
  slug: string,
): Promise<NavigationItemData | null> => {
  const query = gql`
      query {
          navigationCollection(where: { slug: "${slug}" }) {
              items {
                  linksCollection(limit: 50) {
                      items {
                          name
                          url
                      }
                  }

                  socialLinksCollection(limit: 50) {
                      items {
                          type
                          url
                      }
                  }
              }
          }
      }
  `;

  const data: NavigationContentfulItemData | undefined = (
    await contentfulClient<NavigationContentfulData>(query)
  ).navigationCollection.items[0];

  if (!data) {
    return null; // TODO: { socialLinks: [], links: [] }
  }

  return {
    links:
      data.linksCollection?.items?.map(
        (link): NavigationLinkItemData => ({
          name: link.name,
          url: link.url,
        }),
      ) || [],

    socialLinks:
      data.socialLinksCollection?.items?.map(
        (link): NavigationSocialLinkItemData => ({
          type: link.type,
          url: link.url,
        }),
      ) || [],
  };
};
