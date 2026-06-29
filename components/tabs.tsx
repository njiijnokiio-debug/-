'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TabsProps {
  items: Array<{ label: string; content: React.ReactNode; id: string }>;
  defaultTab?: string;
}

export function Tabs({ items, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || items[0]?.id || '');

  return (
    <div>
      <div className="flex gap-2 border-b border-border mb-6 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors relative ${
              activeTab === item.id
                ? 'text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
            {activeTab === item.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {items.find((item) => item.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}