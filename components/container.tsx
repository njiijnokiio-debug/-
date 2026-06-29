'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export function Container({ children, className = '', size = 'xl' }: ContainerProps) {
  return (
    <div className={`mx-auto ${sizes[size]} px-6 ${className}`}>
      {children}
    </div>
  );
}