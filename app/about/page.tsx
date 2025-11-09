import type { Metadata } from "next";
import { Shield, Award, Users, Target, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RMM Service of Process - Professional Process Server Oklahoma",
  description: "Learn about RMM Service of Process and founder Ryley McGee. NAPPS member serving Oklahoma since 2024 with professional, reliable process serving services.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About RMM Service of Process
            </h1>
            <p className="text-xl text-blue-100">
              Professional, reliable, and compliant process serving services in Oklahoma.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Full Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At RMMSOP, I am dedicated to providing the highest level of service to all of my clients. With years of experience in the process serving business since 2015, you can trust that I will work tirelessly until your legal needs are met.
                </p>
                <p>
                  From serving subpoenas and summons, to providing document retrieval and skip tracing services, I have the resources and expertise to get the job done efficiently and on time. Contact me today to schedule a service and experience the difference that RMMSOP can make.
                </p>
                <p>
                  As a member of both the National Association of Professional Process Servers (NAPPS) and the Oklahoma Process Servers and Private Investigators Association (OKPPSA), we maintain strict adherence to industry best practices and Oklahoma legal requirements.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <Award className="text-blue-600" size={20} />
                  <span className="font-semibold">NAPPS Member</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <Shield className="text-blue-600" size={20} />
                  <span className="font-semibold">OKPPSA Member</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  RMM Service of Process, LLC, is a wide network of Oklahoma Process Servers ready and able to meet your legal delivery needs. Our mission is to provide quality and affordable process service to all.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  At RMMSOP, our vision is to constantly grow and network to become the industry leader in the field of Process Serving. We aim to set an example for other companies by providing top-notch services, adherence to ethical standards, and complete customer satisfaction. We strive to create a work environment that fosters innovation, creativity, and teamwork to ensure that we are always staying ahead of the curve.
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="text-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-xl p-8 text-white">
              <Shield className="mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-2">Serving Oklahoma Since 2015</h3>
              <p className="text-gray-300">Over 10 years of professional process serving experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Professional Affiliations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-blue-200">
                <Award className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  NAPPS Member Since 2024
                </h3>
                <p className="text-gray-700 mb-4">
                  National Association of Professional Process Servers - the premier organization for process servers nationwide.
                </p>
                <a 
                  href="https://napps.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-2 border-blue-200">
                <Shield className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  OKPPSA Member
                </h3>
                <p className="text-gray-700 mb-4">
                  Oklahoma Process Servers and Private Investigators Association - representing the highest standards in Oklahoma.
                </p>
                <a 
                  href="https://www.okppsa.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl p-12 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work With a Professional
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference of working with a NAPPS-certified process server.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started Today
              </Link>
              <a 
                href="tel:4056059364"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call (405) 605-9364
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
