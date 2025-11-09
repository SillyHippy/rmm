import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const serviceAreas = [
  {
    county: "Cleveland County",
    cities: ["Norman", "Moore", "Noble", "Lexington", "Slaughterville"],
    description: "Comprehensive process serving throughout Cleveland County, including the University of Oklahoma area.",
    slug: "cleveland-county"
  },
  {
    county: "Canadian County",
    cities: ["Yukon", "El Reno", "Mustang", "Piedmont", "Calumet"],
    description: "Expert process serving services across Canadian County's diverse communities.",
    slug: "canadian-county"
  },
  {
    county: "McClain County",
    cities: ["Purcell", "Blanchard", "Newcastle", "Washington", "Wayne"],
    description: "Local expertise serving McClain County with fast, reliable service.",
    slug: "mcclain-county"
  },
  {
    county: "Grady County",
    cities: ["Chickasha", "Tuttle", "Minco", "Rush Springs", "Ninnekah"],
    description: "Professional process serving throughout Grady County and surrounding areas.",
    slug: "grady-county"
  }
];

export function ServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving Cleveland, Canadian, McClain, and Grady counties with professional process serving services.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {area.county}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Major Cities Served:</p>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city, idx) => (
                    <span 
                      key={idx}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-blue-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-lime font-semibold hover:text-brand-lime-light"
              >
                Get Service
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
