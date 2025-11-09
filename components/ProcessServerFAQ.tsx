"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a process server?",
    answer: "A process server is a licensed professional who delivers legal documents to individuals involved in court cases. This ensures that all parties are properly notified of legal proceedings, which is required by law for cases to proceed fairly."
  },
  {
    question: "How much does process serving cost in Oklahoma?",
    answer: "Process serving fees vary based on the urgency, location, and complexity of service. Standard routine service typically ranges from $75-$180. Rush and same-day services are available at premium rates. Contact us for a detailed quote based on your specific needs."
  },
  {
    question: "How long does it take to serve papers in Oklahoma?",
    answer: "Standard service is typically completed within 3-7 business days. However, we offer rush service (24-48 hours) and same-day service options for urgent matters. Timeframes depend on the defendant's availability and location."
  },
  {
    question: "What areas do you serve?",
    answer: "We provide process serving services throughout Cleveland County, Canadian County, McClain County, and Grady County. Our service area includes Norman, Moore, Yukon, El Reno, Blanchard, Purcell, Chickasha, and all surrounding communities."
  },
  {
    question: "What information do you need to serve someone?",
    answer: "We need the recipient's full name, physical address, and a description if possible. Additional information like work address, vehicle description, phone number, and known schedule can help ensure successful service."
  },
  {
    question: "What documents can you serve?",
    answer: "We serve all types of legal documents including summons and complaints, subpoenas, divorce papers, child custody documents, eviction notices, restraining orders, small claims court documents, and more."
  },
  {
    question: "What happens if the person avoids service?",
    answer: "If someone is avoiding service, we employ various techniques including multiple attempt times, surveillance, and skip tracing services to locate and serve the individual. We document all attempts for the court."
  },
  {
    question: "Do you provide proof of service?",
    answer: "Yes, we provide detailed affidavits of service that include date, time, location, description of the person served, and GPS coordinates. We can also provide photos and video documentation when requested."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed process servers and members of NAPPS (National Association of Professional Process Servers) and OKPPSA (Oklahoma Process Servers and Private Investigators Association). We carry comprehensive liability insurance."
  },
  {
    question: "Can you serve papers outside of your main service area?",
    answer: "Yes, we have a network of professional process servers throughout Oklahoma and can arrange service in other counties. We also handle nationwide service through our network of trusted partners."
  }
];

export function ProcessServerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about process serving in Oklahoma.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your question answered?
          </p>
          <a 
            href="/contact"
            className="inline-block bg-brand-lime text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
