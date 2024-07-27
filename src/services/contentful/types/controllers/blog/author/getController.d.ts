import type { MetaItemData } from '@/services/contentful/types/meta.d';
import type {
  MetaContentfulData,
  ImageContentfulData,
} from '@/services/contentful/types/common.d';

export interface AuthorPageData {
  name: string;
  slug: string;
  image_url: string;
  meta: MetaItemData;
  position?: string;
  about?: string;
  background_url?: string;
}

export interface AuthorContentfulData {
  blogAuthorCollection: {
    items: AuthorContentfulItemData[];
  };
}

export interface AuthorContentfulItemData {
  name: string;
  slug: string;
  avatar: ImageContentfulData;
  meta: MetaContentfulData;
  position?: string;
  about?: AuthorContentfulItemAboutData;
  background?: ImageContentfulData;
}

export interface AuthorContentfulItemAboutData {
  json: {
    data: object;
    content: AuthorContentfulItemAboutContentItemData[];
    nodeType: 'document';
  };
}

export interface AuthorContentfulItemAboutContentItemData {
  data: object;
  content: AuthorContentfulItemAboutContentItemContentItemData[];
  nodeType: 'paragraph';
}

export interface AuthorContentfulItemAboutContentItemContentItemData {
  data: object;
  marks: [];
  value: string;
  nodeType: 'text';
}
