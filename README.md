# 💼 Роман Савенков | Full Stack Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0-000000?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**Современное портфолио-резюме с адаптивным дизайном, тёмной/светлой темой и полной локализацией**

[🌐 Демо](https://saven0k.github.io/portfolio) | [📧 Контакты](#контакты) | [📄 Резюме](#)

</div>

---

## 📋 О проекте

Современное веб-портфолио, разработанное с использованием актуальных технологий. Включает полную информацию об опыте работы, образовании, навыках и проектах. Поддерживает русский и английский языки, а также тёмную и светлую темы.

### ✨ Особенности

| Функция | Описание |
|---------|----------|
| 🌍 **Двуязычность** | Полная поддержка русского и английского языков |
| 🌓 **Темы** | Тёмная и светлая тема с сохранением выбора |
| 📱 **Адаптивность** | Корректное отображение на всех устройствах |
| 🎨 **Анимации** | Плавные появления и hover-эффекты с Framer Motion |
| 📊 **Навыки** | Визуальные круговые индикаторы уровня владения |
| 🎓 **Образование** | Карточки с учебными заведениями и ссылками |
| 💼 **Опыт** | Таймлайн с ключевыми достижениями |
| 🚀 **Проекты** | Карточки с технологиями и ссылками на код |

---

## 🛠️ Технологии

### Frontend
- **React 18** — библиотека для UI
- **TypeScript** — типизация
- **Vite** — сборка и разработка
- **SCSS Modules** — стилизация

### State Management & Data
- **Zustand** — управление состоянием (тема, язык)
- **i18next** — интернационализация

### UI & Animations
- **Framer Motion** — анимации
- **CSS Variables** — динамическая смена темы

---

## 📁 Структура проекта
src/
├── components/ # React компоненты
│ ├── About/ # Обо мне
│ ├── Achievements/ # Достижения
│ ├── Contact/ # Контакты
│ ├── Experience/ # Опыт и образование
│ ├── Header/ # Шапка с навигацией
│ ├── Hero/ # Главный экран
│ ├── LanguageToggle/ # Переключатель языка
│ ├── Projects/ # Проекты
│ ├── Skills/ # Навыки с индикаторами
│ └── ThemeToggle/ # Переключатель темы
├── data/
│ └── profile.ts # Все данные (тексты, ссылки, проценты)
├── layouts/
│ └── MainLayout.tsx # Основной layout
├── store/
│ └── useAppStore.ts # Zustand store
├── styles/
│ ├── global.scss # Глобальные стили
│ └── variables.scss # CSS переменные
├── i18n/
│ ├── index.ts # Настройка i18n
│ ├── ru.json # Русские переводы
│ └── en.json # Английские переводы
├── App.tsx
└── main.tsx

## 🚀 Установка и запуск

### Требования
- Node.js 18+
- npm / yarn / pnpm

### Команды

```bash
# Клонирование репозитория
git clone https://github.com/Saven0k/portfolio.git
cd portfolio`

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка продакшн версии
npm run build

# Предпросмотр собранного проекта
npm run preview