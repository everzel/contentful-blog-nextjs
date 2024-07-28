import { Metadata } from 'next';
import { MetaItemData } from '@/services/contentful/types/meta';
import { PageMetaFragmentFragment } from '../contentful/Page/page.generated';

export function getMetadataFromContentfulMetaItem(
  meta: MetaItemData,
  path: string,
): Metadata {
  const pageURL = `${process.env.APP_URL}${path}`;

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

// TODO: using generated types
export function getPageMetadata(
  meta: PageMetaFragmentFragment,
  path: string,
): Metadata {
  const pageURL = `${process.env.APP_URL}${path}`;

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
      images: meta.image?.url,
    },

    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: meta.image?.url,
    },

    alternates: {
      canonical: pageURL,
    },
  };
}
