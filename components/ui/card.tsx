// components/ui/card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  className?: string; // Déclarez className comme une prop optionnelle
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="border-b border-gray-200 pb-2 mb-4">{children}</div>
);

export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

export const CardDescription: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);

interface CardContentProps {
  className?: string; // Déclarez className comme une prop optionnelle
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
