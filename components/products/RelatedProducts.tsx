'use client';

import { ProductDetail } from '@/lib/productData';
import Link from 'next/link';
import Image from 'next/image';
import { Package, Clock, ArrowRight } from 'lucide-react';

interface RelatedProductsProps {
  products: ProductDetail[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="group bg-white rounded-xl shadow-lg border border-steel-light/20 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-square bg-gradient-to-br from-off-white to-white flex items-center justify-center p-6 relative overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-block bg-industrial-orange text-white text-xs px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-industrial-orange transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-steel-grey mb-3 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between text-xs text-steel-grey mb-3">
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3" />
                <span className={product.inStock ? 'text-green-600' : 'text-orange-600'}>
                  {product.inStock ? 'In Stock' : 'Made to Order'}
                </span>
              </div>
              {product.leadTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{product.leadTime}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-electric-blue text-sm font-semibold group-hover:text-industrial-orange transition-colors duration-300">
              View Details <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
