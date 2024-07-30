import QUERY from './query.gql';
import { PageEntryQuery, PageEntryQueryVariables } from './query.generated';
import { getApolloClient } from '@/services/apollo';

export async function getPage(slug: string) {
  const client = getApolloClient();

  const response = await client.query<PageEntryQuery, PageEntryQueryVariables>({
    query: QUERY,
    variables: { slug },
  });

  return response.data.pageCollection?.items?.[0] || null;
}
