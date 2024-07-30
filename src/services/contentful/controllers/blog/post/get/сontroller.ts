import type {
  PostEntryQuery,
  PostEntryQueryVariables,
} from '@/services/contentful/controllers/blog/post/get/query.generated';
import QUERY from './query.gql';
import { getApolloClient } from '@/services/apollo';

export const getBlogPost = async (slug: string) => {
  const client = getApolloClient();

  const response = await client.query<PostEntryQuery, PostEntryQueryVariables>({
    query: QUERY,
    variables: {
      slug,
    },
  });

  return response.data.blogPostCollection?.items?.[0] || null;
};
