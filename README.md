<p align="center">
  <img src="public/Vue.png" alt="Vue.js" width="480">
</p>

# Магия воспоминаний

Главная страница: меню, цитаты и счётчик дней с 1 июня. Раздел для изучения корейского вынесен в отдельный
проект — [github.com/meeymirita/korean](https://github.com/meeymirita/korean), сайт `korean.meeymirita.ru`.

## Стек

Vue 3 (`<script setup>`), TypeScript, Vite, Pinia (меню и цитаты), Vue Router.

## Запуск

```sh
npm install
npm run dev
npm run build
```

## Как менять содержимое

- **Пункты меню** — `src/data/menu.ts`: `to` — внутренний адрес, `href` — внешняя ссылка в новой вкладке.
- **Дата отсчёта дней** — константа `START` в `src/components/DaysCounter.vue`.
- **Цитаты** — `src/data/quotes.ts`; автопереключение — `AUTOPLAY` и `INTERVAL` (секунды) в `src/components/QuoteBlock.vue`.

Сайт — одностраничное приложение, поэтому на хостинге все адреса должны отдавать `index.html`.

## Контакты

По всем вопросам — Telegram [@meeymirita](https://t.me/meeymirita).
