import React from 'react';

export const Accent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-serif italic text-brand text-2xl md:text-3xl lg:text-4xl mx-1 relative inline-block">
    {children}
    <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand/40 transform -rotate-1 rounded-full"></span>
  </span>
);

export const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  accentWord?: string;
  centered?: boolean;
  dark?: boolean;
}> = ({ title, subtitle, accentWord, centered = true, dark = false }) => {
  
  const parts = accentWord ? title.split(accentWord) : [title];
  
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} max-w-4xl mx-auto px-4`}>
      {subtitle && (
        <span className={`block text-sm font-bold uppercase tracking-[0.2em] mb-3 ${dark ? 'text-brand' : 'text-brand-dark'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight ${dark ? 'text-white' : 'text-dark-900'}`}>
        {accentWord ? (
          <>
            {parts[0]}
            <span className="font-serif italic text-brand mx-1">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <div className={`h-1 w-20 bg-brand mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};