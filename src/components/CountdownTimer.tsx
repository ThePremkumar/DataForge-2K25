import React, { useEffect, useState } from 'react';
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const targetDate = new Date('2025-11-01T04:00:00Z').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-950/40 via-slate-950 to-cyan-950/40 border-y border-purple-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          Event Starts In
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-2">
              {timeLeft.days}
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Days
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400 mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Hours
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-400 mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Minutes
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-cyan-400 mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </section>;
}