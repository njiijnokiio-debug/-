'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function Counter({ from, to, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const increment = (to - from) / (duration * 60);
    let current = from;

    const interval = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}