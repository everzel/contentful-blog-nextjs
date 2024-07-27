import type {
  MetaContentfulData,
  MetaItemData,
} from '@/services/contentful/types/meta.d';

export interface PageItemData {
  meta: MetaItemData;
}

export interface PageContentfulData {
  pageCollection: {
    items: PageContentfulItemData[];
  };
}

export interface PageContentfulItemData {
  meta: MetaContentfulData;
}
