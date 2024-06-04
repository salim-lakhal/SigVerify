// components/ui/button.tsx
import React from 'react';

export const Button = ({ variant, children, ...props }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded';
  const variantStyles = variant === 'outline' ? 'border border-gray-500' : 'bg-blue-500 text-white';

  return (
    <button className={`${baseStyles} ${variantStyles} text-sm`} {...props}>
      {children}
    </button>
  );
};
