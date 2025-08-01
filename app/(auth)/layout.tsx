import React, { Suspense } from 'react';

import Header from '@/components/Header';
import { getIsAuthenticated } from '@/modules/auth/auth-queries';
import { AuthProvider } from '@/modules/auth/components/AuthProvider';
import UserProfile, { UserProfileSkeleton } from '@/modules/auth/components/UserProfile';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = getIsAuthenticated();

  return (
    <AuthProvider isAuthenticated={isAuthenticated}>
      <Header rightContent={<Suspense fallback={<UserProfileSkeleton />}>{<UserProfile />}</Suspense>} />
      <main className="flex flex-1 flex-col gap-10 p-4 pb-8 sm:p-10 sm:pb-8 lg:pb-20 2xl:px-60">{children}</main>
    </AuthProvider>
  );
}
