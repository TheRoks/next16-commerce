import './globals.css';

import { Geist } from 'next/font/google';
import React, { Suspense } from 'react';
import Footer from '@/components/Footer';
import { BoundaryProvider } from '@/components/internal/BoundaryProvider';
import AppLayout from '@/components/layout/AppLayout';
import UserProfile, { UserProfileSkeleton } from '@/features/user/components/UserProfile';
import type { Metadata } from 'next';

const GeistSans = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js 15 App Router Commerce',
  title: 'Next 15 Commerce',
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <BoundaryProvider>
          <div className="flex min-h-screen flex-col">
            <AppLayout headerContent={<Suspense fallback={<UserProfileSkeleton />}>{<UserProfile />}</Suspense>}>
              {children}
            </AppLayout>
          </div>
          <Footer />
        </BoundaryProvider>
      </body>
    </html>
  );
}
