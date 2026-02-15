'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { PRODUCTS } from '@/lib/constants';
import { staggerContainer } from '@/lib/animations';

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 md:py-32 bg-navy-dark text-white">
      <div className="container-custom">
        <RevealOnScroll variant="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-steel-light max-w-2xl mx-auto">
            Experience perfection in the quality of well-designed products for
            power plant operations.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product) => (
            <RevealOnScroll key={product.id} variant="scale">
              <motion.div
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
                onHoverStart={() => setHoveredId(product.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-80'
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredId === product.id ? 0 : 20,
                      opacity: hoveredId === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <span className="text-sm text-electric-blue font-medium">
                      {product.category}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredId === product.id ? 'auto' : 0,
                      opacity: hoveredId === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-steel-light overflow-hidden"
                  >
                    {product.description}
                  </motion.p>

                  <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: hoveredId === product.id ? 0 : 10,
                      opacity: hoveredId === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-electric-blue font-semibold hover:text-blue-light transition-colors"
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
