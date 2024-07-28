import React from 'react';
import { route } from '@/app/routes';
import { Metadata } from 'next';
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton';

export const metadata: Metadata = {
  title: `Page not found | ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
            404
          </h1>

          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Page not found
          </p>

          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>

          <PrimaryButton href={route('home')} tag="a" className="inline-flex">
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
