import React from 'react';
import { CalendarIcon, MapPinIcon, BuildingIcon } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden">
      <FloatingParticles />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      <div className="relative max-w-6xl mx-auto text-center ">
        <div className="mb-8 sm:mx-3.5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            DataForge 2K25
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-semibold mb-2">
            National Level Symposium
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Department of Computer Science and Business Systems
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <CalendarIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Date</h3>
            <p className="text-gray-300">01 November 2025</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <MapPinIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Venue</h3>
            <p className="text-gray-300">West Block Auditorium</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 sm:col-span-2 lg:col-span-1">
            <BuildingIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">College</h3>
            <p className="text-gray-300">PMC Tech, Hosur</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us for an exciting day of innovation, competition, and
            learning. Participate in technical and non-technical events designed
            to challenge and inspire students from across the nation.
          </p>
        </div>
      </div>
    </section>;
}