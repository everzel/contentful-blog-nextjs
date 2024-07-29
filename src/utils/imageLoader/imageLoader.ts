import { ImageLoaderProps } from 'next/image';

export type ImageLoaderPropsWithFormat = ImageLoaderProps & {
  format?: 'webp' | 'jpg' | 'png' | 'gif' | 'tiff';
};

export function wsrvImageLoader(params: ImageLoaderPropsWithFormat): string {
  const searchParams = new URLSearchParams({
    url: params.src,
    w: params.width.toString(),
    q: (params.quality || 80).toString(),
    output: params.format || 'webp',
  });

  return `${process.env.NEXT_PUBLIC_WSRV_BASE_URL}?${searchParams.toString()}`;
}
