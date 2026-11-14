export interface Repo {
  name: string
  summary: string
  stack: string[]
  commits: number
  period: string
  details?: string[]
  url?: string
}

export interface RepoGroup {
  title: string
  repos: Repo[]
}

// Репозитории с коммитами за 2026 год, которые оставлены к показу
export const repoGroups: RepoGroup[] = [
  {
    "title": "Сайты и платформы",
    "repos": [
      {
        "name": "korean (우리말)",
        "summary": "Платформа для изучения корейского с нуля. Живой сайт korean.meeymirita.ru. Главный проект года.",
        "stack": [
          "Vue 3",
          "TypeScript",
          "NestJS",
          "PostgreSQL",
          "Docker",
          "CI"
        ],
        "commits": 756,
        "period": "21.10 – 14.11",
        "details": [
          "Словарь, грамматика, игры, повторение по интервалам, заметки, корзина, напоминания.",
          "Telegram: подборка слов «Выписать в тетрадь» в 19:00, напоминания.",
          "Счётчик «дней занятий» вместо серии подряд, достижения за разные дни.",
          "Адаптив на экранах 320–430 px, окно поиска, раздел «История».",
          "Автодеплой после зелёного CI; описание сделанного в CHANGES-2026-11-13.md.",
          "Выросла из занятий по курсу 서울대 한국어+ 1A. 677 коммитов от popap182, остальные с других имён."
        ],
        "url": "https://github.com/meeymirita/korean"
      },
      {
        "name": "me (личный сайт)",
        "summary": "Сайт-портфолио NIKITA / DEVELOPER: стек, проекты, «Обо мне», резюме в PDF. Раньше это была «Магия воспоминаний» с темой Фрирен.",
        "stack": [
          "Vue 3",
          "TypeScript",
          "Vite 8",
          "Pinia",
          "Vue Router"
        ],
        "commits": 62,
        "period": "21.10 – 06.11",
        "details": [
          "Единственная страница HomeView.vue, фон с сакурой.",
          "Раздел про корейский и игру вынесены в korean.",
          "Хостится на meeymirita.ru через Caddy, обновление: git pull и npm run build.",
          "Сегодня добавлена мобильная раскладка (пока без коммита)."
        ],
        "url": "https://github.com/meeymirita/me"
      },
      {
        "name": "feedback-platform-klite",
        "summary": "Мини-платформа ежедневной и еженедельной отчётности сотрудников.",
        "stack": [
          "NestJS",
          "Vue",
          "PostgreSQL",
          "Docker",
          "Caddy"
        ],
        "commits": 79,
        "period": "28.08 – 03.09",
        "details": [
          "Сотрудник фиксирует задачи за день: направление, ссылка, что сделал, время.",
          "Руководитель (ADMIN / MIRA) видит недельный отчёт по каждому и сводку по всем.",
          "Версия v1.0.0, боевой релиз, одобрен заказчиком, развёрнут на VPS.",
          "Есть DEPLOY.md и ТЗ v1.0 в README."
        ],
        "url": "https://github.com/meeymirita/feedback-platform-klite"
      },
      {
        "name": "dev-services-site",
        "summary": "Статичный сайт услуг разработки без сборки.",
        "stack": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "commits": 2,
        "period": "30.09",
        "details": [
          "Главная, страница услуги (пример: очереди в Laravel), страница статьи, дизайн-система.",
          "Идея, дизайн и план в docs/IDEA.md."
        ]
      },
      {
        "name": "meeymirita (профиль GitHub)",
        "summary": "README профиля на GitHub: баннер, технологии, ссылки.",
        "stack": [
          "Markdown"
        ],
        "commits": 11,
        "period": "с 08.2025, в 2026 до 15.09",
        "details": [
          "В 2026 убраны виджеты статистики, у которых упал сервис.",
          "Всего 30 коммитов, 11 из них в 2026."
        ],
        "url": "https://github.com/meeymirita/meeymirita"
      }
    ]
  },
  {
    "title": "ANITECH PERFORMANCE: платформа",
    "repos": [
      {
        "name": "anitech-performance (корневой)",
        "summary": "Обучающая платформа anitech.meeymirita.ru. Собирает все лабы подмодулями.",
        "stack": [
          "Python",
          "Shell",
          "Markdown",
          "HTML",
          "submodules"
        ],
        "commits": 430,
        "period": "11.09 – 26.10",
        "details": [
          "Темы: Bash, Docker, Traefik, Caddy, Kubernetes, PHP, ООП, алгоритмы, RabbitMQ, Redis, Laravel, Inertia, CSS, Tailwind, JS, Vue, TypeScript, Nuxt, Angular, Express, NestJS, GraphQL, PostgreSQL, Prisma, Centrifugo, Go, Ansible.",
          "Каждая лаба: методичка по сессиям и сквозной проект, вычитана и проверена запуском.",
          "Есть .github, CLAUDE.md, LICENSE и NOTICE.",
          "Последние коммиты: обновление подмодулей, аудит статусов, исправление битых ссылок."
        ],
        "url": "https://github.com/meeymirita/anitech-performance"
      },
      {
        "name": "works-lab",
        "summary": "Страницы-витрины лаб и служебные данные сайта.",
        "stack": [
          "HTML",
          "JS",
          "изображения"
        ],
        "commits": 226,
        "period": "20.09 – 26.10",
        "details": [
          "По странице на каждую лабу: описание, стек, «Чему вы научитесь», оглавление, статус проверки.",
          "progress.html и changelog.html, обложки лаб (~130 файлов)."
        ],
        "url": "https://github.com/meeymirita/works-lab"
      },
      {
        "name": "site-private",
        "summary": "Служебные страницы anitech.meeymirita.ru, в том числе личная шпаргалка владельца за паролем.",
        "stack": [
          "HTML"
        ],
        "commits": 5,
        "period": "06.10 – 21.10",
        "url": "https://github.com/meeymirita/site-private"
      }
    ]
  },
  {
    "title": "Лабы: backend",
    "repos": [
      {
        "name": "php-lab",
        "summary": "Чистый PHP. Методичка вычитана 24.09.",
        "stack": [
          "PHP"
        ],
        "commits": 34,
        "period": "20.09 – 26.10",
        "url": "https://github.com/meeymirita/php-lab"
      },
      {
        "name": "oop-lab (php-coffee)",
        "summary": "ООП на примере Coffee Shop API. Вычитана 24.09.",
        "stack": [
          "PHP",
          "ООП",
          "Docker"
        ],
        "commits": 46,
        "period": "13.09 – 23.10",
        "url": "https://github.com/meeymirita/oop-lab"
      },
      {
        "name": "algorithms-php-lab",
        "summary": "Алгоритмы и структуры данных, проект CoffeeAlgo. Проверена запуском 04.10, формат Caddy 17.10.",
        "stack": [
          "PHP"
        ],
        "commits": 19,
        "period": "04.10 – 26.10",
        "url": "https://github.com/meeymirita/algorithms-php-lab"
      },
      {
        "name": "postgresql-lab",
        "summary": "Coffee Shop изнутри. Вычитана 26.09.",
        "stack": [
          "PostgreSQL"
        ],
        "commits": 31,
        "period": "25.09 – 26.10",
        "url": "https://github.com/meeymirita/postgresql-lab"
      },
      {
        "name": "redis-lab",
        "summary": "Кэш, блокировки, rate limit, Streams. Вычитана 24.09.",
        "stack": [
          "Redis"
        ],
        "commits": 44,
        "period": "11.09 – 25.10",
        "url": "https://github.com/meeymirita/redis-lab"
      },
      {
        "name": "rabbitmq-lab",
        "summary": "Transactional Outbox, воркеры, DLQ. Есть рабочий код на PHP (~97 файлов). Вычитана 26.09.",
        "stack": [
          "RabbitMQ",
          "PHP",
          "Laravel"
        ],
        "commits": 46,
        "period": "07.09 – 23.10",
        "url": "https://github.com/meeymirita/rabbitmq-lab"
      },
      {
        "name": "laravel-lab",
        "summary": "Проект TaskFlow. Вычитана 24.09.",
        "stack": [
          "Laravel"
        ],
        "commits": 39,
        "period": "15.09 – 26.10",
        "url": "https://github.com/meeymirita/laravel-lab"
      },
      {
        "name": "laravel-performance-lab",
        "summary": "Проект CoffeePerf: N+1, JIT, оптимизация. Проверена запуском 04.10.",
        "stack": [
          "Laravel",
          "PHP"
        ],
        "commits": 19,
        "period": "04.10 – 26.10",
        "url": "https://github.com/meeymirita/laravel-performance-lab"
      },
      {
        "name": "inertia-lab",
        "summary": "Inkwell, блог-платформа. 10 сессий, расширена 22.10. Сессии 1–5 проверены запуском.",
        "stack": [
          "Inertia",
          "Laravel",
          "Vue"
        ],
        "commits": 30,
        "period": "02.10 – 26.10",
        "url": "https://github.com/meeymirita/inertia-lab"
      },
      {
        "name": "nestjs-lab",
        "summary": "Helpdesk API с нуля. Содержимое полностью переписано, проверена 24.10.",
        "stack": [
          "NestJS",
          "TypeScript"
        ],
        "commits": 41,
        "period": "22.09 – 26.10",
        "url": "https://github.com/meeymirita/nestjs-lab"
      },
      {
        "name": "graphql-lab",
        "summary": "Проект CineGraph. Вычитана 24.09.",
        "stack": [
          "GraphQL"
        ],
        "commits": 40,
        "period": "22.09 – 26.10",
        "url": "https://github.com/meeymirita/graphql-lab"
      },
      {
        "name": "express-lab",
        "summary": "Две части: Node.js с нуля (8 сессий) и Express.",
        "stack": [
          "Node.js",
          "Express"
        ],
        "commits": 12,
        "period": "11.10 – 26.10",
        "url": "https://github.com/meeymirita/express-lab"
      },
      {
        "name": "prisma-lab",
        "summary": "«Наследство»: чужая база с грязными данными превращается в типизированный слой на Prisma. Проект RentKit.",
        "stack": [
          "Prisma 7",
          "TypeScript"
        ],
        "commits": 10,
        "period": "20.10 – 24.10",
        "url": "https://github.com/meeymirita/prisma-lab"
      },
      {
        "name": "centrifugo-lab",
        "summary": "Realtime с нуля. Пока план (centrifugo_lab_plan_v4.md) и страница.",
        "stack": [
          "Centrifugo",
          "WebSocket"
        ],
        "commits": 6,
        "period": "08.10 – 17.10",
        "url": "https://github.com/meeymirita/centrifugo-lab"
      }
    ]
  },
  {
    "title": "Лабы: frontend",
    "repos": [
      {
        "name": "js-lab",
        "summary": "Чистый JS, проект Vanilla Helpdesk. Вычитана 24.09.",
        "stack": [
          "JavaScript"
        ],
        "commits": 33,
        "period": "20.09 – 26.10",
        "url": "https://github.com/meeymirita/js-lab"
      },
      {
        "name": "typescript-lab",
        "summary": "Проект Warehouse. Вычитана 24.09.",
        "stack": [
          "TypeScript"
        ],
        "commits": 42,
        "period": "13.09 – 24.10",
        "url": "https://github.com/meeymirita/typescript-lab"
      },
      {
        "name": "vue-lab",
        "summary": "Проект Helpdesk. Вычитана 24.09 (сессии 1–5).",
        "stack": [
          "Vue"
        ],
        "commits": 47,
        "period": "13.09 – 24.10",
        "url": "https://github.com/meeymirita/vue-lab"
      },
      {
        "name": "nuxt-lab",
        "summary": "Проект Help Center. Вычитана 26.09.",
        "stack": [
          "Nuxt"
        ],
        "commits": 30,
        "period": "26.09 – 26.10",
        "url": "https://github.com/meeymirita/nuxt-lab"
      },
      {
        "name": "angular-lab",
        "summary": "Проект RoomBook, 10 сессий. Сессия 7 про SSR переписана.",
        "stack": [
          "Angular",
          "SSR"
        ],
        "commits": 32,
        "period": "26.09 – 26.10",
        "url": "https://github.com/meeymirita/angular-lab"
      },
      {
        "name": "css-lab",
        "summary": "Проект FrontFest. Вычитана 30.09.",
        "stack": [
          "CSS"
        ],
        "commits": 27,
        "period": "30.09 – 26.10",
        "url": "https://github.com/meeymirita/css-lab"
      },
      {
        "name": "tailwind-lab",
        "summary": "Проект Pulse. Вычитана 30.09, расширена 22.10.",
        "stack": [
          "Tailwind"
        ],
        "commits": 31,
        "period": "30.09 – 26.10",
        "url": "https://github.com/meeymirita/tailwind-lab"
      }
    ]
  },
  {
    "title": "Лабы: DevOps",
    "repos": [
      {
        "name": "bash-lab",
        "summary": "Shell и Bash с нуля, проект CoffeeOps: скрипты обслуживания, бэкап, деплой с откатом. ~28 ч.",
        "stack": [
          "Bash",
          "Docker"
        ],
        "commits": 8,
        "period": "11.10 – 17.10",
        "url": "https://github.com/meeymirita/bash-lab"
      },
      {
        "name": "docker-lab",
        "summary": "От «что такое контейнер» до registry и CI. Проект CoffeeShop: nginx, Node.js API, Postgres.",
        "stack": [
          "Docker",
          "Compose"
        ],
        "commits": 34,
        "period": "18.09 – 20.10",
        "url": "https://github.com/meeymirita/docker-lab"
      },
      {
        "name": "traefik-lab",
        "summary": "Reverse proxy, service discovery, TLS. Переписана 18.10: 11 сессий, 69 шагов, ~43 ч.",
        "stack": [
          "Traefik",
          "TLS"
        ],
        "commits": 38,
        "period": "11.09 – 26.10",
        "url": "https://github.com/meeymirita/traefik-lab"
      },
      {
        "name": "caddy-lab",
        "summary": "Веб-сервер и reverse proxy с авто-HTTPS. Проверена запуском 05.10, 31 находка исправлена.",
        "stack": [
          "Caddy",
          "HTTPS"
        ],
        "commits": 20,
        "period": "05.10 – 26.10",
        "url": "https://github.com/meeymirita/caddy-lab"
      },
      {
        "name": "kubernetes-lab",
        "summary": "Kubernetes и Helm с нуля. Из 3 сессий выросла в большую лабу (~50 файлов).",
        "stack": [
          "Kubernetes",
          "Helm"
        ],
        "commits": 33,
        "period": "22.09 – 26.10",
        "url": "https://github.com/meeymirita/kubernetes-lab"
      }
    ]
  },
  {
    "title": "Учебные и пробные",
    "repos": [
      {
        "name": "Hangul",
        "summary": "Ранний Vue-проект про хангыль, предшественник korean.",
        "stack": [
          "Vue",
          "Vite",
          "Playwright",
          "Vitest"
        ],
        "commits": 2,
        "period": "22.06",
        "url": "https://github.com/meeymirita/Hangul"
      },
      {
        "name": "korean (iOS)",
        "summary": "Заготовка iOS-приложения, один Initial Commit.",
        "stack": [
          "Swift",
          "Xcode"
        ],
        "commits": 1,
        "period": "17.10"
      }
    ]
  }
]
