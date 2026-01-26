import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, CheckCircle, MessageCircle, ArrowRight } from '../ui/Icons';

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

                <div className="flex flex-col gap-4 mb-8">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">La forma más rápida de agendar:</p>
                    <a
                        href="https://walink.co/68zr69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <MessageCircle className="w-6 h-6 animate-pulse" />
                        Hablar por WhatsApp ahora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-sm text-gray-500 mb-2">Si lo prefieres, también puedes llamarnos:</p>
                        <a
                            href="tel:618052574"
                            className="inline-flex items-center gap-3 text-xl font-bold text-brand hover:text-brand-dark transition-colors"
                        >
                            <Phone size={20} />
                            618 052 574
                        </a>
                    </div>
                </div>

                <a
                    href="/"
                    className="text-gray-400 hover:text-brand underline text-sm transition-colors"
                >
                    Volver a la página principal
                </a>
            </div>
        </main>
    );
};
