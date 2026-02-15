'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // Destructure out framer-motion props that might conflict with standard button props if spread directly
  const { 
    onAnimationStart, 
    onDragStart, 
    onDragEnd, 
    onDrag, 
    onLayoutAnimationStart,
    ...rest 
  } = props as any;

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-electric-blue text-white hover:bg-blue-light hover:shadow-lg hover:shadow-electric-blue/30',
    secondary:
      'bg-steel-grey text-white hover:bg-steel-light hover:shadow-lg',
    outline:
      'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
    orange:
      'bg-industrial-orange text-white hover:bg-warm-amber hover:shadow-lg hover:shadow-industrial-orange/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}
