// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default' | 'ghost';
  size?: 'icon' | 'small' | 'medium' | 'large' | 'sm'; // Ajoutez 'sm' à la liste des tailles valides
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', size, children, className, ...props }) => {
  let variantStyles;
  if (variant === 'outline') {
    variantStyles = 'border border-gray-500 text-gray-500';
  } else if (variant === 'ghost') {
    variantStyles = 'text-gray-500';
  } else {
    variantStyles = 'bg-blue-500 text-white';
  }

  let sizeStyles;
  if (size === 'icon') {
    sizeStyles = 'px-2 py-2';
  } else if (size === 'small' || size === 'sm') { // Ajoutez 'sm' ici
    sizeStyles = 'px-3 py-1';
  } else if (size === 'medium') {
    sizeStyles = 'px-4 py-2';
  } else if (size === 'large') {
    sizeStyles = 'px-6 py-3';
  } else {
    sizeStyles = 'px-4 py-2'; // Taille par défaut
  }

  const baseStyles = 'font-semibold rounded';

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
