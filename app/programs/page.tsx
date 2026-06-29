import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { motion } from 'framer-motion';
import { ProgramCard } from '@/components/program-card';
import { PROGRAMS } from '@/constants';

export const metadata: Metadata = {
  title: 'Программы | ШКоДа',
  description: 'Все программы развития детей от 1 года до 15 лет',
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                Наши программы
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексное развитие детей всех возрастов. Каждая программа разработана специалистами с учетом возрастных особенностей и потребностей вашего ребенка.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROGRAMS.map((program, idx) => (
                <ProgramCard key={program.id} program={program} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}