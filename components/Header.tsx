import Link from 'next/link';
import React from 'react';

type Props = {
  rightContent?: React.ReactNode;
};

export default function Header({ rightContent }: Props) {
  return (
    <header className="border-divider dark:border-divider-dark flex min-h-20 items-center justify-between border-b bg-white px-4 py-4 sm:px-10 2xl:px-60 dark:bg-black">
      <h1 className="text-3xl font-bold">
        <Link href="/" className="text-primary hover:text-primary-dark">
          Commerce
        </Link>
      </h1>
      {rightContent}
    </header>
  );
}
