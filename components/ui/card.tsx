// components/ui/card.tsx
import React from 'react';

export const Card = ({ children, className }) => <div className={`p-2 bg-white shadow rounded ${className}`}>{children}</div>;

export const CardContent = ({ children, className }) => <div className={`p-4 ${className}`}>{children}</div>;
