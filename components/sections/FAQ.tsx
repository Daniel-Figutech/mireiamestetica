import React from 'react';
import { SectionTitle } from '../ui/Typography';
import { ArrowRight } from '../ui/Icons';
import { Button } from '../ui/Button';

export const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Cuánto dura el tratamiento?", a: "El tratamiento inicial se completa en 2 o 3 sesiones. Luego, basta con ajustes cada cierto tiempo.", r: "Resultado real, sin mantenimiento constante." },
    { q: "¿Duele mucho?", a: "No. Se describe como una molestia leve. Se adapta a tu sensibilidad.", r: "No hay dolor extremo ni sorpresas." },
    { q: "¿Y si ya tengo una micropigmentación mal hecha?", a: "Hay casos que pueden corregirse, mejorarse o eliminarse. Lo vemos en la consulta.", r: "No estás condenado a quedarte así." },
    { q: "¿Cómo sé si me va a quedar natural?", a: "Porque lo diseñamos contigo, según tu cara, tu tono y tu estilo. No se improvisa.", r: "El objetivo es que se vea mejor, no “hecho”." },
    { q: "¿Y si tengo dudas?", a: "Reserva el diagnóstico gratuito. No tienes que decidir nada ahora.", r: "Aquí se habla claro antes de tocar nada." },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Preguntas Frecuentes"
          subtitle="DUDAS"
          accentWord="Frecuentes"
        />

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="text-lg font-bold text-dark-900 mb-2">{item.q}</h4>
              <p className="text-gray-600 mb-3">{item.a}</p>
              <div className="flex items-center gap-2 text-sm text-brand font-medium">
                <ArrowRight size={14} /> {item.r}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Anchor */}
        <div id="contact" className="mt-20 bg-dark-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-brand/10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">¿Listo para recuperar tu marco capilar?</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">Agenda tu diagnóstico gratuito y hablemos de tu caso. Sin compromiso.</p>
              <Button onClick={() => window.open('https://cal.com', '_blank')} className="text-xl px-12 py-5 shadow-2xl">
                Reservar Diagnóstico Gratuito
              </Button>
           </div>
        </div>

      </div>
    </section>
  );
};