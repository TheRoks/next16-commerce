'use cache';

import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { AuthProvider } from '@/features/auth/components/AuthProvider';

export default async function AuthLayout({ children, modal }: LayoutProps<'/'>) {
  // const loggedIn = getIsAuthenticated();

  return (
    <AuthProvider loggedIn={Promise.resolve(false)}>
      <AppLayout>
        {children}
        {modal}
      </AppLayout>
    </AuthProvider>
  );
}
