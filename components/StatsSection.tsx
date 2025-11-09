"use client";

import { Shield, Clock, FileCheck, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Serving Oklahoma since 2015"
  },
  {
    icon: FileCheck,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Reliable service delivery"
  },
  {
    icon: Shield,
    value: 2,
    suffix: "",
    label: "Professional Memberships",
    description: "NAPPS & OKPPSA Certified"
  },
  {
    icon: MapPin,
    value: 4,
    suffix: "+",
    label: "Counties Served",
    description: "Across Oklahoma"
  }
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 50; // 50 steps
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, 30);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Clients Across Oklahoma
          </h2>
          <p className="text-xl text-gray-300">
            Professional process serving with a proven track record
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="bg-brand-lime/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-lime/30">
                  <Icon size={32} className="text-brand-lime" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-xl font-semibold text-brand-lime mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
