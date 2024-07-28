import { getApolloClient } from '../../services/appolo';
import { PageEntryQuery, PageEntryQueryVariables } from './page.generated';
import PAGE from './page.gql';

export async function getPage(slug: string) {
  const client = getApolloClient();

  const response = await client.query<PageEntryQuery, PageEntryQueryVariables>({
    query: PAGE,
    variables: {
      slug,
    },
  });

  return response.data.pageCollection?.items?.[0] ?? null;
}
