import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-md tracking-wide shadow-lg uppercase";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white shadow-brand/30",
    secondary: "bg-dark-900 hover:bg-dark-800 text-white shadow-dark-900/30",
    outline: "bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};