export default async function contentfulClient<T>(query: string): Promise<T> {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const environmentId = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
  });

  const json: {
    data: T;
    errors?: object;
  } = await res.json();

  if (json.errors) {
    throw new Error(`Request error: ${JSON.stringify(json.errors)}`);
  }

  return json.data;
}
