import { Metadata } from 'next';
import { MetaItemData } from '@/services/contentful/types/meta';

export function getMetadataFromContentfulMetaItem(
  meta: MetaItemData,
  url: string,
): Metadata {
  const pageURL = `${process.env.APP_URL}${url}`;

  return {
    title: meta.title,
    description: meta.description,

    robots: {
      index: meta.indexable,
      follow: meta.indexable,
    },

    openGraph: {
      type: 'website',
      url: pageURL,
      title: meta.title,
      description: meta.description,
      images: meta.image_url,
    },

    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: meta.image_url,
    },

    alternates: {
      canonical: pageURL,
    },
  };
}
