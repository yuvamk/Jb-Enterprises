'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeIn, slideUp } from '@/lib/animations';
import { SITE_CONFIG } from '@/lib/constants';

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8"
        >
          {/* Serif Tagline - Triveni Inspired */}
          <motion.p
            variants={slideUp}
            className="hero-tagline text-2xl md:text-3xl text-industrial-orange tracking-wide"
          >
            Imagine. Innovate. Inspire.
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            {SITE_CONFIG.tagline}
          </motion.h1>
          
          <motion.p
            variants={slideUp}
            className="text-xl md:text-2xl text-off-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted leader in sustainable power plant solutions, specializing in
            turbine and generator services with cutting-edge technology.
          </motion.p>

          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              icon={<ArrowRight size={20} />}
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white hover:text-electric-blue transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
