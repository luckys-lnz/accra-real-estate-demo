"use client";

import { MessageCircle } from "lucide-react";

interface FooterProps {
  businessName: string;
  location: string;
  whatsappNumber: string;
}

export default function Footer({ businessName, location, whatsappNumber }: FooterProps) {
  const cleanPhone = whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">{businessName}</h3>
            <p className="text-gray-400">{location}</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp: {whatsappNumber}</span>
            </a>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Property Listings</li>
              <li>Property Verification</li>
              <li>Buyer Consultation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

