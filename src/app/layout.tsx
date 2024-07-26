import type { Metadata } from 'next';
import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';
import HeaderContainer from '@/components/Layouts/RootLayout/Header/HeaderContainer';
import FooterContainer from '@/components/Layouts/RootLayout/Footer/FooterContainer';

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME as string,
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 ${roboto.className}`}>
        <HeaderContainer />

        {children}

        <FooterContainer />
      </body>
    </html>
  );
}
