import { describe, expect, it } from 'vitest';
import {
  ImageLoaderPropsWithFormat,
  wsrvImageLoader,
} from '@/utils/imageLoader';

describe('imageLoader', () => {
  describe('wsrv', () => {
    it('should return image URL', () => {
      const props: ImageLoaderPropsWithFormat = {
        src: 'https://example.com/image.jpg',
        width: 500,
        quality: 90,
        format: 'png',
      };

      const searchParams = new URLSearchParams({
        url: props.src,
        w: props.width.toString(),
        q: props.quality!.toString(),
        output: props.format as string,
      });

      expect(wsrvImageLoader(props)).toContain(searchParams.toString());
    });

    it('should return image URL with default props', () => {
      const props: ImageLoaderPropsWithFormat = {
        src: 'https://example.com/image.jpg',
        width: 500,
      };

      const searchParams = new URLSearchParams({
        url: props.src,
        w: props.width.toString(),
        q: '80',
        output: 'webp',
      });

      expect(wsrvImageLoader(props)).toContain(searchParams.toString());
    });
  });
});
