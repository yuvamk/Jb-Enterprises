'use client';

import React from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const certifications = [
  {
    id: 'iso-9001',
    icon: <Shield className="w-12 h-12" />,
    title: 'ISO 9001:2015',
    description: 'Quality Management System Certified',
  },
  {
    id: 'excellence',
    icon: <Award className="w-12 h-12" />,
    title: 'Industry Excellence',
    description: 'Award-Winning Service Provider',
  },
  {
    id: 'quality',
    icon: <CheckCircle className="w-12 h-12" />,
    title: 'Quality Assurance',
    description: 'Certified Quality Standards',
  },
  {
    id: 'safety',
    icon: <Star className="w-12 h-12" />,
    title: 'Safety Compliance',
    description: 'Industry Safety Standards Met',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-navy-dark">
      <div className="container-custom">
        <RevealOnScroll variant="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certifications & Awards
            </h2>
            <p className="text-steel-light text-lg max-w-2xl mx-auto">
              Recognized for excellence in quality, safety, and service delivery
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <RevealOnScroll
              key={cert.id}
              variant="slideUp"
              delay={index * 0.1}
            >
              <div className="bg-navy-medium rounded-xl p-8 text-center hover:bg-navy-medium/80 transition-all duration-300 border border-steel-grey/20 hover:border-industrial-orange/50 group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-industrial-orange to-warm-amber mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-steel-light">
                  {cert.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
