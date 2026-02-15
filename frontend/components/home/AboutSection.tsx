'use client';

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS, SITE_CONFIG } from '@/lib/constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-off-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <RevealOnScroll variant="slideLeft">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">
                About JB Enterprise
              </h2>
              <p className="text-lg text-steel-grey leading-relaxed">
                {SITE_CONFIG.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">
                    Our Vision
                  </h3>
                  <p className="text-steel-grey">
                    To be the global leader in innovative power plant solutions,
                    driving sustainable energy transformation through excellence
                    and cutting-edge technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">
                    Our Mission
                  </h3>
                  <p className="text-steel-grey">
                    Delivering world-class power plant services that optimize
                    operational efficiency, ensure reliability, and support our
                    clients' long-term success through innovation and partnership.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Stats */}
          <RevealOnScroll variant="slideRight">
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, index) => (
                <div
                  key={stat.id}
                  className="text-center"
                >
                  {/* Circular Background with Gradient */}
                  <div className="stat-circle">
                    <div className="text-white">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2000 + index * 200}
                        className="text-4xl font-bold"
                      />
                    </div>
                  </div>
                  <p className="text-navy-dark font-semibold text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
