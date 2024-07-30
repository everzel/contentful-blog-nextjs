import type {
  AuthorEntryQuery,
  AuthorEntryQueryVariables,
} from '@/services/contentful/controllers/blog/author/get/query.generated';
import QUERY from './query.gql';
import { getApolloClient } from '@/services/apollo';

export const getBlogAuthor = async (slug: string) => {
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
