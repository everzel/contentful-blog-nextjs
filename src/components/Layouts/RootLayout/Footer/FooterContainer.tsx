import React from 'react';
import { NavigationItemData } from '@/services/contentful/types/controllers/navigation/get-controller';
import { getNavigationItem } from '@/services/contentful/controllers/navigation/get-controller';
import Footer from '@/components/Layouts/RootLayout/Footer/Footer';

export default async function FooterContainer(): Promise<React.ReactElement> {
  const navigationData: NavigationItemData = await getNavigationItem('footer');

  return <Footer navigationData={navigationData} />;
}
