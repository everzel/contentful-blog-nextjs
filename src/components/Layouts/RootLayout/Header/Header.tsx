'use client';

import React, { useState } from 'react';
import { route } from '@/app/routes';
import Link from 'next/link';
import Image from 'next/image';
import blackLogo from '@/assets/images/logo/black-logo.svg';
import menuIcon from '@/assets/icons/header/menu.svg';
import {
  NavigationContentfulLinkItemData,
  NavigationItemData,
} from '@/services/contentful/types/controllers/navigation/get-controller';

interface ComponentProps {
  navigationData: NavigationItemData;
}

export default function Header({
  navigationData,
}: ComponentProps): React.ReactElement {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <nav className="w-full py-5 transition-all duration-500 bg-slate-50 border-b border-solid border-indigo-100">
      <div className="xl:px-28 lg:px-14 px-10">
        <div className="w-full flex justify-between flex-col lg:flex-row">
          <div className="flex items-center justify-between lg:flex-row">
            <Link className="w-[200px]" href={route('home')}>
              <Image
                src={blackLogo}
                alt={process.env.NEXT_PUBLIC_APP_NAME as string}
                priority={true}
              />
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Image
                className="w-6 h-6"
                src={menuIcon}
                alt="Menu icon"
                priority={true}
              />
            </button>
          </div>

          <div className={`lg:flex lg:pl-11 ${!isOpenMenu ? 'hidden' : ''}`}>
            <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
              {navigationData.links.map(
                (link: NavigationContentfulLinkItemData) => (
                  <li
                    key={link.url}
                    className="mb-2 px-3 block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
