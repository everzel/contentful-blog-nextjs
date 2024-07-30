import {
  NavigationEntryQuery,
  NavigationEntryQueryVariables,
} from './query.generated';
import QUERY from './query.gql';
import { getApolloClient } from '@/services/apollo';

export async function getNavigationItem(slug: string) {
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
