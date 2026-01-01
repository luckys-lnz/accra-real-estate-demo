"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Easy WhatsApp Communication",
    description: "No need to call or email. Simply message us on WhatsApp and get instant responses to your property inquiries.",
  },
  {
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges. We believe in honest, upfront communication about all costs.",
  },
  {
    title: "Local Accra Market Expertise",
    description: "Deep knowledge of Accra's neighborhoods, market trends, and property values to help you make informed decisions.",
  },
  {
    title: "Serious Buyers Only",
    description: "We focus on connecting serious buyers with quality properties, ensuring efficient and respectful transactions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Buyers Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built our service around what matters most to property buyers in Accra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="bg-[#25D366] bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-[#25D366]" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

