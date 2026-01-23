import React from 'react';
import { SectionTitle } from '../ui/Typography';
import { MapPin, Phone, Clock } from '../ui/Icons';

export const Map: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Encuéntranos en Vall de Uxó"
                    subtitle="UBICACIÓN"
                    accentWord="Encuéntranos"
                />

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Map Embed */}
                    <div className="aspect-video md:aspect-square rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-0.2308!3d39.8256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ffe47d5e3b35b%3A0x0!2sErnesto%20P%C3%A9rez%20Almela%2C%2012600%20La%20Vall%20d&#39;Uix%C3%B3%2C%20Castell%C3%B3n!5e0!3m2!1ses!2ses!4v1706000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Mireia Martínez Estética Avanzada"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} className="text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-900 mb-1">Dirección</h3>
                                    <p className="text-gray-600">
                                        Calle Ernesto Pérez Almela<br />
                                        12600 Vall de Uxó, Castellón
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone size={24} className="text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-900 mb-1">Teléfono</h3>
                                    <a href="tel:618052574" className="text-brand hover:text-brand-dark font-medium text-lg">
                                        618 052 574
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock size={24} className="text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark-900 mb-1">Horario</h3>
                                    <p className="text-gray-600">
                                        Lunes a Viernes: 9:00 - 20:00<br />
                                        Sábados: Con cita previa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
