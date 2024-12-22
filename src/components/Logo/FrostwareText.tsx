import React from 'react';

interface FrostwareTextProps {
  size?: 'sm' | 'md' | 'lg';
}

const FrostwareText: React.FC<FrostwareTextProps> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <span className={`${sizes[size]} font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}>
      Frostware
    </span>
  );
};

export default FrostwareText;