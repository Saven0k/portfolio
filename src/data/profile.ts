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
    
    about: {
        ru: "Frontend-разработчик с опытом участия в полном цикле создания веб-приложений. Увлекаюсь глубоким анализом кода, оптимизацией производительности и улучшением рабочих процессов в команде. Стремлюсь создавать эффективные и удобные пользовательские интерфейсы, а также принимать участие в бекенд-разработке.",
        en: "Frontend developer with experience in the full cycle of web application development. Passionate about deep code analysis, performance optimization, and improving team workflows. Strive to create efficient and user-friendly interfaces, as well as participate in backend development."
    },
    
    skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "Nest.js", level: 70 },
        { name: "FastApi", level: 70 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "Redux/Redux Toolkit", level: 85 },
        { name: "HTML5/CSS3/SASS", level: 90 },
        { name: "MySQL/PostgreSQL", level: 80 },
        { name: "Vite", level: 85 },
        { name: "Git/GitHub", level: 85 }
    ],
    
    education: [
        {
            name: "Хекслет колледж",
            nameEn: "Hexlet College",
            url: "https://ru.hexlet.io/",
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
    
    experience: [
        {
            company: "Хекслет колледж",
            companyEn: "Hexlet College",
            position: {
                ru: "Full Stack разработчик",
                en: "Full Stack Developer"
            },
            period: {
                ru: "Март 2025 — Декабрь 2025",
                en: "March 2025 — December 2025"
            },
            projects: [
                {
                    name: "База знаний",
                    nameEn: "Knowledge Base",
                    description: {
                        ru: "Веб-приложение для колледжа. Участвовал в полном цикле разработки - от проектирования интерфейса до реализации серверной логики.",
                        en: "Web application for college. Participated in the full development cycle - from interface design to server logic implementation."
                    },
                    achievements: {
                        ru: [
                            "Разрабатывал фронтенд-часть с использованием React, TypeScript, Redux-toolkit",
                            "Реализовал бекенд-функциональность на Node.js, Express, TypeScript, Prisma",
                            "Оптимизировал процессы взаимодействия между фронтендом и бекендом"
                        ],
                        en: [
                            "Developed frontend using React, TypeScript, Redux-toolkit",
                            "Implemented backend functionality with Node.js, Express, TypeScript, Prisma",
                            "Optimized frontend-backend interaction processes"
                        ]
                    }
                }
            ]
        },
        {
            company: "Финансовый учет",
            companyEn: "Finance Tracker",
            position: {
                ru: "Frontend разработчик",
                en: "Frontend Developer"
            },
            period: {
                ru: "Апрель 2025 — Октябрь 2025",
                en: "April 2025 — October 2025"
            },
            projects: [
                {
                    name: "Финансовый учет",
                    nameEn: "Finance Tracker",
                    description: {
                        ru: "Коммерческое веб-приложение для учета финансов",
                        en: "Commercial web application for financial accounting"
                    },
                    achievements: {
                        ru: [
                            "Принимал активное участие в командной разработке коммерческого веб-приложения",
                            "Координировал работу команды: распределял задачи, проводил код-ревью",
                            "Решал нестандартные задачи и отладку сложных технических проблем"
                        ],
                        en: [
                            "Actively participated in the team development of a commercial web application",
                            "Coordinated team work: task distribution, code reviews",
                            "Solved non-standard tasks and debugged complex technical issues"
                        ]
                    }
                }
            ]
        }
    ],
    
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
            name: "Knowledge Base",
            description: {
                ru: "Веб-приложение для колледжа с полным циклом разработки",
                en: "Web application for college with full development cycle"
            },
            link: "https://github.com/Saven0k/knowledge-base",
            github: "https://github.com/Saven0k/knowledge-base",
            stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
            image: "knowledge-base",
            features: ["JWT аутентификация", "Ролевая система", "Real-time обновления"]
        },
        {
            name: "Finance Tracker",
            description: {
                ru: "Приложение для учета личных финансов с аналитикой",
                en: "Personal finance tracking app with analytics"
            },
            link: "#",
            github: "https://github.com/Saven0k/finance-tracker",
            stack: ["React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL"],
            image: "finance-tracker",
            features: ["Графики и статистика", "Экспорт данных", "Категории расходов"]
        }
    ]
};