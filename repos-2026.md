# Репозитории за 2026 год

Составлено 2026-11-14 по локальным git-репозиториям (`~/Documents`, `~/Desktop`, `~/Downloads`). В список вошли репозитории с коммитами с 2026-01-01. Число коммитов считается по всем веткам.

Оставлено по вашему выбору: 7 самостоятельных проектов, корневой репозиторий ANITECH, 2 служебных репозитория и 26 лаб.

---

## Сайты и платформы

| Репозиторий | Коммитов в 2026 | Период | Что это |
|---|---|---|---|
| **korean** (`meeymirita/korean`, `Documents/projects/git_korean`) | 756 | 21.10 – 14.11 | Платформа «우리말» для изучения корейского: словарь, грамматика, игры, повторение по интервалам, заметки, прогресс, Telegram-напоминания и подборки слов. Frontend на Vue + TypeScript, backend на TypeScript (NestJS), Docker, CI, автодеплой. Живой сайт: korean.meeymirita.ru. Крупнейший проект года. |
| **me** (`meeymirita/me`, `Desktop/mira`, `Documents/projects/git_meeymirita`) | 58–62 | 21.10 – 06.11 | Личный сайт-портфолио (NIKITA / DEVELOPER). Vue 3, TypeScript, Vite, Pinia. Главная страница: стек, проекты, «Обо мне». Раздел про корейский вынесен в korean. Два клона одного репозитория. |
| **feedback-platform-klite** | 79 | 28.08 – 03.09 | Мини-платформа ежедневной и еженедельной отчётности сотрудников: задачи за день, недельный отчёт у руководителя. Postgres + NestJS + Vue, Docker, Caddy с авто-HTTPS. Релиз v1.0.0, одобрен заказчиком, развёрнут на VPS. |
| **dev-services-site** (`Documents/projects/my_develop_site`) | 2 | 30.09 | Статичный сайт услуг разработки (HTML/CSS/JS без сборки): главная, страница услуги, статья, дизайн-система. |
| **meeymirita** (`Documents/image/my`) | 11 из 30 | с 08.2025, в 2026 до 15.09 | Профильный README на GitHub: баннер, технологии, ссылки. В 2026 убраны сломавшиеся виджеты. |

## Обучающая платформа ANITECH PERFORMANCE

Сайт: anitech.meeymirita.ru.

**anitech-performance** (`Documents/projects/lab-laroboti`) — 430 коммитов, 11.09 – 26.10. Корневой репозиторий, который собирает все лабы подмодулями. Это обучающая платформа по Bash, Docker, Traefik, Caddy, Kubernetes, PHP, OOP, алгоритмам, RabbitMQ, Redis, Laravel, Inertia, CSS, Tailwind, JS, Vue, TypeScript, Nuxt, Angular, Express, NestJS, GraphQL, PostgreSQL, Prisma, Centrifugo. Лабы разделены на 3 группы: backend, frontend, DevOps. Каждая лаба — методичка с сессиями и сквозным проектом, вычитанная и проверенная запуском.

Служебные репозитории (подмодули):

| Репозиторий | Коммитов | Назначение |
|---|---|---|
| **works-lab** | 226 | Страницы-витрины лаб, картинки, прогресс, changelog. Подмодуль `works`. |
| **site-private** | 5 | Служебные страницы сайта, включая закрытую паролем шпаргалку владельца. |

Лабы (коммитов за 2026, статус по README):

**Backend**

| Лаба | Коммитов | Содержание |
|---|---|---|
| php-lab | 34 | Чистый PHP |
| oop-lab (`php-coffee`) | 46 | ООП, Coffee Shop API |
| algorithms-php-lab | 19 | Алгоритмы на PHP, CoffeeAlgo |
| postgresql-lab | 31 | Coffee Shop изнутри |
| redis-lab | 44 | Кэш, локи, rate limit, Streams |
| rabbitmq-lab | 46 | Transactional Outbox, воркеры, DLQ (есть код на PHP) |
| laravel-lab | 39 | TaskFlow |
| laravel-performance-lab | 19 | CoffeePerf |
| inertia-lab | 30 | Inkwell, блог-платформа, 10 сессий |
| nestjs-lab | 41 | Helpdesk API с нуля |
| graphql-lab | 40 | CineGraph |
| express-lab | 12 | Node.js с нуля и Express, 2 части |
| prisma-lab | 10 | «Наследство»: чужая база на Prisma 7 |
| centrifugo-lab | 6 | Realtime с нуля (пока план) |

**Frontend**

| Лаба | Коммитов | Содержание |
|---|---|---|
| js-lab | 33 | Vanilla Helpdesk |
| typescript-lab | 42 | Warehouse |
| vue-lab | 47 | Helpdesk |
| nuxt-lab | 30 | Help Center |
| angular-lab | 32 | RoomBook, 10 сессий |
| css-lab | 27 | FrontFest |
| tailwind-lab | 31 | Pulse |

**DevOps**

| Лаба | Коммитов | Содержание |
|---|---|---|
| bash-lab | 8 | CoffeeOps |
| docker-lab | 34 | CoffeeShop, от контейнера до CI |
| traefik-lab | 38 | 11 сессий, ~43 ч |
| caddy-lab | 20 | Reverse proxy и авто-HTTPS |
| kubernetes-lab | 33 | Kubernetes и Helm |


## Учебные и экспериментальные проекты

| Репозиторий | Коммитов | Период | Что это |
|---|---|---|---|
| **Hangul** (`Documents/Hangul`) | 2 | 22.06 | Ранний Vue-проект про хангыль (Vite, Playwright, Vitest). Предшественник korean. |
| **korean** (`Documents/projects/korean`, без remote) | 1 | 17.10 | Заготовка iOS-приложения (Swift / Xcode), один Initial Commit. |


## Не вошло

- `Downloads/ф/yii` — клон фреймворка Yii (yiisoft/yii), последние коммиты 2022 года. Не ваш проект.
- Кэши и служебные репозитории (`~/.nvm`, `~/.cache`, `~/.codex`).
- Репозитории, которые вы не отметили: lab-fixes, ansible-lab, go-start-lab, go-pro-lab, Rabbitmq-laboratornaya-, express-test, clear-php-on-docker и один рабочий.

## Итого

- **Основное в этом году:** платформа korean (756 коммитов), обучающая платформа ANITECH (430 в корне плюс сотни в лабах), отчётная платформа feedback-platform-klite.
- **Динамика:** сентябрь и октябрь — лабы и ANITECH, с 21 октября — korean и личный сайт.
- **Стек:** PHP/Laravel, TypeScript, NestJS, Vue/Nuxt, Docker, Caddy, Traefik, Postgres, Redis, RabbitMQ.
