import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  tag?: string;
  className?: string;
  children: React.ReactNode;
}

const classesMap: {
  [key: number]: string;
} = {
  1: 'text-5xl md:text-5xl font-bold',
  2: 'text-4xl md:text-4xl font-bold',
  3: 'text-3xl md:text-3xl font-bold',
  4: 'text-2xl md:text-2xl font-bold',
  5: 'text-xl md:text-xl font-bold',
  6: 'text-lg md:text-lg font-bold',
};

export default function Heading({
  level,
  children,
  tag,
  className,
}: HeadingProps) {
  return React.createElement(
    tag || `h${level}`,
    {
      className: `${classesMap[level]} ${tag === 'span' ? 'block' : ''} ${className ? className : ''}`,
    },
    children,
  );
}
