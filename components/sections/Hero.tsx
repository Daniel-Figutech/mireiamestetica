import React from 'react';
import { Button } from '../ui/Button';
import { Check, X, AlertCircle } from '../ui/Icons';
import shavedEffect from '../../assets/shaved-effect.jpg';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-dark-900 text-white overflow-hidden">
      {/* Announcement Bar */}
      <div className="bg-brand text-white py-2 px-4 text-center text-sm font-medium tracking-wide flex items-center justify-center gap-2">
        <AlertCircle size={16} />
        <span>Agenda mensual limitada: reserva ahora tu diagnóstico gratuito.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center gap-12">

        {/* Content */}
        <div className="flex-1 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Recupera tu <span className="italic text-brand">marco capilar</span> <br />
            sin aspecto artificial.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
            La micropigmentación capilar profesional que devuelve densidad, estructura facial y confianza… sin pasar por bisturí.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
            <div className="flex items-center gap-2">
              <span className="text-red-500"><X size={18} /></span> No dolor extremo
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500"><X size={18} /></span> No aspecto artificial
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500"><X size={18} /></span> No resultados que borran
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500"><X size={18} /></span> No centros sin experiencia
            </div>
          </div>

          <Button onClick={scrollToContact} className="text-lg shadow-brand/20 shadow-xl">
            Empieza tu cambio hoy
          </Button>
        </div>

        {/* Hero Image / Visual */}
        <div className="flex-1 relative w-full max-w-md md:max-w-full">
          <div className="relative aspect-[4/5] md:aspect-square w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={shavedEffect}
              alt="Resultado natural de micropigmentación"
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
              <p className="text-brand font-serif italic text-2xl">Natural</p>
              <p className="text-xs text-white uppercase tracking-wider">Resultado garantizado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};