'use client';

import React from 'react';
import Link from 'next/link';
import { route } from '@/app/routes';
import Image from 'next/image';
import { wsrvImageLoader } from '@/utils/imageLoader/imageLoader';
import { AuthorItemFragmentFragment } from '@/services/contentful/controllers/blog/author/get/query.generated';

interface AuthorCardProps {
  author: AuthorItemFragmentFragment;
  size?: 'small' | 'large';
  color?: 'white' | 'black';
  type?: 'link' | 'block';
}

export default function AuthorCard({
  author,
  size = 'small',
  color = 'black',
  type = 'block',
}: AuthorCardProps) {
  return (
    <>
      <div
        className={`relative flex items-start ${type === 'link' ? 'group/author' : ''} ${size === 'small' ? 'space-x-2' : 'space-x-4'}`}
      >
        {type === 'link' && (
          <Link
            href={route('author', { slug: author.slug! })}
            className="absolute inset-0 w-full h-full z-10"
          />
        )}

        <Image
          loader={wsrvImageLoader}
          src={author.avatar?.url!}
          width={size === 'small' ? 40 : 60}
          height={size === 'small' ? 40 : 60}
          alt={author.name!}
          className={`rounded-full group-hover/author:opacity-60 mt-1 transition-all ${size === 'small' ? 'w-10 h-10' : 'w-14 h-14'}`}
        />

        <div
          className={`flex flex-col ${color === 'white' ? 'text-white' : 'text-black'}`}
        >
          <span
            className={`font-medium group-hover/author:text-gray-300 transition-all ${size === 'small' ? 'text-base' : 'text-lg'}`}
          >
            {author.name}
          </span>

          {author.position?.length && (
            <span
              className={`group-hover/author:text-gray-300 transition-all ${size === 'small' ? 'text-sm' : 'text-base'} ${color === 'white' ? 'text-gray-100' : 'text-gray-900'}`}
            >
              {author.position}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
