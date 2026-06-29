'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Program } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  index: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl">{program.icon}</div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
              {program.ageGroup}
            </span>
          </div>
          <CardTitle className="text-2xl">{program.name}</CardTitle>
          <CardDescription className="text-base mt-2">
            {program.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="mb-8 flex-1">
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              Что входит в программу:
            </p>
            <ul className="space-y-3">
              {program.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Продолжительность занятия</p>
                <p className="font-semibold text-lg">{program.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Стоимость</p>
                <p className="font-semibold text-lg">{program.price}₽</p>
              </div>
            </div>
            <Link href="/enrollment" className="w-full">
              <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white">
                Записаться
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}