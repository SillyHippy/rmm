"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/Logo.avif" 
              alt="RMM Service of Process" 
              width={64}
              height={64}
              className="h-16 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">RMM</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">RMM Service of Process</div>
              <div className="text-xs text-gray-600">Professional Process Serving</div>
              <div className="text-xs text-gray-500 italic">serving oklahoma since 2015</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/service-areas" className="text-gray-700 hover:text-blue-600 font-medium">
              Service Areas
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="bg-brand-lime text-gray-900 px-6 py-2 rounded-lg hover:bg-brand-lime-light font-medium shadow-md">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/service-areas" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Service Areas
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/contact" className="bg-brand-lime text-gray-900 px-6 py-2 rounded-lg hover:bg-brand-lime-light font-medium text-center shadow-md" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
