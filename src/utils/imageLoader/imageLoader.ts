import { ImageLoaderProps } from 'next/image';

export type ImageLoaderPropsWithFormat = ImageLoaderProps & {
  format?: 'webp' | 'jpg' | 'png' | 'gif' | 'tiff';
};

export function wsrvImageLoader(props: ImageLoaderPropsWithFormat): string {
  const searchParams = new URLSearchParams({
    url: props.src,
    w: props.width.toString(),
    q: (props.quality || 80).toString(),
    output: props.format || 'webp',
  });

  return `${process.env.NEXT_PUBLIC_WSRV_BASE_URL}?${searchParams.toString()}`;
}
