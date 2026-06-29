'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PROGRAMS } from '@/constants';
import { ArrowRight } from 'lucide-react';

export function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши программы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая программа разработана специалистами с учетом возрастных особенностей
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.id} variants={itemVariants}>
              <Card className="group hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{program.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {program.ageGroup}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{program.name}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Что входит:</p>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <span className="text-accent">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Длительность</p>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <Link href="/enrollment">
                      <Button size="sm" className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white">
                        Записаться
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/programs">
            <Button size="lg" variant="outline">
              Все программы
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}