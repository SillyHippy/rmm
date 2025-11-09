import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas - Process Serving Coverage in Oklahoma | RMM Service of Process",
  description: "RMM Service of Process serves Cleveland, Canadian, McClain, and Grady counties in Oklahoma. Professional process serving in Norman, Blanchard, Yukon, Chickasha, and more.",
};

const serviceAreas = [
  {
    county: "Cleveland County",
    slug: "cleveland-county",
    cities: ["Norman", "Moore", "Noble", "Lexington", "Slaughterville", "Little Axe"],
    population: "~295,000",
    description: "Comprehensive process serving throughout Cleveland County, including the University of Oklahoma area and all surrounding communities.",
    highlights: [
      "Home to the University of Oklahoma",
      "Norman District Court coverage",
      "Fast service to all municipalities",
      "Same-day service available"
    ]
  },
  {
    county: "Canadian County",
    slug: "canadian-county",
    cities: ["Yukon", "El Reno", "Mustang", "Piedmont", "Calumet", "Union City"],
    population: "~155,000",
    description: "Expert process serving services across Canadian County's diverse urban and rural communities.",
    highlights: [
      "Coverage from OKC suburbs to rural areas",
      "Canadian County District Court",
      "Experienced in all jurisdictions",
      "Rush service available"
    ]
  },
  {
    county: "McClain County",
    slug: "mcclain-county",
    cities: ["Purcell", "Blanchard", "Newcastle", "Washington", "Wayne", "Goldsby"],
    population: "~42,000",
    description: "Local expertise serving McClain County with fast, reliable service. Based in Blanchard for rapid response.",
    highlights: [
      "Local presence in Blanchard",
      "McClain County District Court",
      "Fastest response times",
      "Personal service"
    ]
  },
  {
    county: "Grady County",
    slug: "grady-county",
    cities: ["Chickasha", "Tuttle", "Minco", "Rush Springs", "Ninnekah", "Alex"],
    population: "~55,000",
    description: "Professional process serving throughout Grady County and surrounding areas with attention to detail.",
    highlights: [
      "Grady County District Court coverage",
      "Rural and urban service",
      "Experienced in all areas",
      "Reliable documentation"
    ]
  }
];

export default function ServiceAreasPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Areas in Oklahoma
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              We can serve all of Oklahoma and more! Primary coverage in Cleveland, Canadian, McClain, and Grady counties.
            </p>
            <p className="text-base text-blue-200 mb-8">
              Additional coverage available throughout Oklahoma and beyond - contact us for service outside our primary areas
            </p>
            <a 
              href="tel:4056059364"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              <Phone size={20} />
              Call (405) 605-9364
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white p-8 lg:p-12">
                    <MapPin size={48} className="mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{area.county}</h2>
                    <p className="text-blue-100 mb-4">{area.description}</p>
                    <div className="text-sm text-blue-200">
                      Population: {area.population}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cities & Communities Served:</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {area.cities.map((city, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-green-600" />
                          <span>{city}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Service Highlights:</h3>
                    <ul className="space-y-2 mb-6">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-brand-lime text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-lime-light transition-colors"
                    >
                      Get Service in {area.county}
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Office Location
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Based in Blanchard, serving Cleveland, Canadian, McClain, and Grady counties - and all of Oklahoma!
            </p>
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
            <p className="text-gray-600 mt-6 text-center">
              While we specialize in Cleveland, Canadian, McClain, and Grady counties, we can serve all of Oklahoma and beyond through our professional network.
            </p>
            <div className="text-center mt-8">
              <Link 
                href="/contact"
                className="inline-block bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
              >
                Request Service in Your Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl p-12 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Service in Your Area?
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              We can serve all of Oklahoma and beyond!
            </p>
            <p className="text-base text-gray-400 mb-8">
              Contact us today to discuss your process serving needs anywhere in the state or surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
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
