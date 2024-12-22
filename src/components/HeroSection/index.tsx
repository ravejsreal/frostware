import React from 'react';
import { Snowflake, Download, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import GlowingOrb from '../GlowingOrb';
import { Button } from '../ui/Button'; // Named import

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[800px] aspect-square">
          <GlowingOrb className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Snowflake className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-blue-400" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Feel the Frost
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-blue-200/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Experience the next generation of performance optimization with our cutting-edge Frost technology
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
          <Button variant="primary" icon={<Download />} className="w-full sm:w-auto">
            Download Now
          </Button>
          <Button variant="outline" icon={<Key />} className="w-full sm:w-auto">
            Get Access Key
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

