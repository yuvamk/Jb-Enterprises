import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ClientsSection from "@/components/home/ClientsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import ContactSection from "@/components/home/ContactSection";
import StructuredData from "@/components/seo/StructuredData";
import { getOrganizationSchema } from "@/lib/seo";

export default function Home() {
  const organizationSchema = getOrganizationSchema();

  return (
    <main>
      <StructuredData data={organizationSchema} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
