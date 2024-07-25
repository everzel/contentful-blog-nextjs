import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderContainer from '@/components/Layouts/RootLayout/Header/HeaderContainer';
import FooterContainer from '@/components/Layouts/RootLayout/Footer/FooterContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Contentful blog',
    template: '%s | Contentful blog',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderContainer />

        {children}

        <FooterContainer />
      </body>
    </html>
  );
}
