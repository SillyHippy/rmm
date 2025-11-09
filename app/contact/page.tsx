import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { ReviewsSection } from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Contact Us - RMM Service of Process",
  description: "Contact RMM Service of Process for professional process serving services in Oklahoma. Call (405) 605-9364 or email rmmsop@gmail.com. Serving Cleveland, Canadian, McClain, and Grady counties.",
  openGraph: {
    title: "Contact Us - RMM Service of Process",
    description: "Get in touch with Oklahoma's trusted process serving professionals.",
  }
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact RMM Service of Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Reach out to us for fast, professional process serving services in Oklahoma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:4056059364" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                      (405) 605-9364
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Monday - Saturday, 7:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:rmmsop@gmail.com" className="text-blue-600 hover:text-blue-700">
                      rmmsop@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      308 Summer Oaks Drive<br />
                      Blanchard, OK 73010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 7:00 AM - 10:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-blue-600 mt-1 font-medium">Emergency service available upon request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <p className="mb-4">We can serve all of Oklahoma and more! Primary service areas include:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Cleveland County</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Canadian County</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>McClain County</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Grady County</span>
                </li>
              </ul>
              <p className="text-sm text-blue-100 mt-4">
                Additional coverage available throughout Oklahoma and beyond
              </p>
              <Link href="/service-areas" className="inline-block mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View All Service Areas
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(405) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="process-serving">Process Serving</option>
                  <option value="court-filing">Court Filing</option>
                  <option value="certified-service">Certified Registered Service</option>
                  <option value="skip-tracing">Skip Tracing</option>
                  <option value="private-investigation">Private Investigation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-2">
                  County
                </label>
                <select
                  id="county"
                  name="county"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select county...</option>
                  <option value="cleveland">Cleveland County</option>
                  <option value="canadian">Canadian County</option>
                  <option value="mcclain">McClain County</option>
                  <option value="grady">Grady County</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your process serving needs..."
                ></textarea>
              </div>

              <div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-sm text-gray-600">
                    I agree to be contacted by RMM Service of Process regarding my request. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
              >
                Submit Request
              </button>

              <p className="text-sm text-gray-600 text-center">
                * Required fields
              </p>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visit Our Office</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.9060511770517!2d-97.67560232381487!3d35.1340179598391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b27b9c43c09d4d%3A0x74324c96f95fec6d!2sRMM%20Service%20of%20Process%20LLC!5e0!3m2!1sen!2sus!4v1762644121405!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              className="w-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Service?</h3>
          <p className="text-gray-700 mb-4">
            For urgent process serving needs, call us directly for the fastest response.
          </p>
          <a 
            href="tel:4056059364"
            className="inline-block bg-brand-lime text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
          >
            Call (405) 605-9364 Now
          </a>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
