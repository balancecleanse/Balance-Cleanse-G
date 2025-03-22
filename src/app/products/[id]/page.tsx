import ProductDetail from './ProductDetail';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: PageProps) {
  // Add artificial delay to simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
