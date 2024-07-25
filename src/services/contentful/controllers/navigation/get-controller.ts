import type {
  NavigationContentfulData,
  NavigationContentfulItemData,
  NavigationContentfulLinkItemData,
  NavigationContentfulSocialLinkItemData,
  NavigationItemData,
  NavigationLinkItemData,
  NavigationSocialLinkItemData,
} from '@/services/contentful/types/controllers/navigation/get-controller';

import contentfulClient from '@/services/contentful/client';
import { gql } from 'graphql-request';

export const getNavigationItem = async (
  slug: string,
): Promise<NavigationItemData> => {
  const query: string = gql`
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

  const data: NavigationContentfulItemData = (
    await contentfulClient<NavigationContentfulData>(query)
  ).navigationCollection.items[0];

  return {
    links:
      data.linksCollection?.items?.map(
        (link: NavigationContentfulLinkItemData): NavigationLinkItemData => ({
          name: link.name,
          url: link.url,
        }),
      ) || [],

    socialLinks:
      data.socialLinksCollection?.items?.map(
        (
          link: NavigationContentfulSocialLinkItemData,
        ): NavigationSocialLinkItemData => ({
          type: link.type,
          url: link.url,
        }),
      ) || [],
  };
};
