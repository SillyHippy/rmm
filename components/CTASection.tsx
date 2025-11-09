import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for fast, professional process serving services in Oklahoma. 
            Available Monday through Saturday, 7:00 AM - 10:00 PM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors flex items-center gap-2 text-lg shadow-lg"
            >
              <ArrowRight size={20} />
              Get Started Today
            </Link>
            <a 
              href="tel:4056059364"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 text-lg"
            >
              <Phone size={20} />
              Call (405) 605-9364
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
              <span>Same-Day Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
              <span>NAPPS Member</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
