'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION, SITE_NAME } from '@/constants';
import { motion } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#FF6B9D]">
            <span className="text-lg font-bold text-white">Ш</span>
          </div>
          <span className="hidden font-bold text-lg md:inline">{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-1 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/enrollment" className="hidden sm:inline">
            <Button size="sm" className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white hover:shadow-lg">
              Записаться
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-border bg-background/95 md:hidden"
        >
          <div className="flex flex-col gap-2 p-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/enrollment" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white">
                Записаться
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}