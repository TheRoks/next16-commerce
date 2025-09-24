import React, { Suspense } from 'react';
import Search, { SearchSkeleton } from '@/components/Search';
import WelcomeBanner from '@/components/banner/WelcomeBanner';

export default async function AllLayout({ children }: LayoutProps<'/all'>) {
  return (
    <>
      <WelcomeBanner />
      <Suspense fallback={<SearchSkeleton />}>
        <Search />
      </Suspense>
      <div className="flex h-full grow gap-12">{children}</div>
    </>
  );
}
