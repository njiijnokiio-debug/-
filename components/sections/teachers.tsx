'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TEACHERS } from '@/constants';
import { ArrowRight, Star } from 'lucide-react';

export function TeachersSection() {
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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши педагоги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессионалы, которые по-настоящему любят детей и помогают им раскрыть свой потенциал
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TEACHERS.map((teacher) => (
            <motion.div key={teacher.id} variants={itemVariants}>
              <Card className="group hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {teacher.specialization}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground mt-2">
                    Опыт: {teacher.experience} лет
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{teacher.bio}</p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    {teacher.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <Star size={14} className="text-accent" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/teachers">
            <Button size="lg" variant="outline">
              Все педагоги
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}