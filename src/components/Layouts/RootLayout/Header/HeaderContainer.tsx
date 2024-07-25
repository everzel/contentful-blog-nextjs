import { NavigationItemData } from '@/services/contentful/types/controllers/navigation/get-controller';
import { getNavigationItem } from '@/services/contentful/controllers/navigation/get-controller';
import Header from '@/components/Layouts/RootLayout/Header/Header';
import React from 'react';

export default async function HeaderContainer(): Promise<React.ReactElement> {
  const navigationData: NavigationItemData = await getNavigationItem('header');

  return <Header navigationData={navigationData} />;
}
