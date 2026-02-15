'use client';

import React from 'react';
import { Zap, Settings, Package, Wrench } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Card, { CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={32} />,
  Settings: <Settings size={32} />,
  Package: <Package size={32} />,
  Wrench: <Wrench size={32} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <RevealOnScroll variant="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-steel-grey max-w-2xl mx-auto">
            We have highly-tailored industry solutions to optimize your power
            plant operations.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.id} variant="slideUp" delay={index * 0.1}>
              <Card className="h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image || "/images/services/power-plant-services.png"} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-electric-blue shadow-lg">
                    {iconMap[service.icon]}
                  </div>
                </div>
                <CardContent className="flex-1">
                  <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-industrial-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-steel-grey mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-steel-grey flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-electric-blue rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
