import { FileText, Clock, Mail, Search, DollarSign, FileCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Standard Routine Service",
    description: "Our standard process serving with multiple attempts to ensure successful delivery. Complete due diligence with comprehensive documentation.",
    features: [
      "4 attempts on different days and times",
      "Due diligence with 10 day turnaround",
      "Pictures and service attempts using pictures with GPS stamps",
      "Affidavit of Service provided within 72 hours of generation"
    ]
  },
  {
    icon: Clock,
    title: "Rush & Same Day Service",
    description: "Expedited service when time is critical. We prioritize your urgent legal document delivery needs with immediate attention.",
    features: [
      "Attempts start same day upon request (premium)",
      "Attempts start within 48 hours for standard rush service",
      "Priority handling and tracking",
      "Immediate notifications"
    ]
  },
  {
    icon: Search,
    title: "Skip Tracing",
    description: "Advanced locate services to find individuals who are difficult to reach. We use cutting-edge technology and professional resources.",
    features: [
      "High tech information database systems",
      "Access to licensed Private Investigators in Oklahoma",
      "Current information for service",
      "Comprehensive research and documentation"
    ]
  },
  {
    icon: FileCheck,
    title: "Notary Services",
    description: "Professional notary services for your legal documents. We offer both traditional in-person and modern electronic notary options.",
    features: [
      "Standard notary in person",
      "E-Notary services available",
      "Mobile notary service",
      "Document witnessing and certification"
    ]
  },
  {
    icon: Mail,
    title: "Legal Notices & Demands",
    description: "Delivery of demand letters, legal notices, and property notices with proper documentation and proof of service.",
    features: [
      "Demand letters delivery",
      "Legal notices service",
      "Property notices posting",
      "Certified delivery options"
    ]
  },
  {
    icon: DollarSign,
    title: "Wage Garnishment Delivery",
    description: "Specialized service for wage garnishment documentation delivery with compliance to all Oklahoma legal requirements.",
    features: [
      "Employer notification",
      "Proper legal documentation",
      "Compliance assured",
      "Tracking and confirmation"
    ]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is Included in Our Process Serving Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our process server services at RMM provide reliable and efficient delivery for all your legal documents. We offer both standard routine and rush service, as well as same day service for those urgent situations. In addition, we also offer demand letters, legal notices, property notices, skip tracing, notary, and wage garnishment delivery. Trust us to handle your important paperwork and legal documents.
          </p>
          <p className="text-lg text-blue-600 font-semibold mt-4">
            Please inquire for a quote as many cases are unique to pricing based on location and circumstances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-brand-lime rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-brand-lime rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-block bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
          >
            View All Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
