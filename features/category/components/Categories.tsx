import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import Link from 'next/link';
import Boundary from '@/components/internal/Boundary';
import LinkStatus from '@/components/ui/LinkStatus';
import ShowMore from '@/components/ui/ShowMore';
import { getCategories } from '../category-queries';

export default async function Categories() {
  'use cache';

  cacheTag('categories');

  const categories = await getCategories();

  return (
    <Boundary rendering="hybrid" cached>
      <ShowMore initial={5}>
        {categories.map(category => {
          return (
            <Boundary key={category} hydration="server">
              <Link
                href={{
                  pathname: '/all',
                  query: { category },
                }}
                className="text-gray dark:text-gray hover:text-primary block text-sm transition-colors"
              >
                <LinkStatus variant="spinner">{category}</LinkStatus>
              </Link>
            </Boundary>
          );
        })}
      </ShowMore>
    </Boundary>
  );
}
