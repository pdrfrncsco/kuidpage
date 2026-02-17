
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import Download from './components/Download';
import Vision from './components/Vision';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation observer logic can be added here if needed
  }, []);

  return (
    <div className="min-h-screen bg-deep-blue bg-grid selection:bg-tech-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <Download />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default App;
