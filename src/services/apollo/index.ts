import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  const {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: spaceId,
    NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID: environmentId,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: accessToken,
  } = process.env;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      fetch: (input, init) => fetch(input, init),
    }),
    cache: new InMemoryCache(),
  });
};

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};
