import type {
  PostEntriesQuery,
  PostEntriesQueryVariables,
} from '@/services/contentful/controllers/blog/post/posts.generated';
import QUERY from './posts.gql';
import { getApolloClient } from '@/services/apollo';

interface GetPostsParams {
  exceptedSlugs?: string[];
  authorSlug?: string;
  limit?: number;
}

export const getPosts = async (params: GetPostsParams = {}) => {
  const client = getApolloClient();

  const response = await client.query<
    PostEntriesQuery,
    PostEntriesQueryVariables
  >({
    query: QUERY,
    variables: params,
  });

  return response.data.blogPostCollection?.items || [];
};
