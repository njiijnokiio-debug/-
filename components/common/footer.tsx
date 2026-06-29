'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_NAME } from '@/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#FF6B9D]">
                <span className="text-lg font-bold text-white">Ш</span>
              </div>
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Детский образовательный центр полного развития
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Программы
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Педагоги
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                +7 (999) 999-99-99
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                hello@shkoda.ru
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5" />
                г. Москва, ул. Примера, 1
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Часы работы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пн-пт: 08:00 - 20:00</li>
              <li>Сб: 09:00 - 18:00</li>
              <li>Вс: Выходной</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {SITE_NAME}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}