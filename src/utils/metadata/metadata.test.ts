import { describe, expect, it } from 'vitest';
import { getMetadataFromContentfulMetaItem } from '@/utils/metadata/metadata';
import { PageItemMetaFragmentFragment } from '@/services/contentful/controllers/page/page.generated';

process.env = Object.assign(process.env, {
  APP_URL: 'https://example.com',
});

describe('metadata', () => {
  it('should return metadata', () => {
    const metadata: PageItemMetaFragmentFragment = {
      title: 'Example title',
      description: 'Example description',
      image: {
        url: 'https://example.com/image.png',
      },
      indexable: true,
    };

    const pageUrl = `https://example.com/example-page`;

    const actualResult = getMetadataFromContentfulMetaItem(
      metadata,
      '/example-page',
    );
    const expectedResult = {
      title: metadata.title,
      description: metadata.description,

      robots: {
        index: metadata.indexable,
        follow: metadata.indexable,
      },

      openGraph: {
        type: 'website',
        url: pageUrl,
        title: metadata.title,
        description: metadata.description,
        images: metadata.image!.url,
      },

      twitter: {
        card: 'summary_large_image',
        title: metadata.title,
        description: metadata.description,
        images: metadata.image!.url,
      },

      alternates: {
        canonical: pageUrl,
      },
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
