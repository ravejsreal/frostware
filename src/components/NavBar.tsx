import React from 'react';
import { Snowflake } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Snowflake className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">Frostware</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;