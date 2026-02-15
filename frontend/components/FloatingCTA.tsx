'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button after scrolling down 300px
      if (currentScrollY > 300) {
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hello! I would like to inquire about your power plant services.'
    );
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
