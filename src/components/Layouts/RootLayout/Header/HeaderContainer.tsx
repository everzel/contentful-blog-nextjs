import { getNavigationItem } from '@/services/contentful/controllers/navigation/getController';
import Header from '@/components/Layouts/RootLayout/Header/Header';
import React from 'react';

export default async function HeaderContainer() {
  const navigationData = await getNavigationItem('header');

  if (!navigationData) {
    return <Header navigationData={{ socialLinks: [], links: [] }} />;
  }

  return <Header navigationData={navigationData} />;
}
