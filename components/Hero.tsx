"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface HeroProps {
  whatsappNumber: string;
}

export default function Hero({ whatsappNumber }: HeroProps) {
  const scrollToProperties = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted Real Estate Services in Accra
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Helping buyers and investors find verified properties with confidence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WhatsAppButton phoneNumber={whatsappNumber} variant="primary" />
          
          <button
            onClick={scrollToProperties}
            className="inline-flex items-center justify-center gap-2 font-semibold bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>View Available Properties</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

