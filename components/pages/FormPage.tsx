import React from 'react';

export const FormPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-serif text-dark-900 text-center mb-6">
                    Reserva tu <span className="italic text-brand">diagnóstico gratuito</span>
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Completa el formulario y nos pondremos en contacto contigo para agendar tu cita personalizada.
                </p>

                {/* Tally.so form will be embedded here */}
                <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
                    <p className="text-gray-400 italic">Espacio para formulario de Tally.so</p>
                </div>
            </div>
        </main>
    );
};
