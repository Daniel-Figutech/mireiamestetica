import React from 'react';
import { SectionTitle } from '../ui/Typography';
import { Button } from '../ui/Button';
import result1 from '../../assets/result-1.png';
import result2 from '../../assets/result-2.png';
import result3 from '../../assets/result-3.png';
import result4 from '../../assets/result-4.png';
import result5 from '../../assets/result-5.png';

interface StackItemProps {
  title: string;
  description: string;
  mockupText: string;
  image: string;
}

const StackItem: React.FC<StackItemProps> = ({ title, description, mockupText, image }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand/30 transition-colors">
    <div className="w-full md:w-32 h-32 flex-shrink-0 bg-dark-700 rounded-lg overflow-hidden relative group">
      <img src={image} alt={mockupText} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-widest text-white/50 bg-black/50 px-2 py-1 rounded">{mockupText}</span>
      </div>
    </div>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-light text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Stacking: React.FC = () => {
  const items: StackItemProps[] = [
    {
      title: "Diagnóstico personalizado",
      description: "Evalúa tu caso, sin coste ni compromiso.",
      mockupText: "Lupa / Rostro",
      image: result1
    },
    {
      title: "Diseño capilar a medida",
      description: "Línea frontal, densidad y tono adaptados a ti.",
      mockupText: "Plantilla",
      image: result2
    },
    {
      title: "Aplicación profesional (2–3 sesiones)",
      description: "Técnica precisa, sin dolor extremo, con resultado visible desde el inicio.",
      mockupText: "Proceso",
      image: result3
    },
    {
      title: "Corrección de trabajos previos",
      description: "Arreglo y mejora de micropigmentaciones mal hechas.",
      mockupText: "Antes/Después",
      image: result4
    },
    {
      title: "Plan de mantenimiento personalizado",
      description: "Para que el resultado se mantenga impecable en el tiempo.",
      mockupText: "Ficha Cliente",
      image: result5
    }
  ];

  return (
    <section className="py-20 bg-dark-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Esto es lo que obtienes al reservar tu tratamiento"
          subtitle="TU PAQUETE"
          accentWord="obtienes"
          dark={true}
        />

        <div className="space-y-4 mb-12">
          {items.map((item, idx) => (
            <StackItem key={idx} {...item} />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto text-lg py-5 px-10">
            Empieza tu cambio hoy
          </Button>
          <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">Sin compromiso de compra</p>
        </div>
      </div>
    </section>
  );
};