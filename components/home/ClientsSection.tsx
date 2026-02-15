'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'PowerGen Systems', logo: '/images/clients/powergen.png' },
  { name: 'Global Turbine', logo: '/images/clients/global-turbine.png' },
  { name: 'EcoPower Dynamics', logo: '/images/clients/ecopower.png' },
  { name: 'Precision Parts Ltd', logo: '/images/clients/precision-parts.png' },
  { name: 'Energy Flow Corp', logo: '/images/clients/powergen.png' }, // Reusing logos for infinite scroll variety
  { name: 'Industrial Masters', logo: '/images/clients/global-turbine.png' },
  { name: 'Power Grid Solutions', logo: '/images/clients/ecopower.png' },
  { name: 'Mega Watt Tech', logo: '/images/clients/precision-parts.png' },
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
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border border-steel-light/10"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                title={client.name}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border border-steel-light/10"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                title={client.name}
              />
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
