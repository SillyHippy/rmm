import type { Metadata } from "next";
import { ProcessServerFAQ } from "@/components/ProcessServerFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Process Serving Questions Answered | RMM Service of Process",
  description: "Get answers to frequently asked questions about process serving in Oklahoma. Learn about costs, timelines, requirements, and more from RMM Service of Process.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a process server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A process server is a professional who delivers legal documents to individuals or entities involved in court proceedings. We ensure proper service of legal documents according to Oklahoma law and court requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How much does process serving cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard process serving starts at $75 per service. Pricing varies based on distance, urgency, and complexity. Contact us for a detailed quote for your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Cleveland County, Canadian County, McClain County, and Grady County in Oklahoma. This includes cities like Norman, Moore, Oklahoma City, Yukon, Blanchard, Newcastle, Purcell, Tuttle, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "How long does service typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most routine services are completed within 3-5 business days. Rush services are available for urgent needs and can often be completed within 24-48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What documents can you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all types of legal documents including summons and complaints, subpoenas, divorce papers, eviction notices, restraining orders, small claims documents, garnishments, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide proof of service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide an affidavit of service with detailed information about when, where, and how the documents were served. This legal proof is suitable for filing with the court."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are members of both the National Association of Professional Process Servers (NAPPS) and the Oklahoma Process Servers and Private Investigators Association (OKPPSA). We have been serving Oklahoma since 2015."
      }
    },
    {
      "@type": "Question",
      "name": "What if the person can't be found?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer skip tracing services to locate hard-to-find individuals. Our investigative techniques help track down current addresses and contact information to successfully complete service."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
              We&apos;re here to help! Contact us for personalized answers to your process serving questions.
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
    </>
  );
}
