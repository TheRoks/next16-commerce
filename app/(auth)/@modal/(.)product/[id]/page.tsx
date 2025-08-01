import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import React, { Suspense } from 'react';
import Modal from '@/components/ui/Modal';
import Product, { ProductSkeleton } from '@/modules/product/components/Product';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductModal({ params }: Props) {
  'use cache';
  cacheLife('days');

  const { id } = await params;
  const productId = Number(id);

  return (
    <Modal goBackOnClose openModal={true} title="Quick Preview">
      <Suspense fallback={<ProductSkeleton />}>
        <Product imageClassName="h-60" productId={productId} />
      </Suspense>
      <div className="mt-6 flex justify-center">
        <a
          className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
          href={`/product/${productId}`}
        >
          {'View product details ->'}
        </a>
      </div>
    </Modal>
  );
}
