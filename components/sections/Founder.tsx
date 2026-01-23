import React from 'react';
import mireiaMain from '../../assets/mireia-main.jpg';

export const Founder: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <img src={mireiaMain} alt="Mireia Martínez" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand text-white p-8 rounded-tl-3xl shadow-lg hidden md:block">
                <p className="font-serif italic text-2xl">25 años</p>
                <p className="text-xs uppercase tracking-wider">de experiencia</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-brand font-bold uppercase tracking-widest mb-4 block">Sobre Mireia 👋</span>
            <h2 className="text-4xl font-serif text-dark-900 mb-8">No empecé con pigmentos. <br /> <span className="italic text-brand">Empecé con piel.</span></h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Desde hace más de 25 años acompaño a mujeres y hombres en procesos estéticos que no son solo estéticos: son personales.
              </p>
              <p>
                Vi demasiados casos mal hechos. Líneas artificiales, tonos mal elegidos, personas con miedo de mirarse. Y decidí que nunca saldría nadie de mi centro con un resultado que no me haría sentir orgullosa.
              </p>
              <p>
                Aquí no trabajamos a volumen. Aquí se trabaja con criterio, diseño, protocolo clínico y trato humano. Porque un rostro sin marco no solo cambia cómo se ve… cambia cómo se siente.
              </p>
              <p className="font-medium text-dark-900">
                Te acompaño paso a paso.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="font-serif text-xl italic text-dark-900">— Mireia Martínez</p>
              <p className="text-sm text-gray-500 uppercase">Fundadora de Mireia Estética Avanzada</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};