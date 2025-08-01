import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js 15 App Router Commerce',
  title: 'Next 15 Commerce',
};

export default async function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {children}
          {modal}
        </div>
        <Footer />
      </body>
    </html>
  );
}
