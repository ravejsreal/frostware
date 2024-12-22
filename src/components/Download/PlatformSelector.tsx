import React from 'react';
import { Monitor, Apple } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import PlatformCard from './PlatformCard';

const PlatformSelector: React.FC = () => {
  return (
    <section className="py-32 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Choose Your Platform"
          subtitle="Available for Windows, with MacOS support coming soon"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <PlatformCard
            icon={Monitor}
            name="Windows"
            description="64-bit (7, 8, 10, 11)"
          />
          
          <PlatformCard
            icon={Apple}
            name="MacOS"
            description="Coming Soon"
            disabled
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSelector;