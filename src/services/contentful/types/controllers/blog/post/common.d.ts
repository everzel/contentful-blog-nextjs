import type { ImageContentfulData } from '@/services/contentful/types/image.d';

export interface BasePostData {
  name: string;
  slug: string;
  author: PostAuthorData;
  published_at: string;
  image_url: string;
}

export interface PostAuthorData {
  name: string;
  slug: string;
  image_url: string;
  position?: string;
}

export interface PostContentfulItemAuthorData {
  name: string;
  slug: string;
  position: string;
  avatar: ImageContentfulData;
}
