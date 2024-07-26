import React from 'react';

interface ComponentProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  tag?: string;
  className?: string;
  children: React.ReactNode;
}

const classesMap: {
  [key: number]: string;
} = {
  1: 'text-4xl md:text-5xl font-bold',
  2: 'text-3xl md:text-4xl font-bold',
  3: 'text-2xl md:text-3xl font-bold',
  4: 'text-xl md:text-2xl font-bold',
  5: 'text-lg md:text-xl font-bold',
  6: 'text-base md:text-lg font-bold',
};

export default function TopographyHeading({
  level,
  children,
  tag,
  className,
}: ComponentProps): React.ReactElement {
  return React.createElement(
    tag || `h${level}`,
    {
      className: `${classesMap[level]} ${tag === 'span' ? 'block' : ''} ${className ? className : ''}`,
    },
    children,
  );
}
