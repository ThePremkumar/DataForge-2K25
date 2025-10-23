import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assests/logo.png';
interface NavbarProps {
  onRegisterClick: () => void;
}
export function Navbar({
  onRegisterClick
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
              <img src={logo}  className="object-contain w-12 h-12 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-110"/>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('technical')} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Technical Events
            </button>
            <button onClick={() => scrollToSection('non-technical')} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Non-Technical Events
            </button>
            <button onClick={() => scrollToSection('coordinators')} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Coordinators
            </button>
            <button onClick={() => scrollToSection('venue')} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Venue & Contact
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-slate-950/98 border-t border-purple-500/20 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('technical')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium">
              Technical Events
            </button>
            <button onClick={() => scrollToSection('non-technical')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium">
              Non-Technical Events
            </button>
            <button onClick={() => scrollToSection('coordinators')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium">
              Coordinators
            </button>
            <button onClick={() => scrollToSection('venue')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium">
              Venue & Contact
            </button>

          </div>
        </div>}
    </nav>;
}