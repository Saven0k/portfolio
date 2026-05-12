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
        ru: "Full Stack разработчик",
        en: "Full Stack Developer"
    },
    email: "romasav2017@gmail.com",
    phone: "+79990374113",
    github: "https://github.com/Saven0k",
    telegram: "@owl11112",
    vkontakte: "https://vk.com/savenok0",
    experienceYears: 2,

    contacts: [
        { name: "Email", link: "mailto:romasav2017@gmail.com" },
        { name: "Telegram", link: "https://t.me/owl11112" },
        { name: "VKontakte", link: "https://vk.com/savenok0" }
    ],

    about: {
        ru: {
            intro: "Full Stack разработчик с опытом участия в полном цикле создания веб-приложений.",
            points: [
                "Разрабатываю проекты полного цикла — от идеи до продакшена",
                "Принимаю архитектурные решения и проектирую масштабируемую архитектуру приложений",
                "Оптимизирую производительность как клиентской, так и серверной части",
                "Внедряю best practices, улучшаю командные процессы и провожу код-ревью",
                "Участвую в стратегическом планировании технологического стека проекта"
            ]
        },
        en: {
            intro: "Full Stack developer with experience in the full cycle of web application development.",
            points: [
                "Develop full-cycle projects — from idea to production",
                "Make architectural decisions and design scalable application architecture",
                "Optimize performance of both client and server sides",
                "Implement best practices, improve team processes and conduct code reviews",
                "Participate in strategic planning of project technology stack"
            ]
        }
    },

    skills: {
        frontend: [
            { name: "React", level: 85, description: { ru: "Создаю компонентные приложения с использованием хуков, контекста и React Router. Оптимизирую перерисовку и работаю с виртуальным DOM.", en: "I create component-based applications using hooks, context, and React Router. I optimize re-rendering and work with virtual DOM." } },
            { name: "Next.js", level: 75, description: { ru: "Разрабатываю SSR и SSG приложения, работаю с App Router, API роутами и оптимизацией изображений.", en: "I develop SSR and SSG applications, work with App Router, API routes and image optimization." } },
            { name: "TypeScript", level: 85, description: { ru: "Использую строгую типизацию, интерфейсы, дженерики и утилитарные типы. Повышаю надежность кода.", en: "I use strict typing, interfaces, generics and utility types. I increase code reliability." } },
            { name: "Redux/Redux Toolkit/Zustand", level: 85, description: { ru: "Управляю глобальным состоянием, работаю с асинхронными действиями и middleware. Использую современные подходы.", en: "I manage global state, work with async actions and middleware. I use modern approaches." } },
            { name: "HTML5/CSS3/SASS", level: 90, description: { ru: "Верстаю семантическую, адаптивную и кроссбраузерную верстку. Использую препроцессоры и CSS модули.", en: "I create semantic, responsive and cross-browser layouts. I use preprocessors and CSS modules." } },
            { name: "Bootstrap/Material UI", level: 90, description: { ru: "Быстро создаю интерфейсы с использованием UI библиотек. Кастомизирую темы и компоненты.", en: "I quickly create interfaces using UI libraries. Customize themes and components." } },
            { name: "Vite/Webpack", level: 90, description: { ru: "Настраиваю сборщики, оптимизирую бандл, работаю с плагинами и лоадерами.", en: "I configure bundlers, optimize bundles, work with plugins and loaders." } },
            { name: "Framer Motion", level: 85, description: { ru: "Создаю плавные анимации и переходы, работаю с жестами и вариациями.", en: "I create smooth animations and transitions, work with gestures and variants." } },
            { name: "React Query/TanStack Query", level: 75, description: { ru: "Управляю серверным состоянием, кэширую данные и оптимизирую запросы.", en: "I manage server state, cache data and optimize queries." } },
            { name: "GraphQL/Apollo", level: 70, description: { ru: "Работаю с GraphQL API, пишу запросы и мутации, кэширую данные.", en: "I work with GraphQL API, write queries and mutations, cache data." } },
            { name: "ESLint/Prettier", level: 80, description: { ru: "Настраиваю линтеры и форматтеры для поддержания чистоты кода и единого стиля.", en: "I configure linters and formatters to maintain code cleanliness and consistent style." } }
        ],
        backend: [
            { name: "Express.js", level: 95, description: { ru: "Создаю REST API, middleware, обрабатываю маршруты и ошибки. Строю масштабируемые серверные приложения.", en: "I create REST APIs, middleware, handle routes and errors. Build scalable server applications." } },
            { name: "Nest.js", level: 75, description: { ru: "Использую модульную архитектуру, внедрение зависимостей и декораторы.", en: "I use modular architecture, dependency injection and decorators." } },
            { name: "Django/DRF", level: 75, description: { ru: "Разрабатываю бэкенд на Python, использую ORM, админ-панель и DRF.", en: "I develop backend in Python, use ORM, admin panel and DRF." } },
            { name: "FastAPI", level: 70, description: { ru: "Создаю быстрые API с автодокументацией и валидацией данных.", en: "I create fast APIs with auto-documentation and data validation." } },
            { name: "MySQL/PostgreSQL", level: 80, description: { ru: "Работаю с реляционными и NoSQL базами данных, пишу сложные запросы, проектирую схемы.", en: "I work with relational and NoSQL databases, write complex queries, design schemas." } },
            { name: "Prisma/TypeORM", level: 85, description: { ru: "Использую ORM для работы с БД, пишу модели, миграции и запросы.", en: "I use ORM for database work, write models, migrations and queries." } },
            { name: "Docker", level: 75, description: { ru: "Контейнеризирую приложения, пишу Dockerfile и docker-compose.", en: "I containerize applications, write Dockerfile and docker-compose." } },
            { name: "REST API", level: 95, description: { ru: "Проектирую и документирую RESTful API, работаю с HTTP методами и статусами.", en: "I design and document RESTful APIs, work with HTTP methods and statuses." } },
            { name: "Git/GitHub/GitLab", level: 90, description: { ru: "Работаю с системами контроля версий, веду код-ревью и управляю ветками.", en: "I work with version control systems, conduct code reviews and manage branches." } }
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
                ru: "👨‍🎓 Обучаюсь",
                en: "👨‍🎓 Studying"
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
                ru: "🎓 Заочно",
                en: "🎓 Part-time"
            }
        }
    ],

    unifiedTimeline: {
        ru: [
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
                type: "project",
                title: "Портфолио-сайт",
                subtitle: "Персональный сайт-портфолио",
                date: "2025",
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
            }, {
                type: "achievement",
                title: "Призер чемпионата «Профессионалы»",
                subtitle: "Веб-технологии",
                date: "2024",
                description: "Призовое место на региональном этапе всероссийского чемпионата",
                details: [
                    "Разработал SPA приложение с нуля",
                    "Создал REST API для приложения",
                    "Развернул проект на WordPress",
                    "Выполнил верстку адаптивного интерфейса"
                ],
                technologies: ["SPA", "REST API", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://github.com/Saven0k/professionals-challenge"
            }
        ],
        en: [
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
                type: "project",
                title: "Portfolio Website",
                subtitle: "Personal portfolio website",
                date: "2025",
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
                type: "achievement",
                title: "Prize-winner of 'Professionals' championship",
                subtitle: "Web Technologies",
                date: "2024",
                description: "Prize-winning place at the regional stage of the All-Russian championship",
                details: [
                    "Developed an SPA application from scratch",
                    "Created a REST API for the application",
                    "Deployed the project on WordPress",
                    "Implemented responsive interface layout"
                ],
                technologies: ["SPA", "REST API", "WordPress", "HTML/CSS", "JavaScript"],
                link: "https://github.com/Saven0k/professionals-challenge"
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
            link: "#",
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
        }
    ]
};