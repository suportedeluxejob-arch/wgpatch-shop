import React from 'react';
import { Hero } from './components/Hero';
import { VslSection } from './components/VslSection';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { TeamShowcase } from './components/TeamShowcase';
import { ClientFeedback } from './components/ClientFeedback';
import { Footer } from './components/Footer';
import { WhatsAppSupport } from './components/WhatsAppSupport';
import { LOGO_URL } from './constants';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="absolute top-0 w-full z-50 p-4 md:p-6">
        <div className="container mx-auto flex flex-col items-center">
          {/* Logo Centralizada */}
          <div className="flex flex-col items-center mb-3">
            <img
              src={LOGO_URL}
              alt="WG PATCH Logo"
              className="h-14 w-13 object-cover rounded-full shadow-lg border-2 border-white mb-2"
            />
            <div className="text-xl font-black text-slate-900 tracking-tighter">
              WG<span className="text-cyan-500"> PATCH</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <VslSection />
        <Hero />
        <Features />
        <TeamShowcase />
        <ClientFeedback />
        <HowItWorks />
      </main>

      <Footer />

      {/* Botão Flutuante de Suporte WhatsApp */}
      <WhatsAppSupport />
    </div>
  );
}

export default App;