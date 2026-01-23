import React from 'react';
import { Star, MessageCircle } from '../ui/Icons';
import { SectionTitle } from '../ui/Typography';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';


const TestimonialCard: React.FC<{ text: string; author?: string }> = ({ text, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex text-brand mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-gray-700 italic mb-4">"{text}"</p>
    {author && <p className="text-xs font-bold text-dark-800 uppercase tracking-wider">— {author}</p>}
  </div>
);

export const TestimonialsFirst: React.FC = () => {
  const testimonials = [
    { text: "Llevaba años usando gorra. Ahora ni me acuerdo de donde la dejé." },
    { text: "El trato de Mireia es increíble. Profesionalidad máxima y el resultado super natural." },
    { text: "Tenía miedo de que se notara falso, pero nadie se da cuenta. Solo me ven mejor." }
  ];

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} text={t.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSecond: React.FC = () => {
  const testimonials = [
    { text: "Me siento más joven, así de simple." },
    { text: "En el gimnasio ya no me obsesiono con el sudor." },
    { text: "Salí contentísimo. Me subió la confianza una barbaridad." }
  ];

  return (
    <section className="bg-brand/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif italic text-dark-900">Lo que dicen nuestros clientes</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <MessageCircle size={32} className="text-brand mb-4 opacity-50" />
              <p className="text-lg font-medium text-dark-900 leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Resultados que hablan por sí solos"
          subtitle="COMUNIDAD"
          dark={true}
          accentWord="hablan"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[gallery1, gallery2, gallery3, gallery4].map((src, index) => (
            <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group">
              <img
                src={src}
                alt="Resultado Micropigmentación"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
