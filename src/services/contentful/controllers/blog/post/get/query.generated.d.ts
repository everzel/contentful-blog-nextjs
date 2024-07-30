import * as Types from '../../../../../../types/graphql-global-types.generated.d';

export type PostItemMetaFragmentFragment = {
  __typename?: 'Meta';
  title?: string;
  description?: string;
  indexable?: boolean;
  image?: { __typename?: 'Asset'; url?: string };
};

export type PostItemAuthorFragmentFragment = {
  __typename?: 'BlogAuthor';
  name?: string;
  slug?: string;
  position?: string;
  avatar?: { __typename?: 'Asset'; url?: string };
};

export type PostItemFragmentFragment = {
  __typename?: 'BlogPost';
  name?: string;
  slug?: string;
  content?: string;
  publishedAt?: any;
  author?: {
    __typename?: 'BlogAuthor';
    name?: string;
    slug?: string;
    position?: string;
    avatar?: { __typename?: 'Asset'; url?: string };
  };
  meta?: {
    __typename?: 'Meta';
    title?: string;
    description?: string;
    indexable?: boolean;
    image?: { __typename?: 'Asset'; url?: string };
  };
  image?: { __typename?: 'Asset'; url?: string };
};

export type PostEntryQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type PostEntryQuery = {
  __typename?: 'Query';
  blogPostCollection?: {
    __typename?: 'BlogPostCollection';
    items: Array<{
      __typename?: 'BlogPost';
      name?: string;
      slug?: string;
      content?: string;
      publishedAt?: any;
      author?: {
        __typename?: 'BlogAuthor';
        name?: string;
        slug?: string;
        position?: string;
        avatar?: { __typename?: 'Asset'; url?: string };
      };
      meta?: {
        __typename?: 'Meta';
        title?: string;
        description?: string;
        indexable?: boolean;
        image?: { __typename?: 'Asset'; url?: string };
      };
      image?: { __typename?: 'Asset'; url?: string };
    }>;
  };
};
