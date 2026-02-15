import { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { SITE_CONFIG } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - JB Enterprise',
  description: 'Get in touch with JB Enterprise for power plant solutions, services, and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-20">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-2xl text-off-white/90 max-w-3xl hero-tagline">
              Let's Start a Conversation
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <RevealOnScroll variant="scale">
              <div className="text-center p-6 rounded-xl bg-off-white">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-dark mb-2">Address</h3>
                <p className="text-steel-grey text-sm">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="scale" delay={0.1}>
              <div className="text-center p-6 rounded-xl bg-off-white">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-blue-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-dark mb-2">Phone</h3>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-steel-grey hover:text-industrial-orange transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="scale" delay={0.2}>
              <div className="text-center p-6 rounded-xl bg-off-white">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-dark mb-2">Email</h3>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-steel-grey hover:text-industrial-orange transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="scale" delay={0.3}>
              <div className="text-center p-6 rounded-xl bg-off-white">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-blue-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-dark mb-2">Business Hours</h3>
                <p className="text-steel-grey text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form */}
          <RevealOnScroll variant="fade">
            <ContactSection />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
