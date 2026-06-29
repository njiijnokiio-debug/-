# ШКоДа - Modern Kids Education Center Website

🎨 Современный, эмоциональный и высококонверсионный сайт детского образовательного центра.

## 📋 Структура проекта

```
shkoda-website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Главная страница
│   ├── globals.css             # Глобальные стили
│   ├── programs/
│   │   └── page.tsx            # Страница программ
│   ├── teachers/
│   │   └── page.tsx            # Страница педагогов
│   ├── reviews/
│   │   └── page.tsx            # Страница отзывов
│   ├── enrollment/
│   │   └── page.tsx            # Форма записи
│   ├── sitemap.ts              # SEO Sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── ui/                     # UI компоненты (Shadcn)
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── common/                 # Общие компоненты
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/               # Секции страниц
│   │   ├── hero.tsx
│   │   ├── advantages.tsx
│   │   ├── programs.tsx
│   │   ├── teachers.tsx
│   │   ├── reviews.tsx
│   │   └── cta.tsx
│   ├── program-card.tsx        # Карточка программы
│   ├── teacher-card.tsx        # Карточка педагога
│   ├── review-card.tsx         # Карточка отзыва
│   ├── enrollment-form.tsx     # Форма записи
│   └── [другие компоненты]     # Вспомогательные компоненты
├── lib/
│   ├── cn.ts                   # Утилита для className
│   └── utils.ts                # Другие утилиты
├── types/
│   └── index.ts                # TypeScript типы
├── constants/
│   └── index.ts                # Константы и данные
├── public/                     # Статические файлы
├── package.json                # Зависимости
├── tailwind.config.ts          # Tailwind конфигурация
├── tsconfig.json               # TypeScript конфигурация
├── next.config.js              # Next.js конфигурация
└── README.md                   # Этот файл
```

## 🎯 Ключевые особенности

✅ **Современный дизайн** - Уровня Awwwards  
✅ **Адаптивность** - Mobile-first подход  
✅ **Анимации** - Framer Motion & Magic UI эффекты  
✅ **SEO оптимизация** - Meta tags, sitemap, robots.txt  
✅ **Производительность** - Image optimization, lazy loading  
✅ **Accessibility** - WCAG 2.1 AA  
✅ **TypeScript** - Type-safe код  
✅ **Production-ready** - Чистая архитектура  

## 🚀 Быстрый старт

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/njiijnokiio-debug/shkoda-website.git
cd shkoda-website

# Установите зависимости
npm install

# Создайте .env.local
cp .env.example .env.local
```

### Разработка

```bash
# Запуск dev сервера
npm run dev

# Открыть http://localhost:3000
```

### Production

```bash
# Сборка
npm run build

# Запуск production сервера
npm start

# Проверка типов
npm run type-check
```

## 📦 Технологический стек

- **Next.js 14** - React фреймворк
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Анимации
- **Shadcn/UI** - UI компоненты
- **React Hook Form** - Управление формами
- **Zod** - Валидация данных
- **Radix UI** - Примитивы для доступности

## 🎨 Цветовая палитра

```css
--primary: Cyan (#00D4FF)
--accent: Magenta (#FF6B9D)
--secondary: Gold (#FFD700)
--muted: Light Gray (#F5F5F5)
--background: White (#FFFFFF)
--foreground: Dark Gray (#2C2C2C)
```

## 📄 Страницы

### Главная (`/`)
- Hero секция с декоративными иллюстрациями
- Преимущества центра
- Программы обучения
- Педагоги
- Отзывы родителей
- CTA блоки записи

### Программы (`/programs`)
- Полный список всех программ
- Подробное описание каждой программы
- Указание возраста, длительности, стоимости
- Кнопка для записи на занятие

### Педагоги (`/teachers`)
- Галерея всех педагогов
- Информация о специализации
- Опыт работы
- Достижения

### Отзывы (`/reviews`)
- Отзывы родителей
- Рейтинги
- Истории успеха

### Запись (`/enrollment`)
- Форма записи на занятие
- Валидация данных
- Интегрированные контакты

## 🔧 Конфигурация

### Environment переменные

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ШКоДа
```

### Tailwind CSS

Кастомные классы и переменные определены в `tailwind.config.ts`.

## 🎬 Анимации

### Встроенные анимации

- `fade-in` - Плавное появление
- `slide-up` - Скольжение снизу
- `pulse-soft` - Мягкое пульсирование
- `float` - Плавающее движение

### Framer Motion

Используется для:
- Появления элементов при скролле
- Hover эффектов
- Переходов между страницами
- Микроанимаций

## 📱 Адаптивность

Проект полностью адаптирован для:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## ♿ Accessibility

- Семантический HTML
- ARIA labels
- Keyboard navigation
- Screen reader optimized
- Color contrast compliance

## 📈 SEO

- Meta tags
- Open Graph
- Twitter Card
- Structured data
- Sitemap
- Robots.txt

## 🤝 Контрибьютинг

Желаете помочь? Создайте pull request или откройте issue.

## 📞 Контакты

- **Phone:** +7 (999) 999-99-99
- **Email:** hello@shkoda.ru
- **Address:** г. Москва, ул. Примера, 1

## 📄 Лицензия

Private Project © 2026 ШКоДа
