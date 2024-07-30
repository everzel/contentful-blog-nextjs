import * as Types from '../../../../types/graphql-global-types.generated.d';

export type NavigationItemSocialLinkItemFragmentFragment = {
  __typename?: 'NavigationSocialLink';
  type?: string;
  url?: string;
};

export type NavigationItemLinkItemFragmentFragment = {
  __typename?: 'NavigationLink';
  name?: string;
  url?: string;
};

export type NavigationItemFragmentFragment = {
  __typename?: 'Navigation';
  linksCollection?: {
    __typename?: 'NavigationLinksCollection';
    items: Array<{
      __typename?: 'NavigationLink';
      name?: string;
      url?: string;
    }>;
  };
  socialLinksCollection?: {
    __typename?: 'NavigationSocialLinksCollection';
    items: Array<{
      __typename?: 'NavigationSocialLink';
      type?: string;
      url?: string;
    }>;
  };
};

export type NavigationEntryQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;

export type NavigationEntryQuery = {
  __typename?: 'Query';
  navigationCollection?: {
    __typename?: 'NavigationCollection';
    items: Array<{
      __typename?: 'Navigation';
      linksCollection?: {
        __typename?: 'NavigationLinksCollection';
        items: Array<{
          __typename?: 'NavigationLink';
          name?: string;
          url?: string;
        }>;
      };
      socialLinksCollection?: {
        __typename?: 'NavigationSocialLinksCollection';
        items: Array<{
          __typename?: 'NavigationSocialLink';
          type?: string;
          url?: string;
        }>;
      };
    }>;
  };
};
