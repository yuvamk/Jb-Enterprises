'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { hoverLift } from '@/lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  glassmorphism = false,
}: CardProps) {
  const baseStyles = 'rounded-xl overflow-hidden';

  const glassStyles = glassmorphism
    ? 'bg-white/10 backdrop-blur-lg border border-white/20'
    : 'bg-white shadow-lg';

  return (
    <motion.div
      variants={hover ? hoverLift : undefined}
      initial="rest"
      whileHover={hover ? 'hover' : undefined}
      className={`${baseStyles} ${glassStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  image?: string;
}

export function CardHeader({ children, className = '', image }: CardHeaderProps) {
  if (image) {
    return (
      <div className={`relative h-48 overflow-hidden ${className}`}>
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {children && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent flex items-end p-6">
            {children}
          </div>
        )}
      </div>
    );
  }

  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 pt-0 flex items-center gap-4 ${className}`}>
      {children}
    </div>
  );
}
