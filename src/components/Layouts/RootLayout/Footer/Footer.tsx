import type { SocialLinkProps } from '@/components/Layouts/RootLayout/Footer/SocialLink';
import Link from 'next/link';
import { route } from '@/app/routes';
import Image from 'next/image';
import whiteLogo from '@/assets/images/logo/black-logo.svg';
import React, { Fragment } from 'react';
import SocialLink from '@/components/Layouts/RootLayout/Footer/SocialLink';
import {
  NavigationFragmentFragment,
  NavigationItemSocialLinkFragmentFragment,
} from '@/services/contentful/controllers/navigation/get/getNavigation.generated';

interface FooterProps {
  data: NavigationFragmentFragment | null;
}

const getSocialIconType = (
  type: NavigationItemSocialLinkFragmentFragment['type'],
): string | null => {
  switch (type) {
    case 'Twitter (X)':
      return 'twitter';

    case 'Instagram':
      return 'instagram';

    default:
      return null;
  }
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full bg-slate-50 border-t border-solid border-indigo-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
        <div className="flex items-center justify-between">
          <Link className="w-[200px]" href={route('home')}>
            <Image src={whiteLogo} alt={process.env.NEXT_PUBLIC_APP_NAME!} />
          </Link>

          {data?.socialLinksCollection?.items.length && (
            <div className="flex space-x-4 sm:justify-center">
              {data.socialLinksCollection.items.map((link) => (
                <Fragment key={link.url}>
                  {getSocialIconType(link.type) && (
                    <SocialLink
                      icon={
                        getSocialIconType(link.type) as SocialLinkProps['icon']
                      }
                      url={link.url!}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
