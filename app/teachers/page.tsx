import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { TeacherCard } from '@/components/teacher-card';
import { TEACHERS } from '@/constants';

export const metadata: Metadata = {
  title: 'Педагоги | ШКоДа',
  description: 'Наша команда опытных и добрых педагогов',
};

export default function TeachersPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                Наша команда
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессионалы с большим сердцем, которые по-настоящему любят детей и помогают им раскрыть свой потенциал.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEACHERS.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}