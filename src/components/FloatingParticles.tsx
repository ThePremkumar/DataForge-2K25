import React from 'react';
export function FloatingParticles() {
  const particles = Array.from({
    length: 20
  }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    animationDuration: Math.random() * 20 + 10,
    animationDelay: Math.random() * 5
  }));
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => <div key={particle.id} className="absolute rounded-full bg-gradient-to-br from-purple-400/30 to-cyan-400/30 blur-sm animate-float" style={{
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      left: `${particle.left}%`,
      bottom: '-10%',
      animationDuration: `${particle.animationDuration}s`,
      animationDelay: `${particle.animationDelay}s`
    }} />)}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh)
              translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>;
}