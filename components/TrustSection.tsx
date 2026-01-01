"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, MessageSquare } from "lucide-react";

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Every property is thoroughly verified before listing. We ensure all documentation is legitimate and properties meet our quality standards.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden fees, no surprises. We provide clear information about every property and our straightforward service terms.",
  },
  {
    icon: MessageSquare,
    title: "Fast WhatsApp Support",
    description: "Get instant responses to your questions. Our team is available on WhatsApp for quick, convenient communication.",
  },
];

export default function TrustSection() {
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
            Why You Can Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand that buying property is one of the biggest decisions you'll make. 
            That's why we've built our reputation on trust, transparency, and professionalism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#25D366] bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-[#25D366]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

