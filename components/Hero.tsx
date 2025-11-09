import Link from "next/link";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-brand-lime/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-brand-lime/30">
            ⭐ Serving Oklahoma Since 2015 | NAPPS & OKPPSA Member
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Process Serving in Oklahoma
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Fast, reliable, and confidential legal document delivery services across Cleveland, Canadian, McClain, and Grady counties.
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="text-blue-300" size={20} />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-blue-300" size={20} />
              <span className="text-sm font-medium">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-300" size={20} />
              <span className="text-sm font-medium">100% Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/contact" 
              className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              Get Started Today
              <ArrowRight size={20} />
            </Link>
            <a 
              href="tel:4056059364" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center justify-center text-lg border-2 border-white"
            >
              Call (405) 605-9364
            </a>
          </div>

          <p className="text-sm text-gray-300">
            Available Monday - Saturday, 7:00 AM - 10:00 PM | Closed Sunday
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
