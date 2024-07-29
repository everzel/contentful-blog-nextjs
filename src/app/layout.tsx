import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';
import HeaderContainer from '@/components/Layouts/RootLayout/Header/HeaderContainer';
import FooterContainer from '@/components/Layouts/RootLayout/Footer/FooterContainer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
