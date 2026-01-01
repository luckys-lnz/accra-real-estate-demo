"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: "primary" | "secondary" | "sticky";
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello, I'm interested in your properties.",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  // Format phone number for WhatsApp (remove any non-digits)
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg";
  
  const variantClasses = {
    primary: "bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 text-base shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-[#25D366] border-2 border-[#25D366] px-6 py-3 text-base",
    sticky: "bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 text-sm shadow-2xl hover:shadow-3xl fixed bottom-4 right-4 z-50 md:hidden",
  };

  // For sticky variant, don't animate on mount since it's always visible
  const animationProps = variant === "sticky" 
    ? { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...animationProps}
    >
      <MessageCircle size={variant === "sticky" ? 20 : 24} />
      <span>Chat on WhatsApp</span>
    </motion.a>
  );
}

