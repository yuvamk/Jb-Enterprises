'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Placeholder client logos - replace with actual logos
const clients = [
  'Client 1',
  'Client 2',
  'Client 3',
  'Client 4',
  'Client 5',
  'Client 6',
  'Client 7',
  'Client 8',
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-off-white overflow-hidden">
      <div className="container-custom mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-dark text-center mb-4">
          Major Clientele
        </h2>
        <p className="text-lg text-steel-grey text-center max-w-2xl mx-auto">
          Trusted by leading power plants and energy companies worldwide.
        </p>
      </div>

      {/* Infinite Scrolling Logo Slider */}
      <div className="relative">
        <div className="flex gap-16 animate-scroll">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-steel-grey font-semibold">{client}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-steel-grey font-semibold">{client}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
