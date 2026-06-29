'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="relative rounded-2xl bg-gradient-to-r from-[#00D4FF]/10 to-[#FF6B9D]/10 border border-accent/30 p-12 md:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 text-6xl opacity-10 -mr-8 -mt-8">🌟</div>
          <div className="absolute bottom-0 left-0 text-6xl opacity-10 -ml-8 -mb-8">✨</div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к переменам?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатное пробное занятие или консультацию. Мы ответим на все ваши вопросы и подберем оптимальную программу для вашего ребенка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enrollment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white border-0 shadow-lg hover:shadow-xl transition-all"
                >
                  Записаться сейчас
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/30"
              >
                +7 (999) 999-99-99
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}