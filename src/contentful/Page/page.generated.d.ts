import * as Types from '../../ions/types/generated/contentful.d';

export type PageMetaFragmentFragment = {
  __typename?: 'Meta';
  title?: string;
  description?: string;
  indexable?: boolean;
  image?: { __typename?: 'Asset'; url?: string };
};

export type PageFragmentFragment = {
  __typename?: 'Page';
  meta?: {
    __typename?: 'Meta';
    title?: string;
    description?: string;
    indexable?: boolean;
    image?: { __typename?: 'Asset'; url?: string };
  };
};

export type PageEntryQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;

export type PageEntryQuery = {
  __typename?: 'Query';
  pageCollection?: {
    __typename?: 'PageCollection';
    items: Array<{
      __typename?: 'Page';
      meta?: {
        __typename?: 'Meta';
        title?: string;
        description?: string;
        indexable?: boolean;
        image?: { __typename?: 'Asset'; url?: string };
      };
    }>;
  };
};
