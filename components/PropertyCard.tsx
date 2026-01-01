"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export interface Property {
  id: string;
  location: string;
  priceRange: string;
  imageUrl?: string;
}

interface PropertyCardProps {
  property: Property;
  whatsappNumber: string;
  index: number;
}

export default function PropertyCard({ property, whatsappNumber, index }: PropertyCardProps) {
  const message = `Hello, I'm interested in the property in ${property.location}. Can you provide more details?`;

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Property Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium">{property.location}</p>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex items-start gap-2 mb-3">
          <MapPin size={18} className="text-[#25D366] mt-1 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-gray-900">
            {property.location}
          </h3>
        </div>
        
        <p className="text-2xl font-bold text-gray-900 mb-4">
          {property.priceRange}
        </p>

        <WhatsAppButton
          phoneNumber={whatsappNumber}
          message={message}
          variant="secondary"
          className="w-full"
        />
      </div>
    </motion.div>
  );
}

