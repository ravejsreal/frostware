import React from 'react';
import { motion } from 'framer-motion';

interface GlowingOrbProps {
  className?: string;
}

const GlowingOrb: React.FC<GlowingOrbProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
      />
      <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 opacity-20 blur-3xl" />
    </div>
  );
};

export default GlowingOrb;