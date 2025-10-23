import React, { useEffect, useState, useRef } from 'react';
import { AwardIcon, NetworkIcon, BrainIcon, RocketIcon, StarIcon, ZapIcon } from 'lucide-react';
export function WhyAttend() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reasons = [{
    icon: AwardIcon,
    title: 'Win Exciting Prizes',
    description: 'Compete for cash prizes, certificates, and recognition',
    color: 'from-purple-500 to-pink-500'
  }, {
    icon: NetworkIcon,
    title: 'Network & Connect',
    description: 'Meet like-minded students and industry professionals',
    color: 'from-pink-500 to-cyan-500'
  }, {
    icon: BrainIcon,
    title: 'Learn & Grow',
    description: 'Gain hands-on experience and enhance your skills',
    color: 'from-cyan-500 to-purple-500'
  }, {
    icon: RocketIcon,
    title: 'Showcase Your Talent',
    description: 'Present your innovative ideas on a national platform',
    color: 'from-purple-400 to-cyan-400'
  }, {
    icon: StarIcon,
    title: 'Get Certified',
    description: 'Receive participation and winner certificates',
    color: 'from-pink-400 to-purple-400'
  }, {
    icon: ZapIcon,
    title: 'Experience Innovation',
    description: 'Be part of cutting-edge technical competitions',
    color: 'from-cyan-400 to-pink-400'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    }, {
      threshold: 0.2
    });
    const cards = sectionRef.current?.querySelectorAll('.why-attend-card');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 via-slate-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Why Attend DataForge 2K25?
          </h2>
          <p className="text-xl text-gray-300">
            Discover the opportunities waiting for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const isVisible = visibleCards.includes(index);
          return <div key={index} data-index={index} className={`why-attend-card group bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${index * 0.1}s`
          }}>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-cyan-500/20 rounded-xl blur-xl transition-all duration-500 -z-10"></div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}