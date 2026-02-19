import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import TargetAudience from '../components/TargetAudience';
import Download from '../components/Download';
import Vision from '../components/Vision';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <TargetAudience />
      <Download />
      <Vision />
    </>
  );
};

export default Home;
