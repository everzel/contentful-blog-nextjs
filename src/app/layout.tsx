import React, { PropsWithChildren } from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';
import { getNavigation } from '@/services/contentful/controllers/navigation/getNavigation';
import Footer from '@/components/Layouts/RootLayout/Footer/Footer';
import Header from '@/components/Layouts/RootLayout/Header';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const headerData = await getNavigation('header');
  const footerData = await getNavigation('footer');

  return (
    <html lang="en">
      <body className={`bg-slate-50 ${roboto.className}`}>
        <Header data={headerData} />

        {children}

        <Footer data={footerData} />
      </body>
    </html>
  );
}
