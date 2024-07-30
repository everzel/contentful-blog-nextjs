import type {
  PostEntriesQuery,
  PostEntriesQueryVariables,
} from '@/services/contentful/controllers/blog/post/list/query.generated';
import QUERY from './query.gql';
import { getApolloClient } from '@/services/apollo';

interface GetBlogPostsParams {
  exceptedSlugs?: string[];
  authorSlug?: string;
  limit?: number;
}

export const getBlogPosts = async (params: GetBlogPostsParams = {}) => {
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
