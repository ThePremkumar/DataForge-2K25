import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { EventHighlights } from './components/EventHighlights';
import { WhyAttend } from './components/WhyAttend';
import { TechnicalEvents } from './components/TechnicalEvents';
import { NonTechnicalEvents } from './components/NonTechnicalEvents';
import { Coordinators } from './components/Coordinators';
import { VenueContact } from './components/VenueContact';
import { RegisterButton } from './components/RegisterButton';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 text-white">
      <ScrollProgress />
      <Navbar onRegisterClick={() => setIsModalOpen(true)} />
      <RegisterButton onClick={() => setIsModalOpen(true)} />
      <Hero />
      <CountdownTimer />
      <EventHighlights />
      <WhyAttend />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <Coordinators />
      <VenueContact />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
}