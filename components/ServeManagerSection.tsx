import { Monitor, CheckCircle } from "lucide-react";

export function ServeManagerSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2">
              {/* Left side - Info */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white">
                <Monitor size={48} className="text-brand-lime mb-4" />
                <h2 className="text-3xl font-bold mb-4">
                  Powered by ServeManager
                </h2>
                <p className="text-gray-300 mb-6">
                  ServeManager is our go-to program for logistics in processing work and eliminating data entry. 
                  This cutting-edge platform ensures efficient case management and seamless communication.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-lime flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Streamlined workflow management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-lime flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Real-time tracking and updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-lime flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Automated data management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-lime flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Enhanced accuracy and reliability</span>
                  </div>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="bg-gray-900 p-8 md:p-12 flex items-center justify-center">
                <div className="w-full">
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/6ERDTBEwfG8"
                      title="ServeManager Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    />
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=6ERDTBEwfG8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-brand-lime hover:text-brand-lime-light transition-colors font-semibold"
                  >
                    Watch Full Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
