import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Hero } from './components/sections/Hero';
import { TestimonialsFirst, TestimonialsSecond, Gallery } from './components/sections/SocialProof';
import { Explanation } from './components/sections/Explanation';
import { Roadmap } from './components/sections/Roadmap';
import { Stacking } from './components/sections/Stacking';
import { Comparison } from './components/sections/Comparison';
import { Founder } from './components/sections/Founder';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { Map } from './components/sections/Map';
import { Button } from './components/ui/Button';
import { FormPage } from './components/pages/FormPage';
import { GraciasPage } from './components/pages/GraciasPage';

const HomePage: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToForm = () => {
    navigate('/form');
  };

  return (
    <main className="min-h-screen font-sans bg-white relative">
      <Hero />
      <TestimonialsFirst />
      <Explanation />
      <Gallery />
      <Roadmap />
      <Stacking />
      <TestimonialsSecond />
      <Comparison />
      <Founder />
      <FAQ />
      <Map />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 md:hidden ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <Button onClick={goToForm} fullWidth className="shadow-brand/50">
          Empieza tu cambio hoy
        </Button>
      </div>

      {/* Sticky Desktop Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 hidden md:block ${showSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Button onClick={goToForm} className="shadow-2xl text-sm py-3 px-6">
          Reservar Diagnóstico
        </Button>
      </div>

    </main>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/gracias" element={<GraciasPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;