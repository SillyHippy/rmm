import type { Metadata } from "next";
import { FileText, Building2, Mail, Search, MapPin, Scale, Clock, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ServeManagerSection } from "@/components/ServeManagerSection";

export const metadata: Metadata = {
  title: "Process Serving Services - RMM Service of Process Oklahoma",
  description: "Professional process serving, court filing, skip tracing, and private investigation services in Oklahoma. Licensed, insured, and NAPPS certified. Same-day service available.",
  keywords: ["process serving Oklahoma", "court filing services", "skip tracing", "private investigation", "certified mail service", "legal document delivery"]
};

const services = [
  {
    icon: FileText,
    title: "Process Serving",
    description: "Professional delivery of legal documents including summons, complaints, subpoenas, and court orders throughout Oklahoma.",
    features: [
      "Same-day service available",
      "Electronic filing confirmation", 
      "GPS-tracked deliveries",
      "Photo documentation",
      "Detailed affidavits of service",
      "Multiple attempt strategies"
    ],
    pricing: "Starting at $75",
    documents: [
      "Summons and Complaints",
      "Subpoenas",
      "Divorce Papers",
      "Child Custody Documents",
      "Eviction Notices",
      "Restraining Orders",
      "Small Claims Documents"
    ]
  },
  {
    icon: Building2,
    title: "Court Filing",
    description: "Expert court filing services for all Oklahoma courts with document preparation and confirmation.",
    features: [
      "State & federal courts",
      "Document preparation assistance",
      "Electronic filing when available",
      "Filing confirmation",
      "Deadline tracking",
      "Status updates"
    ],
    pricing: "Contact for quote"
  },
  {
    icon: Mail,
    title: "Certified Registered Service",
    description: "Secure certified mail service with tracking and delivery confirmation for legal service by mail.",
    features: [
      "USPS certified mail",
      "Return receipt tracking",
      "Proof of delivery",
      "Address verification",
      "Compliance with Oklahoma law",
      "Complete documentation"
    ],
    pricing: "Starting at $50"
  },
  {
    icon: Search,
    title: "Skip Tracing",
    description: "Advanced skip tracing services to locate hard-to-find individuals using multiple databases and investigative techniques.",
    features: [
      "Multi-database searches",
      "Asset searches",
      "Address verification",
      "Employment verification",
      "Social media investigation",
      "Detailed reports"
    ],
    pricing: "Starting at $100"
  },
  {
    icon: MapPin,
    title: "Private Investigations",
    description: "Licensed private investigation services for legal matters with discreet, professional investigative work.",
    features: [
      "Surveillance operations",
      "Background checks",
      "Witness interviews",
      "Evidence gathering",
      "Activity reports",
      "Court-ready documentation"
    ],
    pricing: "Contact for quote"
  },
  {
    icon: Scale,
    title: "Legal Support Services",
    description: "Comprehensive legal support including document retrieval, research, and administrative assistance.",
    features: [
      "Document retrieval",
      "Court research",
      "Record searches",
      "Administrative support",
      "Notary services",
      "Rush service available"
    ],
    pricing: "Hourly rates available"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Process Serving & Legal Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive process serving and legal support services in Oklahoma. Licensed, insured, and NAPPS certified.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
                <Clock size={20} />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
                <CheckCircle size={20} />
                <span>100% Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
                <DollarSign size={20} />
                <span>Competitive Rates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="text-blue-600" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-6">
                        <DollarSign size={20} />
                        <span>{service.pricing}</span>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-block bg-brand-lime text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-lime-light transition-colors"
                      >
                        Request Service
                      </Link>
                    </div>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.documents && (
                        <>
                          <h3 className="text-xl font-bold text-gray-900 mt-6">Documents We Serve:</h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {service.documents.map((doc, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ServeManager Section */}
      <ServeManagerSection />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on any of our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg shadow-brand-lime/30"
              >
                Request a Quote
              </Link>
              <a 
                href="tel:4056059364"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white"
              >
                Call (405) 605-9364
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
