import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../ui/Typography';
import { Check, X } from '../ui/Icons';
import { Button } from '../ui/Button';

export const Comparison: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Micropigmentación capilar profesional vs. las otras opciones"
          subtitle="COMPARATIVA"
          accentWord="profesional"
        />

        <p className="text-center mb-12 text-gray-600">Mira tú mismo qué tiene sentido.</p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-serif text-dark-900 border-b-2 border-gray-100">Criterio</th>
                <th className="p-4 text-left font-bold text-brand border-b-2 border-brand bg-brand/5">Mireia Martínez Estética</th>
                <th className="p-4 text-left font-medium text-gray-500 border-b-2 border-gray-100">Fibras cosméticas</th>
                <th className="p-4 text-left font-medium text-gray-500 border-b-2 border-gray-100">Pelucas</th>
                <th className="p-4 text-left font-medium text-gray-500 border-b-2 border-gray-100">Centros low cost</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { c: "Resultado visual real", m: "Densidad natural", f: "Solo superficial", w: "Artificial", l: "Variable" },
                { c: "Durabilidad", m: "Años, con mantenimiento", f: "Se borra al sudar", w: "Limitada", l: "Incógnita" },
                { c: "Seguridad del método", m: "Técnica clínicamente probada", f: "Se cae al tacto", w: "Incomodidad", l: "Riesgo alto" },
                { c: "Corrección de errores", m: "Sí, incluso trabajos previos", f: "No aplica", w: "No aplica", l: "Sin garantía" },
                { c: "Experiencia profesional", m: "+25 años", f: "Sin formación", w: "No profesional", l: "Dudosa" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-transparent" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-dark-900">{row.c}</td>
                  <td className="p-4 bg-brand/5 font-semibold text-dark-900 flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> {row.m}
                  </td>
                  <td className="p-4 text-gray-500">
                    <div className="flex items-center gap-2"><X size={16} className="text-red-400" /> {row.f}</div>
                  </td>
                  <td className="p-4 text-gray-500">
                    <div className="flex items-center gap-2"><X size={16} className="text-red-400" /> {row.w}</div>
                  </td>
                  <td className="p-4 text-gray-500">
                    <div className="flex items-center gap-2"><X size={16} className="text-red-400" /> {row.l}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-dark-900 text-white p-6 rounded-lg mt-8 text-center max-w-2xl mx-auto">
          <p className="text-lg font-serif italic">📊 Resultado: efecto real, seguro, corregible y en manos expertas.</p>
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => navigate('/form')}>
            Empieza tu cambio hoy
          </Button>
        </div>

      </div>
    </section>
  );
};