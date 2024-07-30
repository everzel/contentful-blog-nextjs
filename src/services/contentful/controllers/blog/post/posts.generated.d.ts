import * as Types from '../../../../../types/graphql-global-types.generated.d';

export type PostsItemAuthorFragmentFragment = {
  __typename?: 'BlogAuthor';
  name?: string;
  slug?: string;
  position?: string;
  avatar?: { __typename?: 'Asset'; url?: string };
};

export type PostsItemFragmentFragment = {
  __typename?: 'BlogPost';
  name?: string;
  slug?: string;
  description?: string;
  publishedAt?: any;
  author?: {
    __typename?: 'BlogAuthor';
    name?: string;
    slug?: string;
    position?: string;
    avatar?: { __typename?: 'Asset'; url?: string };
  };
  image?: { __typename?: 'Asset'; url?: string };
};

export type PostEntriesQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  exceptedSlugs?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['String']['input']>>
    | Types.InputMaybe<Types.Scalars['String']['input']>
  >;
  authorSlug?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type PostEntriesQuery = {
  __typename?: 'Query';
  blogPostCollection?: {
    __typename?: 'BlogPostCollection';
    items: Array<{
      __typename?: 'BlogPost';
      name?: string;
      slug?: string;
      description?: string;
      publishedAt?: any;
      author?: {
        __typename?: 'BlogAuthor';
        name?: string;
        slug?: string;
        position?: string;
        avatar?: { __typename?: 'Asset'; url?: string };
      };
      image?: { __typename?: 'Asset'; url?: string };
    }>;
  };
};
