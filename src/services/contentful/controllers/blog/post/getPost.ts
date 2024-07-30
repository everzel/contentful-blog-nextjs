import type {
  PostEntryQuery,
  PostEntryQueryVariables,
} from '@/services/contentful/controllers/blog/post/post.generated';
import QUERY from './post.gql';
import { getApolloClient } from '@/services/apollo';

export const getPost = async (slug: string) => {
  const client = getApolloClient();

  const response = await client.query<PostEntryQuery, PostEntryQueryVariables>({
    query: QUERY,
    variables: {
      slug,
    },
  });

  return response.data.blogPostCollection?.items?.[0] || null;
};
