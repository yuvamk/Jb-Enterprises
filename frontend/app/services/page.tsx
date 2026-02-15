import { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { VerticalTabs } from '@/components/ui/VerticalTabs';
import { Zap, Settings, Package, Wrench, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - JB Enterprise',
  description: 'Comprehensive power plant services including erection, commissioning, spares, and troubleshooting.',
};

function getServiceIcon(iconName: string) {
  const icons: Record<string, React.ReactElement> = {
    Zap: <Zap className="w-6 h-6" />,
    Settings: <Settings className="w-6 h-6" />,
    Package: <Package className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
  };
  return icons[iconName] || <Zap className="w-6 h-6" />;
}

export default function ServicesPage() {
  const serviceTabs = SERVICES.map((service) => ({
    id: service.id,
    label: service.title,
    icon: getServiceIcon(service.icon),
    content: (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-steel-light/20">
        <h3 className="text-3xl font-bold text-navy-dark mb-4">{service.title}</h3>
        <p className="text-lg text-steel-grey mb-6">{service.description}</p>
        
        <h4 className="text-xl font-semibold text-navy-dark mb-4">Key Features</h4>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-industrial-orange flex-shrink-0 mt-1" />
              <span className="text-steel-grey">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="bg-off-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-navy-dark mb-3">Why Choose This Service?</h4>
          <p className="text-steel-grey">
            Our {service.title.toLowerCase()} solutions are designed to maximize efficiency, minimize downtime, and ensure long-term reliability. With our experienced team and global vendor network, we deliver results that exceed expectations.
          </p>
        </div>
      </div>
    ),
  }));

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-20">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h1 className="text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-2xl text-off-white/90 max-w-3xl hero-tagline">
              Comprehensive Power Plant Solutions
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h2 className="text-4xl font-bold text-navy-dark text-center mb-12">
              Explore Our Services
            </h2>
          </RevealOnScroll>

          <RevealOnScroll variant="slideUp">
            <VerticalTabs tabs={serviceTabs} />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white">
        <div className="container-custom text-center">
          <RevealOnScroll variant="fade">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-off-white/90 mb-8 max-w-2xl mx-auto">
              Our team can design tailored solutions to meet your specific power plant requirements.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-industrial-orange to-warm-amber text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Request a Consultation
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
