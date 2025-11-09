"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="tel:4056059364"
      className={`fixed bottom-6 right-6 z-50 bg-brand-lime text-gray-900 p-4 rounded-full shadow-2xl hover:bg-brand-lime-light transition-all duration-300 hover:scale-110 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Call RMM Service of Process"
    >
      <Phone size={28} className="animate-pulse group-hover:animate-none" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        Call (405) 605-9364
      </span>
    </a>
  );
}
