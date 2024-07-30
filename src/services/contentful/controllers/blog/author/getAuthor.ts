import type {
  AuthorEntryQuery,
  AuthorEntryQueryVariables,
} from '@/services/contentful/controllers/blog/author/author.generated';
import QUERY from './author.gql';
import { getApolloClient } from '@/services/apollo';

export const getAuthor = async (slug: string) => {
  const client = getApolloClient();

  const response = await client.query<
    AuthorEntryQuery,
    AuthorEntryQueryVariables
  >({
    query: QUERY,
    variables: {
      slug,
    },
  });

  return response.data.blogAuthorCollection?.items?.[0] || null;
};
