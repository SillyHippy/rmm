import type { Metadata } from "next";
import { ProcessServerFAQ } from "@/components/ProcessServerFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Process Serving Questions Answered | RMM Service of Process",
  description: "Get answers to frequently asked questions about process serving in Oklahoma. Learn about costs, timelines, requirements, and more from RMM Service of Process.",
};

export default function FAQPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Everything you need to know about process serving in Oklahoma.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Component */}
      <ProcessServerFAQ />

      {/* Additional Resources */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to help! Contact us for personalized answers to your process serving questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg shadow-brand-lime/30"
              >
                Contact Us
              </Link>
              <a 
                href="tel:4056059364"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Call (405) 605-9364
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Helpful Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/services"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-bold text-gray-900 mb-2">Our Services</h4>
                <p className="text-sm text-gray-600">Learn about all our process serving and legal support services.</p>
              </Link>
              <Link 
                href="/service-areas"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-bold text-gray-900 mb-2">Service Areas</h4>
                <p className="text-sm text-gray-600">See which counties and cities we serve in Oklahoma.</p>
              </Link>
              <Link 
                href="/about"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-bold text-gray-900 mb-2">About Us</h4>
                <p className="text-sm text-gray-600">Learn more about RMM Service of Process and our credentials.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
