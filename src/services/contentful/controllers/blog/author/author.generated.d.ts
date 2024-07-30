import * as Types from '../../../../../../types/graphql-global-types.generated.d';

export type AuthorItemMetaFragmentFragment = {
  __typename?: 'Meta';
  title?: string;
  description?: string;
  indexable?: boolean;
  image?: { __typename?: 'Asset'; url?: string };
};

export type AuthorItemFragmentFragment = {
  __typename?: 'BlogAuthor';
  name?: string;
  slug?: string;
  position?: string;
  meta?: {
    __typename?: 'Meta';
    title?: string;
    description?: string;
    indexable?: boolean;
    image?: { __typename?: 'Asset'; url?: string };
  };
  about?: { __typename?: 'BlogAuthorAbout'; json: any };
  avatar?: { __typename?: 'Asset'; url?: string };
  background?: { __typename?: 'Asset'; url?: string };
};

export type AuthorEntryQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;

export type AuthorEntryQuery = {
  __typename?: 'Query';
  blogAuthorCollection?: {
    __typename?: 'BlogAuthorCollection';
    items: Array<{
      __typename?: 'BlogAuthor';
      name?: string;
      slug?: string;
      position?: string;
      meta?: {
        __typename?: 'Meta';
        title?: string;
        description?: string;
        indexable?: boolean;
        image?: { __typename?: 'Asset'; url?: string };
      };
      about?: { __typename?: 'BlogAuthorAbout'; json: any };
      avatar?: { __typename?: 'Asset'; url?: string };
      background?: { __typename?: 'Asset'; url?: string };
    }>;
  };
};
