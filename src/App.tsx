import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/Features/FeatureGrid';
import PlatformSelector from './components/Download/PlatformSelector';
import StarField from './components/StarField';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="relative min-h-screen bg-[#0B1121] text-white overflow-hidden">
        <StarField />
        <NavBar />
        <HeroSection />
        <FeatureGrid />
        <PlatformSelector />
      </div>
    </>
  );
}

export default App;