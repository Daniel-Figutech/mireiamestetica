import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../ui/Typography';
import { Button } from '../ui/Button';
import { MapPin, ArrowRight } from '../ui/Icons';

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const steps = [
    {
      step: "PASO 1",
      title: "Diagnóstico individual",
      items: [
        { label: "Evalúo tu caso: tipo de piel, tono, diseño ideal" },
        { label: "Meta: Línea frontal definida y plan claro" },
      ],
      checks: ["Aclara dudas", "Define expectativas reales", "100% gratuito"],
      quote: "Me explicó todo súper claro. Cero dudas, cero sustos.",
      achievement: "Cero dudas antes de decidir"
    },
    {
      step: "PASO 2",
      title: "Aplicación progresiva",
      items: [
        { label: "2-3 sesiones adaptadas a tu ritmo y sensibilidad" },
      ],
      checks: ["Diseño natural", "Tono realista", "Protocolo clínico"],
      quote: "Dolió menos de lo que imaginaba. Se aguanta bien.",
      achievement: "Primer impacto visual positivo"
    },
    {
      step: "PASO 3",
      title: "Mantenimiento a medida",
      items: [
        { label: "Ajustes según tipo de piel y evolución" },
      ],
      checks: ["Look intacto por años", "Posibilidad de mejoras", "Corrección de trabajos previos"],
      quote: "Iba con una micropigmentación antigua mal hecha y me lo arreglaron. Increíble.",
      achievement: "Confianza sostenida"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5b63d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Así es tu recorrido, paso a paso."
          subtitle="ROADMAP"
          accentWord="recorrido"
        />

        <p className="text-center text-xl text-gray-500 mb-16 font-light">Sin sorpresas, sin prisas, sin errores.</p>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand/20 -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand z-20 hidden md:block"></div>

              {/* Content Box */}
              <div className="flex-1 md:w-1/2">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative">
                  <span className="text-xs font-bold text-brand uppercase tracking-widest mb-2 block">{step.step}</span>
                  <h3 className="text-2xl font-serif text-dark-900 mb-4">{step.title}</h3>

                  <div className="space-y-2 mb-6">
                    {step.items.map((item, i) => (
                      <p key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-brand font-bold">·</span> {item.label}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {step.checks.map((check, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">✓ {check}</span>
                    ))}
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-brand mb-4 italic text-gray-600 text-sm">
                    "{step.quote}"
                  </div>

                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <MapPin size={16} /> Logro: {step.achievement}
                  </div>
                </div>
              </div>

              {/* Spacer for timeline */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button onClick={() => navigate('/form')}>
            Empieza tu cambio hoy
          </Button>
        </div>
      </div>
    </section>
  );
};