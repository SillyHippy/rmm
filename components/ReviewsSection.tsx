"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elisa Balli",
    role: "Google Review",
    rating: 5,
    text: "People are hungry NO starving for good service. That is what I received in my dealings with Ryley at RMM Service of Process LLC. I was truly amazed!! His professionalism, caring, kindness, and specially his promptness and the no-none-sense kind of guy left me wishing I could use his services in every interaction with any business or government entity I have to deal with moving forward. In my situation, when it seemed everything was working against me, I feel I was saved by Ryley. I can only say, 'Thank God for helping me pick the first and the right process server in Oklahoma. Thank God.'",
    location: "3 months ago"
  },
  {
    name: "Anne-Marie",
    role: "Google Review",
    rating: 5,
    text: "Great experience! Ryley was fast, professional, and clearly knowledgeable about the legal side of serving papers. He made the whole process simple and stress-free and made me feel like he was there to get the job done! Highly recommend!",
    location: "1 month ago"
  },
  {
    name: "Courtney Schamel",
    role: "Google Review",
    rating: 5,
    text: "RMM process service is the best of the metro. We use Ryley for all our needs. He's efficient, detail oriented and has great communication and turn around times.",
    location: "2 years ago"
  },
  {
    name: "Kristin Perez",
    role: "Google Review",
    rating: 5,
    text: "Called for service in a divorce situation and Ryley got it done quick, fast and in a hurry. I recommend highly.",
    location: "8 months ago"
  },
  {
    name: "Michael Bouziden",
    role: "Google Review",
    rating: 5,
    text: "Ryley has assisted my company with several difficult tasks and always produces great results.",
    location: "10 months ago"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by attorneys, law firms, and individuals across Oklahoma
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700">5.0 Rating on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-6 right-6 text-brand-lime/20" size={48} />
                
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={18} 
                      className={star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic relative z-10 line-clamp-6">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-brand-lime">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Had a Great Experience?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We&apos;d love to hear about your experience! Your feedback helps us continue to provide exceptional service to clients across Oklahoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://share.google/cC3BwR5bEQqBNN7XS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-lime text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg"
              >
                Leave a Google Review
              </a>
              <a 
                href="https://www.facebook.com/rmmsop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors border-2 border-white"
              >
                Visit Our Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
