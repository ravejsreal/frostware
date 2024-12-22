import React from 'react';
import { Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

interface FrostLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const FrostLogo: React.FC<FrostLogoProps> = ({ size = 'md', animated = false }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const LogoWrapper = animated ? motion.div : 'div';
  const animationProps = animated ? {
    animate: { 
      rotate: 360,
      scale: [1, 1.2, 1]
    },
    transition: { 
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  } : {};

  return (
    <LogoWrapper {...animationProps} className="text-blue-400">
      <Snowflake className={`${sizes[size]} filter drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]`} />
    </LogoWrapper>
  );
};

export default FrostLogo;