'use client';

import React from 'react';
import { PostItemData } from '@/services/contentful/types/controllers/blog/post/list-controller';
import Link from 'next/link';
import { route } from '@/app/routes';
import Image from 'next/image';
import { wsrvImageLoader } from '@/utils/imageLoader';
import { formatDate } from '@/utils/formatDate';
import AuthorCard from '@/components/Blog/Common/AuthorCard';
import Heading from '@/components/Topography/Heading';

interface ComponentProps {
  post: PostItemData;
}

export default function GridItem({ post }: ComponentProps): React.ReactElement {
  return (
    <div className="block group w-full border border-gray-300 rounded-2xl relative hover:bg-gray-100">
      <Link
        href={route('post', { slug: post.slug })}
        className="w-full h-full absolute inset-0 z-10"
      />

      <div className="flex items-center relative">
        <Image
          loader={wsrvImageLoader}
          src={post.image_url}
          width={380}
          height={0}
          alt={post.name}
          className="rounded-t-2xl w-full min-h-[200px] md:min-h-[220px] h-auto object-cover"
          priority
        />

        <span className="text-sm block right-4 top-2 absolute bg-indigo-600 py-1 px-2 text-white rounded-lg shadow-lg">
          {formatDate(post.published_at)}
        </span>
      </div>

      <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
        <div className="w-full mb-5">
          <AuthorCard author={post.author} />
        </div>

        <Heading
          level={5}
          className="!font-medium text-gray-900 leading-8 mb-3"
        >
          {post.name}
        </Heading>

        <p className="text-gray-500 leading-6">{post.description}</p>
      </div>
    </div>
  );
}
