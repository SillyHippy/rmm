import { Shield, Clock, Award, CheckCircle, Users, FileCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "NAPPS Member Since 2024",
    description: "Member of the National Association of Professional Process Servers, ensuring the highest standards of professionalism."
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    description: "Same-day service available with real-time updates and GPS-tracked deliveries for complete peace of mind."
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed and insured process server with comprehensive liability coverage for your protection."
  },
  {
    icon: CheckCircle,
    title: "100% Compliant",
    description: "Expert knowledge of Oklahoma process serving laws and regulations ensures proper, legal service every time."
  },
  {
    icon: Users,
    title: "Experienced Professional",
    description: "Years of experience serving legal documents with discretion, professionalism, and attention to detail."
  },
  {
    icon: FileCheck,
    title: "Detailed Documentation",
    description: "Comprehensive affidavits of service with photos, GPS coordinates, and complete chain of custody documentation."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose RMM Service of Process?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional, reliable, and compliant process serving services backed by industry credentials and local expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-brand-lime/50 transition-all hover:shadow-xl hover:shadow-brand-lime/10"
              >
                <div className="w-14 h-14 bg-brand-lime rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
