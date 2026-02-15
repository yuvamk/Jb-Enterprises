'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideUp, slideInLeft, slideInRight, scaleIn } from '@/lib/animations';

interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function RevealOnScroll({
  children,
  variant = 'slideUp',
  delay = 0,
  threshold = 0.2,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
}: RevealOnScrollProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const variants: Record<string, Variants> = {
    fade: fadeIn,
    fadeIn: fadeIn,
    slideUp,
    slideLeft: slideInLeft,
    slideRight: slideInRight,
    scale: scaleIn,
  };

  const selectedVariant = variants[variant] || fadeIn; // Fallback to fadeIn if variant not found

  // Add delay to the variant
  const variantWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
        ...(stagger && { staggerChildren: staggerDelay }),
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variantWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
