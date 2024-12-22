import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  disabled?: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ icon: Icon, name, description, disabled }) => {
  const Card = disabled ? 'div' : motion.button;
  
  return (
    <Card
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      className={`relative bg-gray-800/50 p-12 rounded-xl overflow-hidden ${disabled ? 'opacity-50' : 'group'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center">
        <Icon className="w-20 h-20 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
        <span className="text-2xl font-semibold">{name}</span>
        <span className="text-gray-400 mt-2">{description}</span>
      </div>
      
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <span className="text-xl font-semibold">Coming Soon</span>
        </div>
      )}
    </Card>
  );
};

export default PlatformCard;