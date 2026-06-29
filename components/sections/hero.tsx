'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#FF6B9D]/20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 -right-32 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-[#FF6B9D]/20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left decorative illustration area */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
          variants={floatingVariants}
          animate="float"
        >
          <div className="text-8xl">🎨</div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/30"
            variants={itemVariants}
          >
            <span className="text-sm font-medium text-accent">✨ Добро пожаловать в ШКоДа</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 gradient-text"
            variants={itemVariants}
          >
            Развиваем
            <br />
            детей с любовью
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Комплексное развитие от 1 года до 15 лет в одном месте. Профессиональные педагоги, реальные результаты и атмосфера заботы.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Link href="/enrollment">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white border-0 shadow-lg hover:shadow-xl transition-all"
              >
                Записаться на пробное занятие
              </Button>
            </Link>
            <Link href="#advantages">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Узнать больше
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-sm"
            variants={itemVariants}
          >
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <p className="text-muted-foreground">Счастливых детей</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">15+</div>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">98%</div>
              <p className="text-muted-foreground">Доволены родители</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right decorative illustration area */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        >
          <div className="text-8xl">🚀</div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center mt-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
}