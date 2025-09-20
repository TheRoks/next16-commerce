import Product from '@/features/product/components/Product';

export default async function ProductModal({ params }: PageProps<'/product/[id]'>) {
  const { id } = await params;
  const productId = Number(id);

  return <Product imageClassName="h-60" productId={productId} />;
}
