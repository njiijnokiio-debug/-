'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors">
      <Button
        onClick={onToggle}
        variant="ghost"
        className="w-full h-auto justify-between px-6 py-4 text-left hover:bg-accent/5 rounded-none"
      >
        <span className="font-semibold text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </Button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 border-t border-border bg-muted/30">
          <p className="text-muted-foreground">{content}</p>
        </div>
      </motion.div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: string }> | undefined;
}

export function Accordion({ items = [] }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}