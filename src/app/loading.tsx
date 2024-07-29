'use client';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
}
