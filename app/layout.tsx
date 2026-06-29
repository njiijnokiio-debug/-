import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ШКоДа | Детский образовательный центр',
  description: 'Современный детский центр, где мы развиваем детей от 1 года до 15 лет. Профессиональные педагоги, реальные результаты, атмосфера заботы и уважения.',
  keywords: 'детский центр, образование, развитие детей, занятия для детей, педагоги',
  authors: [{ name: 'ШКоДа' }],
  creator: 'ШКоДа',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://shkoda.ru',
    siteName: 'ШКоДа',
    title: 'ШКоДа | Детский образовательный центр',
    description: 'Современный детский центр с полным спектром услуг развития',
    images: [{
      url: 'https://images.unsplash.com/photo-1509027923786-221a25173e11?w=1200&h=630&fit=crop',
      width: 1200,
      height: 630,
      alt: 'ШКоДа детский центр',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ШКоДа | Детский образовательный центр',
    description: 'Развитие детей от 1 года до 15 лет в одном месте',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}