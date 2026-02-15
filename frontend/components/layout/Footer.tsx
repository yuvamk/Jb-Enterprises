'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">{SITE_CONFIG.name}</span>
                <span className="text-xs text-steel-light">Power Solutions</span>
              </div>
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-light hover:text-electric-blue transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-electric-blue mt-0.5 flex-shrink-0" />
                <span className="text-steel-light">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-electric-blue flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-steel-light hover:text-electric-blue transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-electric-blue flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-steel-light hover:text-electric-blue transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-steel-grey hover:bg-electric-blue rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.tradeindia}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-steel-grey hover:bg-electric-blue rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="TradeIndia"
              >
                <span className="text-xs font-bold">TI</span>
              </a>
              <a
                href={SOCIAL_LINKS.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-steel-grey hover:bg-electric-blue rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="IndiaMART"
              >
                <span className="text-xs font-bold">IM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-steel-grey/30 mt-12 pt-8 text-center">
          <p className="text-steel-light text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
