'use client';

import { ProductDetail as ProductDetailType } from '@/lib/productData';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Image from 'next/image';
import {
  ArrowLeft,
  Check,
  Download,
  Package,
  Clock,
  FileText,
  Zap,
  Settings,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import RelatedProducts from './RelatedProducts';

interface ProductDetailProps {
  product: ProductDetailType;
  relatedProducts: ProductDetailType[];
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  return (
    <main className="min-h-screen pt-20">
      {/* Back button */}
      <section className="bg-white py-6 border-b border-steel-light/20">
        <div className="container-custom">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-industrial-orange transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <RevealOnScroll variant="slideRight">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Product Info */}
            <RevealOnScroll variant="slideLeft">
              <div>
                <div className="inline-block bg-industrial-orange text-white text-sm px-4 py-2 rounded-full mb-4">
                  {product.category}
                </div>
                <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-off-white/90 mb-6">{product.description}</p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-industrial-orange" />
                    <span className={product.inStock ? 'text-green-400' : 'text-orange-400'}>
                      {product.inStock ? 'In Stock' : 'Made to Order'}
                    </span>
                  </div>
                  {product.leadTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-industrial-orange" />
                      <span>{product.leadTime}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button variant="orange" size="lg">
                    <ShoppingCart className="w-5 h-5" />
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg">
                    <FileText className="w-5 h-5" />
                    Download Specs
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <RevealOnScroll variant="slideUp">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-navy-dark mb-4">Product Overview</h2>
                  <p className="text-steel-grey leading-relaxed text-lg">{product.longDescription}</p>
                </div>
              </RevealOnScroll>

              {/* Specifications */}
              <RevealOnScroll variant="slideUp">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-navy-dark mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-industrial-orange" />
                    Technical Specifications
                  </h2>
                  <div className="bg-off-white rounded-xl p-6 border border-steel-light/30">
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-steel-light/30">
                          <span className="font-semibold text-navy-dark">{spec.label}:</span>
                          <span className="text-steel-grey text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Features */}
              <RevealOnScroll variant="slideUp">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-navy-dark mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-industrial-orange" />
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-steel-grey leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Applications */}
              <RevealOnScroll variant="slideUp">
                <div>
                  <h2 className="text-3xl font-bold text-navy-dark mb-6">Applications</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.applications.map((application, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-off-white to-white p-4 rounded-lg border border-steel-light/30 hover:border-industrial-orange transition-colors duration-300"
                      >
                        <span className="text-navy-dark font-medium">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <RevealOnScroll variant="slideLeft">
                {/* Technical Documents */}
                {product.technicalDocs && product.technicalDocs.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg border border-steel-light/20 p-6 mb-6">
                    <h3 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
                      <Download className="w-5 h-5 text-industrial-orange" />
                      Technical Documents
                    </h3>
                    <div className="space-y-3">
                      {product.technicalDocs.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.url}
                          className="flex items-center gap-3 px-4 py-3 bg-off-white rounded-lg hover:bg-industrial-orange hover:text-white transition-all duration-300 group"
                        >
                          <FileText className="w-5 h-5" />
                          <span className="font-semibold text-sm">{doc.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-industrial-orange to-warm-amber rounded-xl shadow-lg p-6 text-white">
                  <h3 className="font-bold mb-3">Need More Information?</h3>
                  <p className="text-sm mb-4 text-white/90">
                    Our technical team is ready to assist you with product selection and specifications.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-industrial-orange">
                    Contact Sales
                  </Button>
                </div>
              </RevealOnScroll>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-off-white">
          <div className="container-custom max-w-6xl">
            <RevealOnScroll variant="fade">
              <h2 className="text-4xl font-bold text-navy-dark mb-8 text-center">Related Products</h2>
            </RevealOnScroll>
            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      )}
    </main>
  );
}
