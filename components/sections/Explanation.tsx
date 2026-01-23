import React from 'react';
import { SectionTitle } from '../ui/Typography';
import { Check, X, ArrowRight, Camera, Clock, ShieldCheck, Sun, User } from '../ui/Icons';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import mireiaSecondary from '../../assets/mireia-secondary.jpg';

export const Explanation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <SectionTitle
          title="Cómo lograr un cambio visible sin cirugía, sin riesgos y sin arrepentimientos."
          subtitle="EXPLICACIÓN DEL MODELO"
          accentWord="visible"
        />

        <div className="max-w-3xl mx-auto text-center mb-16 text-gray-600 leading-relaxed text-lg">
          <p className="mb-6">
            Este tratamiento replica el folículo capilar de forma precisa, adaptado a tu tono, tipo de piel y estilo. En solo 2 a 3 sesiones, recuperas presencia sin tener que pensar más en fibras, gorros o cámaras.
          </p>
          <p>
            Imagina que sales de la ducha y no tienes que corregir nada frente al espejo. En la piscina, en una reunión o en una cita, simplemente estás tranquilo. Porque el marco de tu rostro volvió a estar donde tiene que estar.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Hard Way */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
            <h3 className="text-2xl font-serif mb-6 text-gray-400 group-hover:text-gray-600 transition-colors">Camino difícil</h3>
            <ul className="space-y-4">
              {[
                "Tapar con polvos o fibras cada mañana",
                "Evitar eventos por miedo a sudar o mojarte",
                "Peinarte siempre igual para disimular",
                "Dejarte el pelo largo aunque no te gusta",
                "Confiar en un centro sin experiencia",
                "Arrepentirte de un resultado artificial",
                "Desperdiciando tiempo y dinero…"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <span className="text-red-400 mt-1 flex-shrink-0"><X size={18} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Easy Way */}
          <div className="bg-white p-8 rounded-xl border-2 border-brand/20 relative overflow-hidden shadow-xl transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
            <h3 className="text-2xl font-serif mb-6 text-brand-dark">Camino fácil</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-dark-800 font-medium">
                <span className="text-brand mt-1 flex-shrink-0"><Check size={20} /></span>
                <span>Únete a Mireia Martínez Estética Avanzada</span>
              </li>
              <li className="flex items-start gap-3 text-dark-800 font-medium">
                <span className="text-brand mt-1 flex-shrink-0"><Check size={20} /></span>
                <span>Sigue un plan en manos expertas</span>
              </li>
              <li className="flex items-start gap-3 text-dark-800 font-medium">
                <span className="text-brand mt-1 flex-shrink-0"><Camera size={18} /></span>
                <span>Resultados naturales desde la 1ª sesión</span>
              </li>
              <li className="flex items-start gap-3 text-dark-800 font-medium">
                <span className="text-brand mt-1 flex-shrink-0"><Camera size={18} /></span>
                <span>Correcciones de trabajos antiguos sin rastro</span>
              </li>
              <li className="flex items-start gap-3 text-dark-800 font-medium">
                <span className="text-brand mt-1 flex-shrink-0"><Check size={20} /></span>
                <span>Recupera tu marco capilar con confianza</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mini Roadmap */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-16">
          {[
            { title: "Diagnóstico personalizado gratuito", icon: <User size={32} /> },
            { title: "Tratamiento diseñado a medida", icon: <ArrowRight size={32} /> },
            { title: "Resultados visibles, sin estrés", icon: <ShieldCheck size={32} /> },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="text-brand mb-4 opacity-80">{step.icon}</div>
              <h4 className="font-semibold text-dark-800">{step.title}</h4>
            </div>
          ))}
        </div>

        {/* Benefits & Note */}
        <div className="bg-dark-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-serif italic text-brand mb-6">Beneficios colaterales</h3>
              <ul className="space-y-3">
                {[
                  "Ahorras 30 min diarios de retoques",
                  "Te ves mejor en fotos y reuniones",
                  "Recuperas seguridad al 100 %",
                  "El resultado se mantiene sin importar la luz",
                  "Corriges errores anteriores sin dejar rastro"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={16} className="text-brand" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l border-white/10 pl-8 md:pl-12">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Necesitarás 2 o 3 sesiones, pero el cambio se nota desde la primera. Sin quirófanos. Sin riesgos.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                  <img src={mireiaSecondary} alt="Mireia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-serif italic text-brand">Mireia Martínez</p>
                  <p className="text-xs text-gray-500">Especialista en estética avanzada desde hace 25 años.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button onClick={() => navigate('/form')}>
            Empieza tu cambio hoy
          </Button>
        </div>

      </div>
    </section>
  );
};