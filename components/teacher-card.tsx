'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Teacher } from '@/types';
import { Star } from 'lucide-react';

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="group hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col overflow-hidden">
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            src={teacher.image}
            alt={teacher.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">{teacher.name}</CardTitle>
          <CardDescription className="text-accent font-semibold text-sm mt-1">
            {teacher.specialization}
          </CardDescription>
          <p className="text-xs text-muted-foreground mt-2 font-medium">
            Опыт: {teacher.experience} лет
          </p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
            {teacher.bio}
          </p>
          <div className="space-y-2 pt-4 border-t border-border">
            {teacher.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Star size={14} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-tight">{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}