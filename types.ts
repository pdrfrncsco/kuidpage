import React from 'react';

export interface Step {
  number: number;
  title: string;
  description: string;
  // Fix: Added React import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  // Fix: Added React import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Audience {
  title: string;
  description: string;
  image: string;
}