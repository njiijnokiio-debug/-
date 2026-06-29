'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  emoji?: string;
}

export function PageHeader({ title, description, emoji = '✨' }: PageHeaderProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-sm font-medium text-accent">{emoji} {title}</span>
      </motion.div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}