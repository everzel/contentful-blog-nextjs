import { CodegenConfig } from '@graphql-codegen/cli';

const {
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: spaceId,
  NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID: environmentId,
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: accessToken,
} = process.env;

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`]:
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
    },
  ],
  generates: {
    'src/': {
      documents: 'src/**/*.gql',
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.d.ts',
        baseTypesPath: 'types/graphql-global-types.generated.d.ts',
      },
      plugins: ['typescript-operations'],
      config: {
        maybeValue: 'T',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
