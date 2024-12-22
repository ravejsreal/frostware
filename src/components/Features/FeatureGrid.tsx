import React from 'react';
import { Shield, Zap, MousePointer, Cloud, Lock, Cpu } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced encryption and security protocols to protect your data.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with near-instant response times.',
  },
  {
    icon: MousePointer,
    title: 'Intuitive Interface',
    description: 'User-friendly design that feels natural and responsive.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless synchronization across all your devices.',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Granular permissions and role-based access management.',
  },
  {
    icon: Cpu,
    title: 'AI Powered',
    description: 'Smart optimizations using advanced machine learning.',
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="Powerful Features"
          subtitle="Discover what makes Frost the leading choice for professionals"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};