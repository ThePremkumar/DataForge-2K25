import React from 'react';
import { LinkedinIcon, GithubIcon, GlobeIcon, HeartIcon, CodeIcon } from 'lucide-react';
export function Footer() {
  const socialLinks = [{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thepremkumar',
    icon: LinkedinIcon,
    color: 'hover:text-blue-400'
  }, {
    name: 'GitHub',
    url: 'https://github.com/ThePremkumar',
    icon: GithubIcon,
    color: 'hover:text-purple-400'
  }, {
    name: 'Portfolio',
    url: 'https://thepremkumar.netlify.app/',
    icon: GlobeIcon,
    color: 'hover:text-cyan-400'
  }];
  return <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-purple-500/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Designer Credit */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CodeIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400 text-sm">
                Designed & Developed with
              </span>
              <HeartIcon className="w-5 h-5 text-pink-500 animate-pulse" fill="currentColor" />
              <span className="text-gray-400 text-sm">by</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Prem Kumar
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              MERN Stack Developer
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map(link => {
              const Icon = link.icon;
              return <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/50 border border-purple-500/30 transition-all duration-300 hover:scale-110 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 ${link.color}`} aria-label={link.name}>
                    <Icon className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform" />
                  </a>;
            })}
            </div>
          </div>
          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DataForge 2K25
            </p>
            <p className="text-gray-600 text-xs mt-2">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>;
}