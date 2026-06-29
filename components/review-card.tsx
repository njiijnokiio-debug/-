'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Review } from '@/types';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="group hover:border-accent/50 hover:shadow-lg transition-all h-full flex flex-col">
        <CardContent className="pt-6 flex flex-col h-full">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-accent text-accent"
              />
            ))}
          </div>

          {/* Review text */}
          <p className="text-muted-foreground mb-6 flex-1 leading-relaxed italic">
            "{review.text}"
          </p>

          {/* Author info */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={review.image}
                alt={review.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm">{review.author}</p>
              <p className="text-xs text-muted-foreground truncate">
                Родитель {review.childName}, {review.childAge} лет
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}