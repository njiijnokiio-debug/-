'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface StatProps {
  value: string;
  label: string;
  icon: string;
}

export function StatCard({ value, label, icon }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="text-center hover:border-accent/50 hover:shadow-lg transition-all">
        <CardContent className="pt-6">
          <div className="text-5xl mb-2">{icon}</div>
          <p className="text-3xl font-bold text-accent mb-1">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}