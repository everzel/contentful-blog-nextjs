import { PropsWithChildren } from 'react';
import { PageFragmentFragment } from './page.generated';

export interface PageProps extends PageFragmentFragment {}

export function Page({ children }: PropsWithChildren<PageProps>) {
  // TODO: render some PageFragmentFragment staff here (if needed)
  return <>{children}</>;
}
