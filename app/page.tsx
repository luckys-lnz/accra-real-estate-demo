"use client";

import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Property } from "@/components/PropertyCard";

// ============================================
// CUSTOMIZATION: Update these values
// ============================================
const BUSINESS_NAME = "PrimeEdge Realty";
const WHATSAPP_NUMBER = "233XXXXXXXXX"; // Format: 233XXXXXXXXX (Ghana country code + number)
const LOCATION = "Accra, Ghana";

// Sample properties - customize these with your actual listings
const PROPERTIES: Property[] = [
  {
    id: "1",
    location: "East Legon",
    priceRange: "GHS 800,000 - GHS 1,200,000",
  },
  {
    id: "2",
    location: "Spintex Road",
    priceRange: "GHS 600,000 - GHS 900,000",
  },
  {
    id: "3",
    location: "Airport Area",
    priceRange: "GHS 1,000,000 - GHS 1,500,000",
  },
  {
    id: "4",
    location: "Cantonments",
    priceRange: "GHS 1,200,000 - GHS 2,000,000",
  },
  {
    id: "5",
    location: "Labone",
    priceRange: "GHS 700,000 - GHS 1,100,000",
  },
  {
    id: "6",
    location: "Osu",
    priceRange: "GHS 500,000 - GHS 800,000",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero whatsappNumber={WHATSAPP_NUMBER} />

      {/* Trust Section */}
      <TrustSection />

      {/* Featured Properties */}
      <FeaturedProperties properties={PROPERTIES} whatsappNumber={WHATSAPP_NUMBER} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection whatsappNumber={WHATSAPP_NUMBER} />

      {/* Footer */}
      <Footer
        businessName={BUSINESS_NAME}
        location={LOCATION}
        whatsappNumber={WHATSAPP_NUMBER}
      />

      {/* Sticky WhatsApp Button (Mobile Only) */}
      <div className="md:hidden">
        <WhatsAppButton
          phoneNumber={WHATSAPP_NUMBER}
          variant="sticky"
        />
      </div>
    </main>
  );
}

