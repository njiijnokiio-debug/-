import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { EnrollmentForm } from '@/components/enrollment-form';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Запись | ШКоДа',
  description: 'Запись на пробное занятие, диагностику или консультацию',
};

export default function EnrollmentPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-12">
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-6">
            <div className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                Запишитесь на пробное занятие
              </h1>
              <p className="text-lg text-muted-foreground">
                Первое занятие абсолютно бесплатно. Мы познакомимся с вашим ребенком, поймем его потребности и предложим оптимальную программу развития.
              </p>
            </div>

            <EnrollmentForm />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="font-semibold mb-2">Позвоните нам</h3>
                <p className="text-muted-foreground text-sm">+7 (999) 999-99-99</p>
                <p className="text-xs text-muted-foreground mt-1">Пн-пт: 08:00-20:00</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-semibold mb-2">Приходите к нам</h3>
                <p className="text-muted-foreground text-sm">г. Москва,</p>
                <p className="text-muted-foreground text-sm">ул. Примера, 1</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-semibold mb-2">Напишите нам</h3>
                <p className="text-muted-foreground text-sm">hello@shkoda.ru</p>
                <p className="text-xs text-muted-foreground mt-1">Ответим в течение часа</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}