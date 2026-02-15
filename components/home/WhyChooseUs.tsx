'use client';

import React from 'react';
import { Award, Shield, Globe, CheckCircle } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={40} />,
  Shield: <Shield size={40} />,
  Globe: <Globe size={40} />,
  CheckCircle: <CheckCircle size={40} />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <RevealOnScroll variant="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-steel-grey max-w-2xl mx-auto">
            We combine quality, ethics, and comprehensive service to deliver
            exceptional results.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {WHY_CHOOSE_US.map((item) => (
            <RevealOnScroll key={item.id} variant="slideUp">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-electric-blue">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-steel-grey">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
