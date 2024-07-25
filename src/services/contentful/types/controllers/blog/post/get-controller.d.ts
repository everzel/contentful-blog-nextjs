import type {
  BasePostData,
  PostContentfulItemAuthorData,
} from '@/services/contentful/types/controllers/blog/post/common.d';
import type {
  MetaItemData,
  MetaContentfulData,
} from '@/services/contentful/types/meta.d';
import type { ImageContentfulData } from '@/services/contentful/types/image.d';

export interface PostPageData extends BasePostData {
  meta: MetaItemData;
  content: string;
}

export interface PostContentfulData {
  blogPostCollection: {
    items: PostContentfulItemData[];
  };
}

export interface PostContentfulItemData {
  name: string;
  slug: string;
  content: string;
  publishedAt: string;
  author: PostContentfulItemAuthorData;
  meta: MetaContentfulData;
  image: ImageContentfulData;
}
