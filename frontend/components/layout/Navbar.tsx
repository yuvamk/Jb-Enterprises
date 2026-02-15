'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { MegaMenu } from '@/components/ui/MegaMenu';
import { SERVICES_MEGA_MENU, PRODUCTS_MEGA_MENU } from '@/lib/megaMenuData';
import SearchBar from '@/components/ui/SearchBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">JB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-navy-dark">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-steel-grey">Power Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              // Use MegaMenu for Services and Products
              if (link.label === 'Services') {
                return (
                  <MegaMenu
                    key={link.href}
                    label={link.label}
                    items={SERVICES_MEGA_MENU}
                    columns={2}
                  />
                );
              }
              if (link.label === 'Products') {
                return (
                  <MegaMenu
                    key={link.href}
                    label={link.label}
                    items={PRODUCTS_MEGA_MENU}
                    columns={2}
                  />
                );
              }
              // Regular links for other pages
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? 'text-electric-blue'
                      : 'text-navy-dark hover:text-electric-blue'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-electric-blue transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            
            {/* Search Bar */}
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-dark hover:text-electric-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-steel-light/20"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 py-2 ${
                    pathname === link.href
                      ? 'text-electric-blue'
                      : 'text-navy-dark hover:text-electric-blue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
