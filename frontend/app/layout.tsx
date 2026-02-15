import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import { SEO_METADATA } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    type: SEO_METADATA.openGraph.type as any,
    locale: SEO_METADATA.openGraph.locale,
    siteName: SEO_METADATA.openGraph.siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
