import type {
  NavigationEntryQuery,
  NavigationEntryQueryVariables,
} from './navigation.generated';
import QUERY from './navigation.gql';
import { getApolloClient } from '@/services/apollo';

export async function getNavigation(slug: string) {
  const client = getApolloClient();

  const response = await client.query<
    NavigationEntryQuery,
    NavigationEntryQueryVariables
  >({
    query: QUERY,
    variables: { slug },
  });

  return response.data.navigationCollection?.items?.[0] || null;
}
