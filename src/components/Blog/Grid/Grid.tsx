import React, { PropsWithChildren } from 'react';

export default function Grid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {children}
    </div>
  );
}
