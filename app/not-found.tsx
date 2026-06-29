import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

export const metadata = {
  title: '404 | ШКоДа',
  description: 'Страница не найдена',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] pt-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <p className="text-2xl font-semibold mb-2">Опс, страница не найдена!</p>
          <p className="text-muted-foreground mb-8">К сожалению, указанная страница не существует.</p>
          <a
            href="/"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#FF6B9D] text-white font-medium hover:shadow-lg transition-all"
          >
            Вернуться на главную
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}