import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

interface PrimaryButtonProps extends PropsWithChildren {
  className?: string;
  tag?: 'button' | 'a';
  href?: string;
  [key: string]: any;
}

const classes =
  'text-white bg-indigo-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4';

export default function PrimaryButton({
  children,
  className,
  href,
  tag = 'button',
  ...props
}: PrimaryButtonProps) {
  return (
    <>
      {tag === 'button' && (
        <button className={`${classes} ${className}`} {...props}>
          {children}
        </button>
      )}

      {tag === 'a' && (
        <Link
          href={href as string}
          className={`${classes} ${className}`}
          {...props}
        >
          {children}
        </Link>
      )}
    </>
  );
}
