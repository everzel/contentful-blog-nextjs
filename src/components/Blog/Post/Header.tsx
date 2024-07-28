'use client';

import React from 'react';
import { PostPageData } from '@/services/contentful/types/controllers/blog/post/getController';
import BackButton from '@/components/UI/Buttons/BackButton';
import { wsrvImageLoader } from '@/utils/imageLoader';
import Heading from '@/components/Topography/Heading';
import AuthorCard from '@/components/Blog/Common/AuthorCard';
import { formatDate } from '@/utils/formatDate';

interface ComponentProps {
  post: PostPageData;
}

export default function Header({ post }: ComponentProps) {
  const backgroundURL = wsrvImageLoader({
    src: post.image_url,
    width: 1400,
    quality: 100,
  });

  return (
    <section
      className="relative min-h-[200px] md:min-h-[500px]"
      style={{
        background: `url(${backgroundURL}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full bg-black opacity-70 z-10 absolute inset-0"></div>

      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-8 lg:px-11 mx-auto max-md:px-4 pt-6 z-20 relative">
        <BackButton>Back</BackButton>
      </div>

      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4 z-20 relative pt-28 pb-20">
        <Heading level={1} className="text-white leading-tight mb-8">
          {post.name}
        </Heading>

        <div className="flex items-center justify-between">
          <AuthorCard
            author={post.author}
            type="link"
            color="white"
            size="large"
          />

          <span className="text-white">{formatDate(post.published_at)}</span>
        </div>
      </div>
    </section>
  );
}
