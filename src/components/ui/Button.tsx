import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  icon, 
  variant = 'primary',
  onClick,
  className = ''
}) => {
  const baseStyles = "relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25",
    outline: "border-2 border-blue-500 hover:bg-blue-500/10 text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="w-4 h-4 sm:w-5 sm:h-5">{icon}</span>}
      {children}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

export { Button };
export default Button;

