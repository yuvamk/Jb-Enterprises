'use client';

import { useState } from 'react';
import { PRODUCT_DETAILS } from '@/lib/productData';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CategoryFilter from '@/components/products/CategoryFilter';
import Image from 'next/image';
import { Package, Cog, Box, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const uniqueCategories = Array.from(new Set(PRODUCT_DETAILS.map(p => p.category)));

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? PRODUCT_DETAILS.filter(p => p.category === selectedCategory)
    : PRODUCT_DETAILS;

  const productCategories = [
    {
      name: 'Generator Components',
      icon: Cog,
      products: filteredProducts.filter(p => ['Stator Coils', 'Slip Rings', 'Generator Rotors'].includes(p.category)),
    },
    {
      name: 'Turbine Components',
      icon: Box,
      products: filteredProducts.filter(p => p.category === 'Turbine Blades'),
    },
  ].filter(cat => cat.products.length > 0); // Only show categories with products

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-20">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h1 className="text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-2xl text-off-white/90 max-w-3xl hero-tagline">
              Premium Quality Power Plant Components
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-off-white">
        <div className="container-custom">
          <CategoryFilter
            categories={uniqueCategories}
            onFilterChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Products by Category */}
      {productCategories.map((category, categoryIndex) => (
        <section
          key={category.name}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-off-white'}`}
          id={category.name.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className="container-custom">
            <RevealOnScroll variant="fade">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-lg flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-navy-dark">{category.name}</h2>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <RevealOnScroll key={product.id} variant="scale" delay={index * 0.1}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="block bg-white rounded-xl shadow-lg border border-steel-light/20 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-navy-dark to-navy-medium flex items-center justify-center relative overflow-hidden">
                      {product.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <Package className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="inline-block bg-industrial-orange text-white text-xs px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-industrial-orange transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-steel-grey mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-xs">
                          <Package className="w-4 h-4 text-steel-grey" />
                          <span className={product.inStock ? 'text-green-600' : 'text-orange-600'}>
                            {product.inStock ? 'In Stock' : 'Made to Order'}
                          </span>
                        </div>
                        {product.leadTime && (
                          <div className="flex items-center gap-1 text-xs text-steel-grey">
                            <Clock className="w-4 h-4" />
                            <span>{product.leadTime}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-electric-blue font-semibold group-hover:text-industrial-orange transition-colors duration-300">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll variant="slideRight">
              <h2 className="text-4xl font-bold mb-6">Quality You Can Trust</h2>
              <p className="text-xl text-off-white/90 mb-6">
                All our products meet or exceed OEM specifications and are backed by rigorous quality control processes.
              </p>
              <ul className="space-y-4">
                {[
                  'OEM Quality Standards',
                  'Comprehensive Testing',
                  'Global Sourcing Network',
                  'Fast Delivery Worldwide',
                  'Technical Support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-industrial-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-off-white">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll variant="slideLeft">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Need a Custom Part?</h3>
                <p className="text-off-white/90 mb-6">
                  We can source or manufacture custom components to meet your specific requirements.
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-gradient-to-r from-industrial-orange to-warm-amber text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Request a Quote
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
