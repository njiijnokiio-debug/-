# ШКоДА Development Guidelines

## данные в constants/index.ts

Все темпорарные данные сконцентрированы в `constants/index.ts`. Там вы можете использовать настоящие данные из базы данных или API.

## Компоненты UI

Основные компоненты UI находятся в `components/ui/`:
- Button
- Card
- Alert
- Modal
- Tabs
- Pagination

## Секции

Стандартные секции страницы:
- Hero
- Advantages
- Programs
- Teachers
- Reviews
- CTA

## Анимации

Все анимации используют Framer Motion с `whileInView` для триггера при скролле.

## Тайпы

Основные типы в `types/index.ts`:
- Teacher
- Program
- Review
- Advantage
- EnrollmentForm

## Настройки Кода

- TypeScript: `strict: true`
- ESLint: enabled
- Prettier: configured
- No `any` types
- No inline styles

## Дискуссия модели гораздо быстрее

Поскольку выставлены `'use client'` в компонентах, Next.js автоматически делит код, но для гораздо болюшого редюкса или во формах лучше сохранить как Server Component.

## Использование градиентов

Основные цвета:
```css
/* Cyan */
#00D4FF

/* Magenta */
#FF6B9D

/* Gold */
#FFD700
```

Эти цвета используются в `gradient-text` классе так:

```html
<h1 class="gradient-text">Some Heading</h1>
```

## Трубка релиза

1. Merge to `main`
2. Tag with version: `git tag v1.0.0`
3. Deploy to Vercel
4. Monitor analytics

## Проекты Необсымные

- [ ] Интеграция с CMS
- [ ] Модуль аналитики (Google Analytics, Hotjar)
- [ ] Автоматизация отправки заявок по email
- [ ] Кросс-доменные скрипты для нескольких имь центров
- [ ] Мобильное приложение
