# Контекст проекта для Claude

Личный сайт «Магия воспоминаний» (тема «Провожающая в последний путь Фрирен») — только главная страница.
Репозиторий: `github.com/meeymirita/me`, ветка `main`, путь `/Users/mira/Documents/projects/git_meeymirita`.
Общение с владельцем — по-русски; он пишет о себе в мужском роде, но пол его не угадывай, избегай родовых форм о нём.

**Корейский раздел и игра вынесены** в отдельный проект `github.com/meeymirita/korean`
(`/Users/mira/Documents/projects/git_korean`, сайт `https://korean.meeymirita.ru`). Здесь их больше нет;
в меню (группа «IT») две внешние ссылки: «Обучающая платформа» (`anitech.meeymirita.ru`) и «Корейский».

## Решения владельца

Меню главной = список с группами слева (без пункта «Главная»), цитаты справа шириной 500px.

## Стек и структура

Vue 3, TypeScript, Vite 8 (rolldown, esbuild нет), Pinia, Vue Router. Скрипты: `npm run dev`, `npm run build`
(type-check + сборка). Алиас `@/` → `src/`. Шрифты самохостятся (`src/assets/fonts.css`).

`src/views/HomeView.vue` — единственная страница; `src/components/` — SideBar, SideMenu, DaysCounter (дней с
1 июня 2026), QuoteBlock, QuoteDots, ContactBar; `src/data/menu.ts`, `quotes.ts`; `src/stores/menu.ts`, `quotes.ts`.
Раскладка: левая колонка `.left-col` идёт в потоке, цитата справа абсолютно; ниже 960 px всё в одну колонку.

## Хостинг

Сервер Ubuntu, проект в `/var/sites/meeymirita_start_page`, `https://meeymirita.ru`, Caddy отдаёт `dist` с
`try_files {path} /index.html`. Обновление: `git pull` → `npm run build`. Доступа к серверу у меня нет, команды
даём владельцу текстом, короткими строками. Блок `handle /api/*` и служба `progress` здесь больше не нужны —
сервер прогресса переехал в проект korean.

## Работа с git

Коммиты и пуш — только когда просят, отдельными коммитами по каждому действию, сообщения на английском в
повелительном наклонении, в конце `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. Перед пушем каждый
коммит проверять сборкой во временном `git worktree` (симлинк на `node_modules`, `vue-tsc --build`, `vite build`).
