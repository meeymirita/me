<script setup lang="ts">
import { repoGroups } from '@/data/repos'
import SakuraPetals from '@/components/SakuraPetals.vue'

const total = repoGroups.reduce((n, g) => n + g.repos.length, 0)
</script>

<template>
  <main class="pj">
    <img class="pj-bg" src="/sakura-bg.webp" alt="">
    <div class="pj-veil"></div>
    <SakuraPetals />

    <div class="pj-wrap">
      <RouterLink class="pj-back" to="/">← На главную</RouterLink>
      <h1>Проекты</h1>
      <p class="pj-lead">Всё из моего GitHub за 2026 год: {{ total }} репозиториев.
        <a href="https://github.com/meeymirita?tab=repositories" target="_blank" rel="noopener">Открыть профиль на GitHub</a></p>

      <section v-for="g in repoGroups" :key="g.title" class="pj-group">
        <h2>{{ g.title }} <span>{{ g.repos.length }}</span></h2>
        <div class="pj-list">
          <article v-for="r in g.repos" :key="r.name" class="pj-card">
            <div class="pj-head">
              <component :is="r.url ? 'a' : 'b'" :href="r.url" target="_blank" rel="noopener" class="pj-name">{{ r.name }}</component>
              <span class="pj-meta">{{ r.commits }} коммит. · {{ r.period }}</span>
            </div>
            <p>{{ r.summary }}</p>
            <div class="pj-tags"><span v-for="s in r.stack" :key="s">{{ s }}</span></div>
            <details v-if="r.details">
              <summary>Подробнее</summary>
              <ul><li v-for="d in r.details" :key="d">{{ d }}</li></ul>
            </details>
            <a v-if="r.url" class="pj-gh" :href="r.url" target="_blank" rel="noopener">GitHub ↗</a>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.pj { position:relative; min-height:100dvh; background:#fbeef2; color:#2a1f2b; font-family:'Manrope',sans-serif; }
.pj-bg { position:fixed; inset:0; width:100%; height:100%; object-fit:cover; object-position:66% 0; }
.pj-veil { position:fixed; inset:0; background:rgba(252,238,243,.9); }
.pj-wrap { position:relative; z-index:1; max-width:960px; margin:0 auto; padding:28px 16px 56px; }
.pj-back { display:inline-block; font-size:14px; font-weight:600; color:#a43a65; }
h1 { margin:14px 0 0; font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:700; font-size:clamp(44px,10vw,76px); line-height:.95; color:#d6507f; }
.pj-lead { margin:10px 0 0; max-width:60ch; line-height:1.5; }
.pj-lead a { color:#a43a65; font-weight:600; text-decoration:underline; text-underline-offset:3px; }
h2 { margin:34px 0 12px; display:flex; align-items:center; gap:10px; font-size:13px; letter-spacing:.12em; text-transform:uppercase; color:#6b5663; }
h2 span { font-weight:500; letter-spacing:0; }
.pj-list { display:grid; grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr)); gap:12px; }
.pj-card { min-width:0; display:flex; flex-direction:column; gap:8px; padding:16px; border-radius:16px; background:rgba(255,248,250,.95); border:1px solid rgba(255,255,255,.9); box-shadow:0 .6em 1.6em -.9em rgba(120,60,100,.4); }
.pj-head { display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between; gap:2px 12px; }
.pj-name { font-size:16px; font-weight:700; overflow-wrap:anywhere; }
a.pj-name:hover { color:#d6507f; }
.pj-meta { font-size:12px; color:#6b5663; font-variant-numeric:tabular-nums; }
.pj-card p { margin:0; font-size:14px; line-height:1.45; color:#4b3946; text-wrap:pretty; }
.pj-tags { display:flex; flex-wrap:wrap; gap:5px; }
.pj-tags span { padding:2px 10px; border-radius:99px; font-size:12px; background:#f6dfe9; color:#a43a65; }
details summary { cursor:pointer; font-size:13px; font-weight:600; color:#d6507f; }
details ul { margin:8px 0 0; padding-left:18px; font-size:13.5px; line-height:1.45; }
details li { margin:3px 0; }
.pj-gh { margin-top:auto; font-size:13px; font-weight:600; color:#a43a65; }
.pj-gh:hover { color:#d6507f; }
</style>
