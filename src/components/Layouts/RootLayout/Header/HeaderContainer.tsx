import { getNavigationItem } from '@/services/contentful/controllers/navigation/get-controller';
import Header from '@/components/Layouts/RootLayout/Header/Header';
import React from 'react';

export default async function HeaderContainer(): Promise<React.ReactElement> {
  const navigationData = await getNavigationItem('header');

  if (!navigationData) {
    return <Header navigationData={{ socialLinks: [], links: [] }} />;
  }

  return <Header navigationData={navigationData} />;
}
