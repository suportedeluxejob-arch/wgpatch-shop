import React from 'react';
import { Hero } from './components/Hero';
import { VslSection } from './components/VslSection';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { TeamShowcase } from './components/TeamShowcase';
import { CheckoutCarousel } from './components/CheckoutCarousel';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="absolute top-0 w-full z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-black text-slate-900 tracking-tighter">
            WG<span className="text-blue-600"> PATCH</span>
          </div>
          {/* Mobile hidden for simplicity, or simple link */}
        </div>
      </nav>
      
      <main className="flex-grow">
        <Hero />
        <VslSection />
        <Features />
        <TeamShowcase />
        <CheckoutCarousel />
        <HowItWorks />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;