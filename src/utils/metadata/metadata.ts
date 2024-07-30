import type { PageItemMetaFragmentFragment } from '@/services/contentful/controllers/page/get/query.generated';
import { Metadata } from 'next';

// TODO: This function expects different metadata types, but all of them are compatible with the PageItemMetaFragmentFragment type. Do I need to add all of these types or just stay like now?
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
