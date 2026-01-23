import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-500 py-12 text-xs border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <p className="leading-relaxed">
            La información contenida en esta publicación constituye únicamente asesoramiento general. Ha sido elaborada sin tener en cuenta tus objetivos, situación financiera ni necesidades personales. Antes de actuar conforme a esta información, debes considerar si es apropiada para ti, teniendo en cuenta tus propios objetivos y necesidades. En la máxima medida permitida por la ley, el editor declina toda responsabilidad ante cualquier persona que actúe o deje de actuar basándose directamente en la información proporcionada.
          </p>
          
          <p>
            Este sitio no forma parte del sitio web de Facebook™ ni de Facebook™ Inc. Además, este sitio NO está avalado por Facebook™ de ninguna manera. FACEBOOK™ es una marca registrada de FACEBOOK™, Inc.
          </p>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
             <p>Copyright © {currentYear} Mireia Estética Avanzada. All Rights Reserved.</p>
             <div className="flex gap-4 underline">
                <a href="#" className="hover:text-brand">Privacy Policy</a>
                <a href="#" className="hover:text-brand">Terms & Conditions</a>
                <a href="#" className="hover:text-brand">Disclaimer</a>
             </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};