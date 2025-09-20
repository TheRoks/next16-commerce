import { CategoryFiltersSkeleton } from '@/features/category/components/CategoryFilters';
import { ProductListSkeleton } from '@/features/product/components/ProductList';

export default function Loading() {
  return (
    <>
      <div className="hidden w-64 flex-shrink-0 md:block">
        <div className="sticky top-4">
          <h3 className="mb-5 text-lg font-bold tracking-tight uppercase">Categories</h3>
          <CategoryFiltersSkeleton />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-4 md:hidden">
          <CategoryFiltersSkeleton />
          <div className="flex justify-end">
            <SortButtonSkeleton />
          </div>
        </div>
        <div className="hidden justify-end md:flex">
          <SortButtonSkeleton />
        </div>
        <ProductListSkeleton />
      </div>
    </>
  );
}

function SortButtonSkeleton() {
  return (
    <div className="inline-flex h-6 items-center gap-1.5 text-xs font-bold tracking-wide uppercase">
      <div className="flex items-center gap-2">
        <div className="skeleton-animation size-3.5 rounded" />
        <div className="skeleton-animation h-3 w-16 rounded" />
      </div>
    </div>
  );
}
