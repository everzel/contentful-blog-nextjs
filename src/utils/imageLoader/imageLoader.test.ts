import { describe, expect, it } from 'vitest';
import {
  wsrvImageLoader,
  ImageLoaderPropsWithFormat,
} from '@/utils/imageLoader/imageLoader';

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
        output: props.format!,
      });

      const actualResult = wsrvImageLoader(props);
      const expectedResult = `${process.env.WSRV_BASE_URL}?${searchParams.toString()}`;

      expect(actualResult).toBe(expectedResult);
    });

    it('should return image URL with default params', () => {
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

      const actualResult = wsrvImageLoader(props);
      const expectedResult = `${process.env.WSRV_BASE_URL}?${searchParams.toString()}`;

      expect(actualResult).toBe(expectedResult);
    });
  });
});
