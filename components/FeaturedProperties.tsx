"use client";

import { motion } from "framer-motion";
import PropertyCard, { Property } from "./PropertyCard";

interface FeaturedPropertiesProps {
  properties: Property[];
  whatsappNumber: string;
}

export default function FeaturedProperties({ properties, whatsappNumber }: FeaturedPropertiesProps) {
  return (
    <section id="properties" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our verified listings in prime Accra locations. 
            Each property has been carefully selected and verified for your peace of mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              whatsappNumber={whatsappNumber}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

