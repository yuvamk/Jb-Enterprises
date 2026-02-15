import { Metadata } from 'next';
import { SITE_CONFIG, STATS } from '@/lib/constants';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Award, Shield, Globe, CheckCircle, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - JB Enterprise',
  description: 'Learn about JB Enterprise, a trusted leader in sustainable power plant solutions with over 15 years of experience.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white py-20">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h1 className="text-6xl font-bold mb-6">About JB Enterprise</h1>
            <p className="text-2xl text-off-white/90 max-w-3xl hero-tagline">
              Powering Progress. Inspiring Innovation.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll variant="slideLeft">
              <h2 className="text-4xl font-bold text-navy-dark mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-steel-grey mb-4">
                {SITE_CONFIG.description}
              </p>
              <p className="text-lg text-steel-grey mb-4">
                With a focus on operational efficiency, we partner with global OEMs to deliver cutting-edge technology and expertise. Our team of experienced professionals is dedicated to providing comprehensive solutions that ensure long-term operational efficiency for power plants.
              </p>
              <p className="text-lg text-steel-grey">
                From repair to overhaul, we offer end-to-end services that optimize performance, ensure reliability, and support our clients' long-term success through innovation and partnership.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="slideRight">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="stat-circle">
                      <div className="text-4xl font-bold text-white">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          className="text-white"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-navy-dark">
                      {stat.label}
                    </h3>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll variant="slideUp">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-steel-light/20">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-navy-dark mb-4">Our Vision</h2>
                <p className="text-lg text-steel-grey">
                  To be the global leader in innovative power plant solutions, driving sustainable energy transformation through excellence and cutting-edge technology.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="slideUp" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-steel-light/20">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-blue-light rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-navy-dark mb-4">Our Mission</h2>
                <p className="text-lg text-steel-grey">
                  Delivering world-class power plant services that optimize operational efficiency, ensure reliability, and support our clients' long-term success through innovation and partnership.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <RevealOnScroll variant="fade">
            <h2 className="text-4xl font-bold text-navy-dark text-center mb-12">
              Our Core Values
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We adhere to stringent quality control measures, ensuring top-notch products and services.',
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Transparency and ethical business practices are at the core of all our dealings.',
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Our relationships with domestic and international vendors enable comprehensive solutions.',
              },
              {
                icon: CheckCircle,
                title: 'Commitment',
                description: 'Dedicated to ensuring long-term operational efficiency for our clients.',
              },
            ].map((value, index) => (
              <RevealOnScroll key={value.title} variant="scale" delay={index * 0.1}>
                <div className="text-center p-6 rounded-xl hover:bg-off-white transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-steel-grey">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white">
        <div className="container-custom text-center">
          <RevealOnScroll variant="fade">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-off-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help optimize your power plant operations.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-gradient-to-r from-industrial-orange to-warm-amber text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
