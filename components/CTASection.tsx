"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

interface CTASectionProps {
  whatsappNumber: string;
}

export default function CTASection({ whatsappNumber }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Looking for Property in Accra?
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Message us on WhatsApp and get verified options today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WhatsAppButton
            phoneNumber={whatsappNumber}
            variant="primary"
            className="text-lg px-8 py-4"
          />
        </motion.div>
      </div>
    </section>
  );
}

