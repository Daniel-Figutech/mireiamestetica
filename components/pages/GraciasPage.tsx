import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, CheckCircle } from '../ui/Icons';

export const GraciasPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('converted') === 'success') {
            // @ts-ignore
            if (typeof fbq !== 'undefined') {
                // @ts-ignore
                fbq('track', 'Lead');
            }
        }
    }, [location]);
    return (
        <main className="min-h-screen bg-gradient-to-br from-brand/10 to-white flex flex-col items-center justify-center p-8">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-brand" />
                </div>

                <h1 className="text-3xl md:text-4xl font-serif text-dark-900 mb-4">
                    ¡Gracias por tu interés!
                </h1>

                <p className="text-gray-600 text-lg mb-8">
                    Hemos recibido tu solicitud. <strong>Te contactaremos muy pronto</strong> para agendar tu diagnóstico personalizado.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <p className="text-sm text-gray-500 mb-2">Si prefieres, puedes llamarnos directamente:</p>
                    <a
                        href="tel:618052574"
                        className="inline-flex items-center gap-3 text-2xl font-bold text-brand hover:text-brand-dark transition-colors"
                    >
                        <Phone size={24} />
                        618 052 574
                    </a>
                </div>

                <a
                    href="/"
                    className="text-brand hover:text-brand-dark underline transition-colors"
                >
                    Volver a la página principal
                </a>
            </div>
        </main>
    );
};
