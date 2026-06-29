import { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { ReviewCard } from '@/components/review-card';
import { REVIEWS } from '@/constants';

export const metadata: Metadata = {
  title: 'Отзывы | ШКоДа',
  description: 'Отзывы родителей о развитии их детей',
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
                Истории успеха
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Реальные отзывы от родителей, чьи дети развиваются в нашем центре.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}