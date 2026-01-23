import React, { useEffect } from 'react';

export const FormPage: React.FC = () => {
    useEffect(() => {
        // Load Tally script
        const scriptId = 'tally-js';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://tally.so/widgets/embed.js";
            script.onload = () => {
                // @ts-ignore
                if (typeof Tally !== 'undefined') {
                    // @ts-ignore
                    Tally.loadEmbeds();
                }
            };
            document.body.appendChild(script);
        } else {
            // @ts-ignore
            if (typeof Tally !== 'undefined') {
                // @ts-ignore
                Tally.loadEmbeds();
            }
        }
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-serif text-dark-900 text-center mb-6">
                    Reserva tu <span className="italic text-brand">diagnóstico gratuito</span>
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Completa el formulario y nos pondremos en contacto contigo para agendar tu cita personalizada.
                </p>

                <div className="w-full">
                    <iframe
                        data-tally-src="https://tally.so/embed/ob2dpN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Reserva ahora tu diagnóstico gratuito y empieza tu cambio"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            </div>
        </main>
    );
};
