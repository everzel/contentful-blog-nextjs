import React from 'react';
import { getNavigationItem } from '@/services/contentful/controllers/navigation/getController';
import Footer from '@/components/Layouts/RootLayout/Footer/Footer';

export default async function FooterContainer() {
  const navigationData = await getNavigationItem('footer');

  if (!navigationData) {
    return <Footer navigationData={{ socialLinks: [], links: [] }} />;
  }

  return <Footer navigationData={navigationData} />;
}
