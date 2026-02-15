'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface MegaMenuProps {
  label: string;
  items: MegaMenuItem[];
  columns?: 1 | 2 | 3;
  dark?: boolean;
}

export function MegaMenu({ label, items, columns = 2, dark = false }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2 ${
          dark ? 'text-white hover:text-industrial-orange' : 'text-navy-dark hover:text-industrial-orange'
        }`}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-4xl"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-steel-light/20 p-8">
              <div
                className={`grid gap-6 ${
                  columns === 1
                    ? 'grid-cols-1'
                    : columns === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="group p-4 rounded-lg hover:bg-off-white transition-all duration-300 border border-transparent hover:border-industrial-orange/20"
                  >
                    <div className="flex items-start gap-4">
                      {item.icon && (
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-industrial-orange to-warm-amber flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-dark group-hover:text-industrial-orange transition-colors duration-300 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-steel-grey line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
