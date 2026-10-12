export const profile = {
    name: {
        ru: "Роман",
        en: "Roman"
    },
    surname: {
        ru: "Савенков",
        en: "Savenkov"
    },
    age: 18,
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
                title: "Digital Control — Система видеоаналитики на производстве",
                subtitle: "Производственная практика в компании Газпром Нефть",
                date: "Июнь 2026",
                description: "Современное веб-приложение для мониторинга безопасности на производственных объектах с использованием технологий искусственного интеллекта",
                details: [
                    "Разработал адаптивное одностраничное приложение на React 18, TypeScript и Vite",
                    "Реализовал интерактивный каталог сценариев безопасности с фильтрацией по типам работ (Бурение, ТКРС, Транспорт)",
                    "Создал адаптивный UI с плавными анимациями, категоризированным отображением сценариев и раскрывающимися карточками с деталями",
                    "Оптимизировал отображение изображений для Retina-экранов с поддержкой разрешения 2x и отложенной загрузкой",
                    "Интегрировал плавный скролл для улучшения UX при раскрытии деталей сценария",
                    "Настроил сборку проекта и пайплайн деплоя на GitHub Pages"
                ],
                technologies: ["React", "TypeScript", "Vite", "CSS", "Git", "GitHub Pages"],
                link: "https://github.com/Saven0k/Digitalcontrol"
            },
            {
                type: "project",
                title: "CarMatch — Умный подбор автомобиля",
                subtitle: "Дипломный проект",
                date: "Июнь 2026",
                description: "Веб-приложение для подбора автомобиля на основе психо-геометрического профиля пользователя",
                details: [
                    "Спроектировал трёхуровневую клиент-серверную архитектуру (React + FastAPI + PostgreSQL)",
                    "Разработал фронтенд на React с TypeScript, адаптивным дизайном и анимациями Framer Motion",
                    "Создал бэкенд на FastAPI с JWT-аутентификацией, хэшированием паролей (bcrypt) и CRUD операциями",
                    "Реализовал умную логику подбора автомобиля на основе 5 пользовательских ответов (возраст, цвет, напиток, ритм жизни, стиль одежды)",
                    "Спроектировал и оптимизировал базу данных PostgreSQL с индексами для высокой производительности"
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
                    "Спроектировал трёхуровневую клиент-серверную архитектуру (React + FastAPI + PostgreSQL)",
                    "Разработал фронтенд на React с TypeScript и клиентской маршрутизацией",
                    "Создал бэкенд на FastAPI с JWT-аутентификацией и CRUD операциями",
                    "Реализовал систему астрологических прогнозов (симуляция положения планет)",
                    "Разработал базу данных PostgreSQL с отношением один-ко-многим",
                    "Интегрировал Framer Motion для плавных анимаций интерфейса"
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
                description: "Создал полноценную галерею для художников с функционалом публикации, модерации и социального взаимодействия",
                details: [
                    "Разработал архитектуру приложения на NestJS (бэкенд) и React (фронтенд)",
                    "Реализовал систему модерации контента с разграничением ролей (админ, модератор, художник, пользователь)",
                    "Интегрировал автоматический перевод контента на 5 языков через LibreTranslate API",
                    "Создал систему лайков и избранного с хранением в localStorage",
                    "Реализовал чат поддержки в реальном времени",
                    "Настроил Docker Compose для развертывания проекта"
                ],
                technologies: ["React", "TypeScript", "NestJS", "Sequelize", "PostgreSQL", "Redis", "Docker", "WebSocket"],
                link: "https://github.com/Saven0k/Gallery"
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
                    "Разработал полностью адаптивный интерфейс с поддержкой мобильных устройств",
                    "Реализовал тёмную и светлую тему с сохранением выбора в localStorage",
                    "Добавил полную локализацию на русский и английский языки",
                    "Создал интерактивную секцию навыков с модальными окнами",
                    "Интегрировал анимации с использованием Framer Motion"
                ],
                technologies: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "i18next", "SCSS"],
                link: "https://github.com/Saven0k/portfolio"
            },
            {
                type: "project",
                title: "Full Stack разработчик",
                subtitle: "Хекслет колледж",
                date: "Март 2025 — Декабрь 2025",
                description: "Участвовал в полном цикле разработки веб-приложения для колледжа",
                details: [
                    "Разрабатывал фронтенд-часть с использованием React, TypeScript, Redux-toolkit",
                    "Реализовал бекенд-функциональность на Node.js, Express, TypeScript, Prisma",
                    "Оптимизировал процессы взаимодействия между фронтендом и бекендом"
                ],
                technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
                link: "https://github.com/Saven0k/BaseKnowledge"
            },
            {
                type: "project",
                title: "Frontend разработчик",
                subtitle: "Финансовый учет",
                date: "Апрель 2025 — Октябрь 2025",
                description: "Разработка коммерческого веб-приложения для учета финансов",
                details: [
                    "Принимал активное участие в командной разработке коммерческого веб-приложения",
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
                title: "Digital Control — Industrial Video Analytics System",
                subtitle: "Industrial internship at Gazprom Neft",
                date: "June 2026",
                description: "A modern web application for monitoring industrial safety using artificial intelligence technologies",
                details: [
                    "Developed a responsive single-page application using React 18, TypeScript, and Vite",
                    "Implemented an interactive catalog of safety scenarios with filtering by work type (Drilling, Workover, Transport)",
                    "Created an adaptive UI with smooth animations, categorized scenario display, and expandable detail cards",
                    "Optimized image rendering for Retina displays with 2x resolution support and lazy loading",
                    "Integrated smooth scroll behavior for better UX when expanding scenario details",
                    "Configured project build and deployment pipeline to GitHub Pages"
                ],
                technologies: ["React", "TypeScript", "Vite", "CSS", "Git", "GitHub Pages"],
                link: "https://github.com/Saven0k/Digitalcontrol"
            },
            {
                type: "project",
                title: "CarMatch — Smart Car Matching",
                subtitle: "Graduation Project",
                date: "June 2026",
                description: "Web application for car matching based on user's psycho-geometric profile",
                details: [
                    "Designed three-tier client-server architecture (React + FastAPI + PostgreSQL)",
                    "Developed React frontend with TypeScript, responsive design, and Framer Motion animations",
                    "Created FastAPI backend with JWT authentication, password hashing (bcrypt), and CRUD operations",
                    "Implemented smart car matching logic based on 5 user answers (age, color, drink, lifestyle, clothing style)",
                    "Designed and optimized PostgreSQL database with indexes for high performance"
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
                    "Designed three-tier client-server architecture (React + FastAPI + PostgreSQL)",
                    "Developed React frontend with TypeScript and client-side routing",
                    "Created FastAPI backend with JWT authentication and CRUD operations",
                    "Implemented astrological forecast system (planetary positions simulation)",
                    "Designed PostgreSQL database with one-to-many relationships",
                    "Integrated Framer Motion for smooth UI animations"
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
                description: "Built a full-featured gallery for artists with publishing, moderation, and social interaction functionality",
                details: [
                    "Designed application architecture with NestJS (backend) and React (frontend)",
                    "Implemented content moderation system with role-based access (admin, moderator, artist, user)",
                    "Integrated automatic content translation into 5 languages via LibreTranslate API",
                    "Created likes and favorites system with localStorage storage",
                    "Developed real-time support chat",
                    "Set up Docker Compose for project deployment"
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
                    "Developed fully responsive interface with mobile device support",
                    "Implemented dark/light theme with localStorage persistence",
                    "Added full Russian/English localization",
                    "Created interactive skills section with modal windows",
                    "Integrated animations using Framer Motion"
                ],
                technologies: ["React", "TypeScript", "Vite", "Zustand", "Framer Motion", "i18next", "SCSS"],
                link: "https://github.com/Saven0k/portfolio"
            },
            {
                type: "project",
                title: "Full Stack Developer",
                subtitle: "Hexlet College",
                date: "March 2025 — December 2025",
                description: "Participated in the full cycle of web application development for college",
                details: [
                    "Developed frontend using React, TypeScript, Redux-toolkit",
                    "Implemented backend functionality with Node.js, Express, TypeScript, Prisma",
                    "Optimized frontend-backend interaction processes"
                ],
                technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
                link: "https://github.com/Saven0k/BaseKnowledge"
            },
            {
                type: "project",
                title: "Frontend Developer",
                subtitle: "Finance Tracker",
                date: "April 2025 — October 2025",
                description: "Development of a commercial web application for financial accounting",
                details: [
                    "Actively participated in the team development of a commercial web application",
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
