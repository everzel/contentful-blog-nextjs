import { Metadata } from 'next';
import { PageItemMetaFragmentFragment } from '@/services/contentful/controllers/page/get/query.generated';

export function getMetadataFromContentfulMetaItem(
  metadata: PageItemMetaFragmentFragment,
  path: string,
): Metadata {
  const pageURL = `${process.env.APP_URL}${path}`;

  return {
    title: metadata.title,
    description: metadata.description,

    robots: {
      index: metadata.indexable,
      follow: metadata.indexable,
    },

    openGraph: {
      type: 'website',
      url: pageURL,
      title: metadata.title,
      description: metadata.description,
      images: metadata.image?.url,
    },

    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.image?.url,
    },

    alternates: {
      canonical: pageURL,
    },
  };
}
