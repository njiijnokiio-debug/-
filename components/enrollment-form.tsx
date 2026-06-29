'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, AlertCircle } from 'lucide-react';

const enrollmentSchema = z.object({
  childName: z.string().min(2, 'Имя ребенка обязательно'),
  parentName: z.string().min(2, 'Ваше имя обязательно'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Некорректный номер телефона'),
  age: z.number().min(1).max(15, 'Возраст должен быть от 1 до 15 лет'),
  interests: z.array(z.string()).min(1, 'Выберите хотя бы одно направление'),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

const interests = [
  { id: 'early-dev', label: 'Раннее развитие (1-3 года)' },
  { id: 'prep-school', label: 'Подготовка к школе (3-6 лет)' },
  { id: 'academics', label: 'Дополнительное образование (7-12 лет)' },
  { id: 'specialization', label: 'Специализированные курсы (13-15 лет)' },
  { id: 'art', label: 'Художественное развитие' },
  { id: 'english', label: 'Английский язык' },
];

export function EnrollmentForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  });

  const selectedInterests = watch('interests') || [];

  const onSubmit = async (data: EnrollmentFormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <Card className="border-accent/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl gradient-text">
            Запись на занятие
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Заполните форму, и мы свяжемся с вами в течение 24 часов
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Child Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Имя ребенка *
              </label>
              <input
                {...register('childName')}
                type="text"
                placeholder="Например, Софья"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {errors.childName && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.childName.message}
                </p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Возраст ребенка (1-15 лет) *
              </label>
              <input
                {...register('age', { valueAsNumber: true })}
                type="number"
                min="1"
                max="15"
                placeholder="Например, 4"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {errors.age && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Ваше имя *
              </label>
              <input
                {...register('parentName')}
                type="text"
                placeholder="Например, Мария"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {errors.parentName && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.parentName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="ваш@email.com"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Номер телефона *
              </label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="+7 (999) 999-99-99"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Интересующие направления *
              </label>
              <div className="space-y-2">
                {interests.map((interest) => (
                  <label
                    key={interest.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={interest.id}
                      {...register('interests')}
                      className="w-5 h-5 rounded-md border border-accent bg-background cursor-pointer accent-accent"
                    />
                    <span className="text-sm">{interest.label}</span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.interests.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white border-0 shadow-lg hover:shadow-xl transition-all"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <Check size={18} />
                  Спасибо! Мы скоро свяжемся
                </span>
              ) : (
                'Отправить заявку'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Мы не передаем ваши данные третьим лицам
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}