import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCT_DETAILS, getProductBySlug, getRelatedProducts, getAllProductSlugs } from '@/lib/productData';
import ProductDetail from '@/components/products/ProductDetail';
import StructuredData from '@/components/seo/StructuredData';
import { getProductSchema, getBreadcrumbSchema } from '@/lib/seo';

// Generate static params for all products
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found - JB Enterprise',
    };
  }

  return {
    title: `${product.name} - JB Enterprise Products`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  // Generate structured data
  const productSchema = getProductSchema(product);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://jbenterprise.com' },
    { name: 'Products', url: 'https://jbenterprise.com/products' },
    { name: product.name, url: `https://jbenterprise.com/products/${product.slug}` },
  ]);

  return (
    <>
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
