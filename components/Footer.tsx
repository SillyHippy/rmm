'use client'

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">{/* Reduced from py-12 to py-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{/* Reduced gap from 8 to 6 */}
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/Logo.avif" 
                alt="RMM Service of Process" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-10 h-10 bg-brand-lime rounded-lg items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">RMM</span>
              </div>
              <div>
                <div className="font-bold text-lg">RMM Service of Process</div>
                <div className="text-xs text-gray-300 italic">serving oklahoma since 2015</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional process serving and legal document delivery services in Oklahoma.
            </p>
            <div className="mb-4 space-y-2">
              <p className="text-gray-400 text-xs mb-2 font-semibold">Contact Ryley:</p>
              <a href="tel:4056059364" className="text-brand-lime hover:text-brand-lime-light block text-sm transition-colors">
                📞 (405) 605-9364
              </a>
              <a href="mailto:rmmsop@gmail.com" className="text-brand-lime hover:text-brand-lime-light block text-sm transition-colors">
                ✉️ rmmsop@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/rmmsop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800/50 hover:bg-brand-lime hover:text-gray-900 rounded-lg flex items-center justify-center transition-all border border-blue-700"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ryley-mcgee-014a8556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800/50 hover:bg-brand-lime hover:text-gray-900 rounded-lg flex items-center justify-center transition-all border border-blue-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://linktr.ee/rmmsop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800/50 hover:bg-brand-lime hover:text-gray-900 rounded-lg flex items-center justify-center transition-all border border-blue-700 text-xs font-bold"
                aria-label="Linktree"
              >
                LT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm">Services</Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-gray-400 hover:text-white text-sm">Service Areas</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Process Serving</li>
              <li className="text-gray-400 text-sm">Court Filing</li>
              <li className="text-gray-400 text-sm">Certified Registered Service</li>
              <li className="text-gray-400 text-sm">Private Investigations</li>
              <li className="text-gray-400 text-sm">Skip Tracing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  308 Summer Oaks Drive<br />
                  Blanchard, OK 73010
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <a href="tel:4056059364" className="text-gray-400 hover:text-white text-sm">
                  (405) 605-9364
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:rmmsop@gmail.com" className="text-gray-400 hover:text-white text-sm">
                  rmmsop@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">Hours:</p>
              <p>Monday - Saturday</p>
              <p>7:00 AM - 10:00 PM</p>
              <p className="text-xs mt-1">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} RMM Service of Process. All rights reserved.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Proud Member of:
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a 
                href="https://napps.org/Process-Servers/Oklahoma/Oklahoma%20City" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Ryley McGee on NAPPS"
                className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-lg transition-all duration-300 border border-slate-700 hover:border-brand-lime"
              >
                <img 
                  src="/Napps logo.avif" 
                  alt="NAPPS Member Since 2024" 
                  className="h-20 w-auto"
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-gray-400 text-sm">NAPPS Member</span>';
                    }
                  }} 
                />
              </a>
              <a 
                href="https://www.okppsa.org/business-directory/ryley-mcgee/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Ryley McGee on OKPPSA"
                className="bg-slate-800/50 hover:bg-slate-800 p-4 rounded-lg transition-all duration-300 border border-slate-700 hover:border-brand-lime"
              >
                <img 
                  src="/OKPPSA LOGO.avif" 
                  alt="OKPPSA Member" 
                  className="h-20 w-auto"
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-gray-400 text-sm">OKPPSA Member</span>';
                    }
                  }} 
                />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Serving Oklahoma Since 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
