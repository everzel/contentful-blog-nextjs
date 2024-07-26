import { describe, expect, it } from 'vitest';
import { wsrvImageLoader, WsrvImageLoaderOptions } from '@/lib/imageLoader';

describe('imageLoader util', () => {
  describe('wsrv', () => {
    it('should return image URL', () => {
      const options = {
        src: 'https://example.com/image.jpg',
        width: 500,
        quality: 90,
        format: 'png',
      };

      const searchParams = new URLSearchParams({
        url: options.src,
        w: options.width.toString(),
        q: options.quality.toString(),
        output: options.format as string,
      });

      const actualResult = wsrvImageLoader(options as WsrvImageLoaderOptions);
      const expectedResult = `${process.env.WSRV_BASE_URL}?${searchParams.toString()}`;

      expect(actualResult).toBe(expectedResult);
    });

    it('should return image URL with default params', () => {
      const options = {
        src: 'https://example.com/image.jpg',
        width: 500,
      };

      const searchParams = new URLSearchParams({
        url: options.src,
        w: options.width.toString(),
        q: '80',
        output: 'webp',
      });

      const actualResult = wsrvImageLoader(options as WsrvImageLoaderOptions);
      const expectedResult = `${process.env.WSRV_BASE_URL}?${searchParams.toString()}`;

      expect(actualResult).toBe(expectedResult);
    });
  });
});
