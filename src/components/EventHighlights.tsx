import React, { useEffect, useState, useRef } from 'react';
import { TrophyIcon, UsersIcon, CalendarIcon, SparklesIcon } from 'lucide-react';
export function EventHighlights() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    events: 0,
    participants: 0,
    prizes: 0,
    hours: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const highlights = [{
    icon: CalendarIcon,
    label: 'Events',
    value: 7,
    suffix: '+',
    color: 'from-purple-400 to-pink-400'
  }, {
    icon: UsersIcon,
    label: 'Expected Participants',
    value: 500,
    suffix: '+',
    color: 'from-pink-400 to-cyan-400'
  }, {
    icon: TrophyIcon,
    label: 'Prize Pool',
    value: 50000,
    prefix: '₹',
    suffix: '+',
    color: 'from-cyan-400 to-purple-400'
  }, {
    icon: SparklesIcon,
    label: 'Hours of Innovation',
    value: 8,
    suffix: '+',
    color: 'from-purple-400 to-cyan-400'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    highlights.forEach((highlight, index) => {
      let currentStep = 0;
      const increment = highlight.value / steps;
      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          ...prev,
          [highlight.label.toLowerCase().replace(/\s+/g, '')]: Math.min(Math.floor(increment * currentStep), highlight.value)
        }));
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);
  return <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-purple-950/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Event at a Glance
          </h2>
          <p className="text-xl text-gray-300">
            Numbers that define DataForge 2K25
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          const key = highlight.label.toLowerCase().replace(/\s+/g, '');
          const currentValue = counts[key as keyof typeof counts] || 0;
          return <div key={index} className="group relative bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300 mb-2">
                    {highlight.prefix}
                    {currentValue.toLocaleString()}
                    {highlight.suffix}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {highlight.label}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}