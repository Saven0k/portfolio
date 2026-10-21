export const profile = {
    name: {
        ru: "Роман",
        en: "Roman"
    },
    surname: {
        ru: "Савенков",
        en: "Savenkov"
    },
    birthDate: "2007-10-12",
    location: {
        ru: "Санкт-Петербург, Россия",
        en: "Saint Petersburg, Russia"
    },
    city: {
        ru: "Санкт-Петербург",
        en: "Saint Petersburg"
    },
    country: {
        ru: "Россия",
        en: "Russia"
    },
    position: {
        ru: "Frontend-разработчик",
        en: "Frontend Developer"
    },
    email: "romasav2017@gmail.com",
    github: "https://github.com/Saven0k",
    telegram: "@owl11112",
    experienceYears: 2,

    contacts: [
        { name: "Email", link: "mailto:romasav2017@gmail.com" },
        { name: "Telegram", link: "https://t.me/owl11112" },
        { name: "GitHub", link: "https://github.com/Saven0k" }
    ],

    about: {
        ru: {
            intro: "Frontend-разработчик: создаю интерфейсы на React и TypeScript — от адаптивной вёрстки до работы с состоянием и API. Мне важно, чтобы приложение было понятным пользователю и удобным в поддержке.",
            points: [
                "Разрабатываю компоненты, формы и клиентскую навигацию на React",
                "Верстаю адаптивные интерфейсы с помощью HTML, CSS и SCSS",
                "Подключаю API, управляю состоянием и обрабатываю загрузку и ошибки",
                "Работаю над производительностью интерфейсов и провожу код-ревью"
            ],
            softSkills: [
                "Обсуждаю требования и объясняю технические решения понятным языком",
                "Открыт к обратной связи, участвую в код-ревью и помогаю команде",
                "Довожу задачи до результата и заранее сообщаю о сложностях"
            ]
        },
        en: {
            intro: "Frontend developer building interfaces with React and TypeScript — from responsive layouts to state management and API integration. I care about making applications clear for users and easy to maintain.",
            points: [
                "Build components, forms and client-side navigation with React",
                "Create responsive interfaces with HTML, CSS and SCSS",
                "Integrate APIs, manage state and handle loading and errors",
                "Improve interface performance and review code"
            ],
            softSkills: [
                "Discuss requirements and explain technical decisions clearly",
                "Welcome feedback, take part in code reviews and help teammates",
                "Follow tasks through to completion and communicate blockers early"
            ]
        }
    },
    mentions: {
        ru: [
            {
                title: "Бронзовый призер чемпионата «Профессионалы»",
                description: "Занял 3 место в компетенции «Веб-технологии» на региональном этапе Всероссийского чемпионата «Профессионалы» (2025)",
                link: "https://admcol.ru/novosti/2025-03-12-nagrazhdenie-professionalov",
                date: "Март 2025",
                icon: "🥉"
            },
            {
                title: "Награждение от индустриального партнера",
                description: "Получил специальный приз от компании ООО «ГИПЕР» за выдающиеся результаты в чемпионате «Профессионалы», а также сертификат на стажировку (2026)",
                link: "https://admcol.ru/novosti/2026-04-03-v-khekslet-kolledzhe-nagradili-pobediteley-i-prizerov-chempionata-professionaly",
                date: "Апрель 2026",
                icon: "🏆"
            }
        ],
        en: [
            {
                title: "Bronze Prize-winner of 'Professionals' Championship",
                description: "Took 3rd place in the 'Web Technologies' category at the regional stage of the All-Russian Championship 'Professionals' (2025)",
                link: "https://admcol.ru/novosti/2025-03-12-nagrazhdenie-professionalov",
                date: "March 2025",
                icon: "🥉"
            },
            {
                title: "Award from Industry Partner",
                description: "Received a special prize from 'GIPER' LLC for outstanding results in the 'Professionals' championship, along with an internship certificate (2026)",
                link: "https://admcol.ru/novosti/2026-04-03-v-khekslet-kolledzhe-nagradili-pobediteley-i-prizerov-chempionata-professionaly",
                date: "April 2026",
                icon: "🏆"
            }
        ]
    },

    skills: {
        frontend: [
            { name: "React", level: 85, description: { ru: "Создал фильтруемый каталог сценариев в Digital Control.", en: "Built a filterable scenario catalog in Digital Control." } },
            { name: "TypeScript", level: 85, description: { ru: "Типизировал анкету и модели автомобилей в CarMatch.", en: "Typed the questionnaire and car models in CarMatch." } },
            { name: "JavaScript", level: 85, description: { ru: "Реализовал поиск и редактирование пользователей в «Базе знаний».", en: "Implemented user search and editing in Knowledge Base." } },
            { name: "HTML / CSS / SCSS", level: 90, description: { ru: "Сверстал адаптивное портфолио для смартфонов и компьютеров.", en: "Built responsive portfolio layouts for phones and desktops." } },
            { name: "Redux Toolkit / Zustand", level: 85, description: { ru: "Настроил состояние темы и языка портфолио через Zustand.", en: "Managed portfolio theme and language state with Zustand." } },
            { name: "REST API", level: 95, description: { ru: "Подключил авторизацию и записи AstroDiary к REST API.", en: "Connected AstroDiary authentication and diary entries to a REST API." } },
            { name: "Framer Motion", level: 85, description: { ru: "Добавил анимации секций и карточек в портфолио.", en: "Animated portfolio sections and cards with Framer Motion." } },
            { name: "Vite", level: 90, description: { ru: "Настроил сборку Digital Control для публикации на GitHub Pages.", en: "Configured the Digital Control build for GitHub Pages." } },
            { name: "Material UI", level: 90, description: { ru: "Подготовил поля ввода на Material UI для «Базы знаний».", en: "Created Material UI input fields for Knowledge Base." } },
            { name: "Git / GitHub", level: 90, description: { ru: "Организовал версионирование и публикацию портфолио в GitHub.", en: "Set up portfolio version control and publishing on GitHub." } },
            { name: "ESLint", level: 80, description: { ru: "Настроил проверку React и TypeScript в Digital Control через ESLint.", en: "Configured ESLint checks for React and TypeScript in Digital Control." } }
        ],
        backend: [
            { name: "Express.js", level: 95, description: { ru: "Разработал API статей и пользователей для «Базы знаний».", en: "Built the articles and users API for Knowledge Base." } },
            { name: "Nest.js", level: 75, description: { ru: "Реализовал роли пользователей и модерацию контента в Gallery.", en: "Implemented user roles and content moderation in Gallery." } },
            { name: "Django / DRF", level: 75, description: { ru: "Создал REST API с ролями для чемпионата «Профессионалы».", en: "Built a role-based REST API for the Professionals championship." } },
            { name: "FastAPI", level: 70, description: { ru: "Реализовал авторизацию и подбор автомобилей в CarMatch.", en: "Implemented authentication and car matching in CarMatch." } },
            { name: "MySQL / PostgreSQL", level: 80, description: { ru: "Спроектировал хранение пользователей и записей в AstroDiary.", en: "Designed user and diary entry storage in AstroDiary." } },
            { name: "Docker", level: 75, description: { ru: "Настроил запуск Gallery через Docker Compose.", en: "Configured Gallery startup with Docker Compose." } }
        ]
    },

    education: [
        {
            name: "Хекслет колледж",
            nameEn: "Hexlet College",
            url: "https://hexly.ru/",
            degree: {
                ru: "Информационные системы и программирование",
                en: "Information Systems and Programming"
            },
            specialization: {
                ru: "Frontend разработчик",
                en: "Frontend Developer"
            },
            startYear: 2024,
            endYear: 2027,
            period: {
                ru: "2024 — 2027",
                en: "2024 — 2027"
            },
            status: {
                ru: "👨‍🎓 Обучаюсь очно",
                en: "👨‍🎓 Studying full-time"
            },
            speciality: {
                ru: "Информационные системы и программирование",
                en: "Information systems and programming"
            }
        },
        {
            name: "Московский инновационный университет",
            nameEn: "Moscow Innovation University",
            url: "https://www.miu-edu.ru/",
            degree: {
                ru: "Прикладная информатика",
                en: "Applied Informatics"
            },
            specialization: {
                ru: "Бакалавр",
                en: "Bachelor's Degree"
            },
            startYear: 2025,
            endYear: 2029,
            period: {
                ru: "2025 — 2029",
                en: "2025 — 2029"
            },
            status: {
                ru: "🎓 Обучаюсь заочно",
                en: "🎓 Studying Part-time"
            },
            speciality: {
                ru: "Прикладная информатика",
                en: "Applied computer science"
            }
        }
    ],

    unifiedTimeline: {
        ru: [
            {
                type: "project",
                title: "Maria Portfolio — Портфолио журналиста",
                subtitle: "Разработка интерфейса, API и публикация",
                date: "Октябрь 2026",
                description: "Портфолио журналиста с серверным рендерингом, архивом публикаций и ежедневным обновлением материалов «Коммерсанта».",
                details: [
                    "Разработал адаптивный интерфейс на React и TypeScript: 4 раздела и 2 языка — русский и английский",
                    "Объединил публикации 3 изданий в каталог с фильтрацией и порционной загрузкой по 6 карточек",
                    "Настроил ежедневный сбор материалов и обновление архива в интерфейсе каждые 60 секунд; SQLite сохраняет публикации при сбое источника",
                    "Реализовал SSR с актуальными публикациями, метаданными Open Graph, разметкой Schema.org и sitemap для поисковой индексации",
                    "Объединил frontend и NestJS API в 1 Docker-контейнер; настроил проверки сборки, ESLint и тестов в GitHub Actions"
                ],
                technologies: ["React", "TypeScript", "SCSS", "Framer Motion", "SSR", "NestJS", "SQLite", "Docker", "GitHub Actions"],
                link: "https://github.com/Saven0k/maria-portfolio",
                demo: "https://maria.178-64-25-131.sslip.io/"
            },
            {
                type: "project",
                title: "Digital Control — Система видеоаналитики на производстве",
                subtitle: "Производственная практика в компании Газпром Нефть",
                date: "Июнь 2026",
                description: "Интерактивный каталог сценариев видеоаналитики для контроля промышленной безопасности.",
                details: [
                    "Разработал каталог 32 сценариев безопасности в 2 направлениях: 18 для бурения и 14 для ТКРС",
                    "Реализовал 3 режима фильтрации со счётчиком результатов и раскрывающимися карточками, доступными с клавиатуры",
                    "Настроил отложенную загрузку изображений и загрузку содержимого карточки при раскрытии",
                    "Подготовил адаптивный интерфейс на React и TypeScript и публикацию через GitHub Pages"
                ],
                technologies: ["React", "TypeScript", "Vite", "CSS", "Git", "GitHub Pages"],
                link: "https://github.com/Saven0k/Digitalcontrol"
            },
            {
                type: "project",
                title: "CarMatch — Умный подбор автомобиля",
                subtitle: "Дипломный проект",
                date: "Июнь 2026",
                description: "Сервис подбора автомобилей с анкетой предпочтений, ранжированием вариантов и объяснением рекомендаций.",
                details: [
                    "Разработал 5 экранов на React и TypeScript: главную, регистрацию, вход, анкету и результаты подбора",
                    "Связал анкету из 4 параметров с API, которое ранжирует автомобили и возвращает до 3 рекомендаций с объяснением выбора",
                    "Спроектировал 3 уровня приложения: React-интерфейс, FastAPI и базу PostgreSQL",
                    "Реализовал серверную JWT-аутентификацию и адаптивный интерфейс с анимациями Framer Motion"
                ],
                technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "bcrypt", "Docker", "Framer Motion", "Vite", "Axios"],
                link: "https://github.com/Saven0k/CarMatch"
            },
            {
                type: "project",
                title: "AstroDiary — Астрологический дневник",
                subtitle: "Дипломный проект",
                date: "Июнь 2026",
                description: "Веб-приложение для ведения астрологического дневника и самоанализа",
                details: [
                    "Разработал 5 экранов на React и TypeScript с проверкой авторизации для 3 разделов: кабинета, прогноза и дневника",
                    "Реализовал дневник с 5 вариантами настроения, сохранением через REST API и историей записей",
                    "Создал 6 серверных операций дневника: создание, список, чтение, обновление, удаление и выборку за период",
                    "Добавил демонстрационные астрологические прогнозы с симуляцией положения планет и анимации Framer Motion"
                ],
                technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "Vite", "Axios", "Framer Motion"],
                link: "https://github.com/Saven0k/AstroDiary"
            },
            {
                type: "achievement",
                title: "Призер чемпионата «Профессионалы»",
                subtitle: "Веб-технологии",
                date: "Январь 2026 — Март 2026",
                description: "Призовое место на региональном этапе всероссийского чемпионата «Профессионалы» в компетенции «Веб-технологии»",
                details: [
                    "Разработал SPA-приложение на React с нуля, используя современные подходы к компонентной архитектуре",
                    "Реализовал бэкенд на FastAPI с REST API, включая аутентификацию и валидацию данных",
                    "Оптимизировал интерфейс для всех типов устройств, обеспечив высокую производительность"
                ],
                technologies: ["SPA", "REST API", "FastAPI", "Python", "React", "PostgreSQL", "SQLAlchemy", "HTML/CSS", "JavaScript"],
                link: "https://profi.copp78.ru/2026"
            },
            {
                type: "project",
                title: "Gallery - Платформа для художников",
                subtitle: "Персональный проект",
                date: "Январь 2026 — Июнь 2026",
                description: "Платформа для публикации работ художников с личными кабинетами, модерацией и многоязычным интерфейсом.",
                details: [
                    "Реализовал интерфейс галереи на 3 языках: русском, английском и китайском",
                    "Разделил 11 экранов на лениво загружаемые React-модули",
                    "Разграничил доступ к профилю, публикации работ и админ-панели для 4 ролей в интерфейсе",
                    "Связал React-интерфейс с NestJS API и настроил развёртывание через Docker Compose"
                ],
                technologies: ["React", "TypeScript", "NestJS", "Sequelize", "PostgreSQL", "Redis", "Docker", "WebSocket"],
                link: "https://github.com/Saven0k/ArtGallary"
            },
            {
                type: "achievement",
                title: "Призер чемпионата «Профессионалы»",
                subtitle: "Веб-технологии",
                date: "Январь 2025 — Март 2025",
                description: "Призовое место на региональном этапе всероссийского чемпионата «Профессионалы» в компетенции «Веб-технологии»",
                details: [
                    "Разработал одностраничное приложение на React, организовав эффективное управление состоянием",
                    "Спроектировал REST API на Django Rest Framework с системой прав доступа и ролей",
                    "Развернул финальный проект на WordPress, настроил базу данных и серверное окружение",
                    "Адаптировал интерфейс под мобильные устройства, внедрил UX-решения для улучшения навигации"
                ],
                technologies: ["SPA", "REST API", "Django", "Python", "PostgreSQL", "React", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://cloud.mail.ru/public/zUiy/qTzHWjM1v/%D0%92%D0%B5%D0%B1-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8.pdf"
            },
            {
                type: "project",
                title: "Портфолио-сайт",
                subtitle: "Персональный сайт-портфолио",
                date: "Январь 2025",
                description: "Современное портфолио с адаптивным дизайном и полной локализацией",
                details: [
                    "Реализовал локализацию на 2 языках и переключение между 2 темами с сохранением настроек",
                    "Создал 17 интерактивных карточек навыков в 2 категориях с описаниями в модальных окнах",
                    "Подключил форму Formspree с обработкой загрузки, ошибок и повторных отправок без потери черновика при ошибке",
                    "Адаптировал интерфейс для смартфонов и компьютеров, добавил анимации Framer Motion и публикацию на GitHub Pages"
                ],
                technologies: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "i18next", "SCSS"],
                link: "https://github.com/Saven0k/portfolio"
            },
            {
                type: "project",
                title: "База знаний — Платформа для колледжа",
                subtitle: "Хекслет колледж",
                date: "Март 2025 — Декабрь 2025",
                description: "База знаний колледжа: поиск учебных материалов, редактор публикаций и управление доступом.",
                details: [
                    "Разработал интерфейсы и разграничение доступа для 4 ролей: студента, преподавателя, редактора и администратора",
                    "Создал библиотеку с 4 категориями материалов, поиском и 2 режимами отображения: плиткой и списком",
                    "Реализовал редактор с 3 статусами публикации, автосохранением черновиков и восстановлением версий"
                ],
                technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Quill", "Vite", "Express", "SQLite"],
                link: "https://github.com/Saven0k/BaseKnowledge"
            },
            {
                type: "project",
                title: "Финансовый трекер — Frontend-разработка",
                subtitle: "Финансовый учет",
                date: "Апрель 2025 — Октябрь 2025",
                description: "Разработка коммерческого веб-приложения для учета финансов",
                details: [
                    "Участвовал в разработке финансового трекера с 3 возможностями: аналитикой, экспортом данных и категориями расходов",
                    "Координировал работу команды: распределял задачи, проводил код-ревью",
                    "Решал нестандартные задачи и отладку сложных технических проблем"
                ],
                technologies: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL"],
                link: "https://github.com/Saven0k/finance-tracker"
            },
            {
                type: "achievement",
                title: "Призер чемпионата «Профессионалы»",
                subtitle: "Веб-технологии",
                date: "Январь 2024 — Март 2024",
                description: "Призовое место на региональном этапе всероссийского чемпионата «Профессионалы» в компетенции «Веб-технологии»",
                details: [
                    "Создал SPA-приложение на React, реализовал клиентскую маршрутизацию и управление состоянием",
                    "Разработал бэкенд на Django с REST API для обработки данных и взаимодействия с фронтендом",
                    "Настроил хостинг на WordPress и выполнил интеграцию с внешними сервисами",
                    "Сверстал адаптивный интерфейс с использованием современного CSS (Flexbox, Grid, медиа-запросы)"
                ],
                technologies: ["SPA", "REST API", "Django", "MySQL", "Python", "React", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F90kiqzN3WAvyfst1bRLU3Agkf0lGLPaiF7TFpgKV7V4Av42SGA5paYVI5Ge2%2Fz7qq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D1%8B%20%D0%A0%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%8D%D1%82%D0%B0%D0%BF%D0%B0%20%D0%A1%D0%9F%D0%B1%202024.pdf"
            }
        ],
        en: [
            {
                type: "project",
                title: "Maria Portfolio — Journalist Portfolio",
                subtitle: "Interface, API and deployment",
                date: "October 2026",
                description: "A journalist portfolio with server-side rendering, a publication archive and daily updates from Kommersant.",
                details: [
                    "Built a responsive React and TypeScript interface with 4 sections and 2 languages: Russian and English",
                    "Unified publications from 3 outlets in a filterable catalog with progressive loading in batches of 6 cards",
                    "Set up daily article collection and archive refreshes every 60 seconds in the UI; SQLite retains publications during source outages",
                    "Implemented SSR with current publications, Open Graph metadata, Schema.org markup and a sitemap for search indexing",
                    "Packaged the frontend and NestJS API in 1 Docker container, with build, ESLint and test checks in GitHub Actions"
                ],
                technologies: ["React", "TypeScript", "SCSS", "Framer Motion", "SSR", "NestJS", "SQLite", "Docker", "GitHub Actions"],
                link: "https://github.com/Saven0k/maria-portfolio",
                demo: "https://maria.178-64-25-131.sslip.io/"
            },
            {
                type: "project",
                title: "Digital Control — Industrial Video Analytics System",
                subtitle: "Industrial internship at Gazprom Neft",
                date: "June 2026",
                description: "An interactive catalog of video analytics scenarios for industrial safety monitoring.",
                details: [
                    "Built a catalog of 32 safety scenarios across 2 work areas: 18 for drilling and 14 for well servicing",
                    "Implemented 3 filtering modes with result counts and keyboard-accessible expandable scenario cards",
                    "Set up lazy image loading and deferred card content loading until expansion",
                    "Built a responsive React and TypeScript interface and configured GitHub Pages publishing"
                ],
                technologies: ["React", "TypeScript", "Vite", "CSS", "Git", "GitHub Pages"],
                link: "https://github.com/Saven0k/Digitalcontrol"
            },
            {
                type: "project",
                title: "CarMatch — Smart Car Matching",
                subtitle: "Graduation Project",
                date: "June 2026",
                description: "A car matching service with a preference questionnaire, ranked results and explanations for each recommendation.",
                details: [
                    "Built 5 React and TypeScript screens: landing page, registration, login, questionnaire and matching results",
                    "Connected a 4-parameter questionnaire to an API that ranks cars and returns up to 3 recommendations with selection reasons",
                    "Designed 3 application layers: a React interface, FastAPI and a PostgreSQL database",
                    "Implemented server-side JWT authentication and a responsive interface with Framer Motion animations"
                ],
                technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "bcrypt", "Docker", "Framer Motion", "Vite", "Axios"],
                link: "https://github.com/Saven0k/CarMatch"
            },
            {
                type: "project",
                title: "AstroDiary — Astrological Diary",
                subtitle: "Graduation Project",
                date: "June 2026",
                description: "Web application for astrological diary keeping and self-reflection",
                details: [
                    "Built 5 React and TypeScript screens with authentication checks for 3 sections: dashboard, horoscope and diary",
                    "Implemented a diary with 5 mood options, REST API persistence and an entry history",
                    "Built 6 server-side diary operations: create, list, read, update, delete and date-range queries",
                    "Added demo horoscopes with simulated planetary positions and Framer Motion animations"
                ],
                technologies: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "Vite", "Axios", "Framer Motion"],
                link: "https://github.com/Saven0k/AstroDiary"
            },
            {
                type: "achievement",
                title: "Prize-winner of 'Professionals' championship",
                subtitle: "Web Technologies",
                date: "January 2026 — March 2026",
                description: "Prize-winning place at the regional stage of the All-Russian championship 'Professionals' in the 'Web Technologies' category",
                details: [
                    "Developed an SPA application with React from scratch using modern component-based architecture",
                    "Built a FastAPI backend with REST API including authentication and data validation",
                    "Integrated with WordPress and configured CI/CD pipeline for automated deployment",
                    "Optimized the interface for all device types ensuring high performance"
                ],
                technologies: ["SPA", "REST API", "FastAPI", "Python", "React", "PostgreSQL", "SQLAlchemy", "HTML/CSS", "JavaScript"],
                link: "https://profi.copp78.ru/2026"
            },
            {
                type: "project",
                title: "Gallery - Art Platform",
                subtitle: "Personal Project",
                date: "January 2026 — June 2026",
                description: "An artwork publishing platform with personal accounts, moderation and a multilingual interface.",
                details: [
                    "Implemented the gallery interface in 3 languages: Russian, English and Chinese",
                    "Split 11 screens into lazy-loaded React modules",
                    "Implemented access rules for profile, artwork publishing and administration across 4 UI roles",
                    "Connected the React interface to a NestJS API and configured deployment with Docker Compose"
                ],
                technologies: ["React", "TypeScript", "NestJS", "Sequelize", "PostgreSQL", "Redis", "Docker", "WebSocket"],
                link: "https://github.com/Saven0k/ArtGallary"
            },
            {
                type: "achievement",
                title: "Prize-winner of 'Professionals' championship",
                subtitle: "Web Technologies",
                date: "January 2025 — March 2025",
                description: "Prize-winning place at the regional stage of the All-Russian championship 'Professionals' in the 'Web Technologies' category",
                details: [
                    "Created a single-page application with React, implementing efficient state management",
                    "Designed REST API using Django Rest Framework with role-based access control",
                    "Deployed the final project on WordPress, configured database and server environment",
                    "Adapted interface for mobile devices with UX improvements for better navigation"
                ],
                technologies: ["SPA", "REST API", "Django", "Python", "PostgreSQL", "React", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://cloud.mail.ru/public/zUiy/qTzHWjM1v/%D0%92%D0%B5%D0%B1-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8.pdf"
            },
            {
                type: "project",
                title: "Portfolio Website",
                subtitle: "Personal portfolio website",
                date: "January 2025",
                description: "Modern portfolio with responsive design and full localization",
                details: [
                    "Implemented localization in 2 languages and switching between 2 themes with saved preferences",
                    "Built 17 interactive skill cards across 2 categories with descriptions in modal dialogs",
                    "Integrated Formspree with loading, error and retry handling that preserves the draft after a failed submission",
                    "Adapted the interface for phones and desktops, added Framer Motion animations and GitHub Pages publishing"
                ],
                technologies: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "i18next", "SCSS"],
                link: "https://github.com/Saven0k/portfolio"
            },
            {
                type: "project",
                title: "Knowledge Base — College Platform",
                subtitle: "Hexlet College",
                date: "March 2025 — December 2025",
                description: "A college knowledge base with learning material search, a publishing editor and access management.",
                details: [
                    "Built interfaces and access rules for 4 roles: student, teacher, editor and administrator",
                    "Built a searchable library with 4 content categories and 2 layouts: grid and list",
                    "Implemented an editor with 3 publishing states, draft autosave and revision restoration"
                ],
                technologies: ["React", "TypeScript", "Zustand", "TanStack Query", "Quill", "Vite", "Express", "SQLite"],
                link: "https://github.com/Saven0k/BaseKnowledge"
            },
            {
                type: "project",
                title: "Finance Tracker — Frontend Development",
                subtitle: "Finance Tracker",
                date: "April 2025 — October 2025",
                description: "Development of a commercial web application for financial accounting",
                details: [
                    "Contributed to a finance tracker with 3 capabilities: analytics, data export and expense categories",
                    "Coordinated team work: task distribution, code reviews",
                    "Solved non-standard tasks and debugged complex technical issues"
                ],
                technologies: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL"],
                link: "https://github.com/Saven0k/finance-tracker"
            },
            {
                type: "achievement",
                title: "Prize-winner of 'Professionals' championship",
                subtitle: "Web Technologies",
                date: "January 2024 — March 2024",
                description: "Prize-winning place at the regional stage of the All-Russian championship 'Professionals' in the 'Web Technologies' category",
                details: [
                    "Built an SPA application with React, implementing client-side routing and state management",
                    "Developed a FastAPI backend with REST API for data processing and frontend interaction",
                    "Set up hosting on WordPress and integrated with external services",
                    "Created a responsive interface using modern CSS (Flexbox, Grid, media queries)"
                ],
                technologies: ["SPA", "REST API", "Django", "MySQL", "Python", "React", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F90kiqzN3WAvyfst1bRLU3Agkf0lGLPaiF7TFpgKV7V4Av42SGA5paYVI5Ge2%2Fz7qq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D1%8B%20%D0%A0%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%8D%D1%82%D0%B0%D0%BF%D0%B0%20%D0%A1%D0%9F%D0%B1%202024.pdf"
            }
        ]
    },

    languages: [
        {
            name: "Русский",
            nameEn: "Russian",
            level: { ru: "Родной", en: "Native" },
            percentage: 100
        },
        {
            name: "Английский",
            nameEn: "English",
            level: { ru: "B2 - Выше среднего", en: "B2 - Upper Intermediate" },
            percentage: 65
        }
    ],

    projects: [
        {
            name: {
                ru: "База знаний",
                en: "Knowledge Base"
            },
            description: {
                ru: "Веб-приложение для колледжа с полным циклом разработки",
                en: "Web application for college with full development cycle"
            },
            link: "https://github.com/Saven0k/knowledge-base",
            github: "https://github.com/Saven0k/knowledge-base",
            stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
            image: "knowledge-base",
            features: {
                ru: ["JWT аутентификация", "Ролевая система", "Real-time обновления"],
                en: ["JWT authentication", "Role system", "Real-time updates"]
            }
        },
        {
            name: {
                ru: "Финансовый трекер",
                en: "Finance Tracker"
            },
            description: {
                ru: "Приложение для учета личных финансов с аналитикой",
                en: "Personal finance tracking app with analytics"
            },
            link: "https://github.com/Saven0k/finance-tracker",
            github: "https://github.com/Saven0k/finance-tracker",
            stack: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL"],
            image: "finance-tracker",
            features: {
                ru: ["Графики и статистика", "Экспорт данных", "Категории расходов"],
                en: ["Charts and statistics", "Data export", "Expense categories"]
            }
        },
        {
            name: {
                ru: "Портфолио-сайт",
                en: "Portfolio Website"
            },
            description: {
                ru: "Современное портфолио-резюме с адаптивным дизайном, тёмной/светлой темой и полной локализацией. Включает визуализацию навыков, опыт работы, достижения и контакты.",
                en: "Modern portfolio-resume with responsive design, dark/light theme and full localization. Includes skills visualization, work experience, achievements and contacts."
            },
            link: "https://saven0k.github.io/portfolio",
            github: "https://github.com/Saven0k/portfolio",
            stack: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "i18next", "SCSS"],
            image: "portfolio",
            features: {
                ru: [
                    "🌍 Двуязычность (RU/EN)",
                    "🌓 Тёмная/светлая тема",
                    "📱 Полностью адаптивный дизайн",
                ],
                en: [
                    "🌍 Bilingual (RU/EN)",
                    "🌓 Dark/light theme",
                    "📱 Fully responsive design",
                ]
            }
        },
    ]
};

// Проект: «База Знаний» (веб-приложение для колледжа)

// Участвовал в полном цикле разработки - от проектирования интерфейса до реализации серверной логики.
// Разрабатывал фронтенд-часть с использованием React, TypeScript, HTML/CSS, Redux-toolkit, React context.
// Реализовывал бекенд-функциональность на Node.js,Express, TypeScript, MySql,Prisma.
// Оптимизировал процессы взаимодействия между фронтендом и бекендом, что улучшило скорость работы приложения.
