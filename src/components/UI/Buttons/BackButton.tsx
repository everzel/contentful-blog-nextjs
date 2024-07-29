'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import whiteBackIcon from '@/assets/icons/arrows/white-back.svg';

interface BackButtonProps {
  children: React.ReactNode;
}

export default function BackButton({ children }: BackButtonProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex space-x-2 items-center cursor-pointer group w-max hover:opacity-60"
    >
      <Image
        src={whiteBackIcon}
        width={20}
        alt="Back"
        className="group-hover:-translate-x-2 relative transition ease-in-out"
        priority={true}
      />

      <span className="text-white">{children}</span>
    </div>
  );
}
