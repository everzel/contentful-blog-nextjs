'use client';

import { AuthorPageData } from '@/services/contentful/types/controllers/blog/author/get-controller';
import React from 'react';
import BackButton from '@/components/UI/Buttons/BackButton';
import Image from 'next/image';
import { wsrvImageLoader } from '@/lib/imageLoader';
import defaultBackground from '@/assets/images/author/default-background.png';
import Heading from '@/components/Topography/Heading';

interface ComponentProps {
  author: AuthorPageData;
}

export default function Header({ author }: ComponentProps): React.ReactElement {
  return (
    <section className="relative pb-4 md:pb-8">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-11 max-md:px-4 pt-6 z-20 relative">
        <BackButton>Back</BackButton>
      </div>

      <div className="mt-12">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-black absolute top-0 left-0 z-0 h-60 w-full min-h-[240px]">
            <Image
              loader={wsrvImageLoader}
              src={author.background_url || defaultBackground}
              alt={`Background image for ${author.name}`}
              className="opacity-90 w-full h-full object-cover"
              priority
              fill
            />
          </div>

          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <Image
              loader={wsrvImageLoader}
              src={author.image_url}
              width={190}
              height={190}
              alt={author.name}
              className="border-4 border-solid border-white rounded-full w-[200px]"
              priority
            />
          </div>

          <div className="flex items-center md:items-start justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div className="block w-full md:w-1/2">
              <Heading level={1} className="mb-1 max-sm:text-center">
                {author.name}
              </Heading>

              {author.position?.length && (
                <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
                  {author.position}
                </p>
              )}
            </div>

            {author.about?.length && (
              <div className="w-full md:w-1/2 text-base text-gray-900 text-center md:text-left">
                {author.about}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
