'use client';

import React from 'react';
import { ScrollToTop } from '@/components/scroll-to-top';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}