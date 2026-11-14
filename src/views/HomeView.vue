<script setup lang="ts">
import { ref, computed } from 'vue'
import SakuraPetals from '@/components/SakuraPetals.vue'
const stack = [
  ['laravel', 'Laravel'], ['php', 'PHP'], ['rabbitmq', 'RabbitMQ'], ['redis', 'Redis'],
  ['vue', 'Vue.js'], ['typescript', 'TypeScript'], ['nestjs', 'NestJS'],
]
const tabs = [
  { t: 'Основные', items: stack },
  { t: 'Инфраструктура', items: [['cube', 'Docker'], ['globe', 'Traefik'], ['server', 'Caddy'], ['stack', 'Kubernetes'], ['database', 'PostgreSQL'], ['terminal', 'Bash']] },
  { t: 'Инструменты', items: [['git-branch', 'Git'], ['github', 'GitHub'], ['bolt', 'Vite'], ['browser', 'Playwright']] },
]
const tab = ref(0)
const shown = computed(() => tabs[tab.value]!.items)
const nextTab = () => { tab.value = (tab.value + 1) % tabs.length }

const open = ref(true)

const navLinks = [['home', 'Главная'], ['folder', 'Проекты'], ['calendar', 'Опыт'], ['grid', 'Стек'], ['user', 'Обо мне'], ['mail', 'Контакты']]
function go(sel: string) {
  const el = document.querySelector<HTMLElement>(sel)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash')
  setTimeout(() => el.classList.remove('flash'), 1400)
}

const favKey = 'fav-projects'
function loadFav(): string[] {
  try { const v = localStorage.getItem(favKey); if (v) return JSON.parse(v) } catch { /* без хранилища */ }
  return ['Korean Platform']
}
const fav = ref<string[]>(loadFav())
function toggleFav(t: string) {
  fav.value = fav.value.includes(t) ? fav.value.filter((x) => x !== t) : [...fav.value, t]
  try { localStorage.setItem(favKey, JSON.stringify(fav.value)) } catch { /* без хранилища */ }
}

const stats = [
  ['code', '2+ года', 'коммерческого опыта'], ['rocket', '10+', 'проектов'], ['database', 'Laravel / PHP', 'основная специализация'],
  ['monitor', 'Backend', 'разработка и интеграции'], ['heart', 'Изучаю', 'корейский язык'],
]
const about = [
  ['Имя:', 'Никита / Mirita Mikami'], ['Роль:', 'PHP Developer (Laravel)'], ['Опыт:', '2 года 2 месяца'],
  ['Локация:', 'Новосибирск, РФ'], ['Формат:', 'Remote / Hybrid'],
]
const projects = [
  { t: 'Korean Platform', d: 'Мягкая платформа для изучения корейского', tags: ['Nuxt', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'], ic: 'folder', cls: 'p2', href: 'https://korean.meeymirita.ru/' },
  { t: 'Обучающие материалы', d: 'Платформа с уроками и материалами для обучения IT', tags: ['HTML', 'Python', 'Shell', 'JavaScript'], ic: 'book', cls: 'p3', href: 'https://anitech.meeymirita.ru/' },
  { t: 'Feedback Platform', d: 'Платформа ежедневной и недельной отчётности сотрудников', tags: ['NestJS', 'Vue', 'PostgreSQL', 'Docker', 'Caddy'], ic: 'chart', cls: 'p3', href: 'https://github.com/meeymirita/feedback-platform-klite' },
]
</script>

<template>
  <main class="stage">
    <img class="bg" src="/sakura-bg.webp" alt="">
    <div class="veil"></div>
    <SakuraPetals />

    <header class="topnav">
      <RouterLink to="/" class="logo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="#f08bb0" stroke="#d6507f" stroke-width=".6"><ellipse cx="12" cy="6" rx="3.2" ry="4.4"/><ellipse cx="12" cy="6" rx="3.2" ry="4.4" transform="rotate(72 12 12)"/><ellipse cx="12" cy="6" rx="3.2" ry="4.4" transform="rotate(144 12 12)"/><ellipse cx="12" cy="6" rx="3.2" ry="4.4" transform="rotate(216 12 12)"/><ellipse cx="12" cy="6" rx="3.2" ry="4.4" transform="rotate(288 12 12)"/></g><circle cx="12" cy="12" r="1.8" fill="#fff3a8"/></svg>
        <span>NIKITA</span>
      </RouterLink>
      <nav class="links">
        <RouterLink to="/" class="on"><img src="/icons/home.png" alt="">Главная</RouterLink>
        <RouterLink to="/projects"><img src="/icons/folder.png" alt="">Проекты</RouterLink>
        <a href="/resume.pdf" target="_blank" rel="noopener"><img src="/icons/calendar.png" alt="">Опыт</a>
        <a href="#stack" @click.prevent="go('#stack')"><img src="/icons/grid.png" alt="">Стек</a>
        <a href="#about" @click.prevent="go('#about')"><img src="/icons/user.png" alt="">Обо мне</a>
        <a href="https://t.me/meeymirita" target="_blank" rel="noopener"><img src="/icons/mail.png" alt="">Контакты</a>
      </nav>
      <a class="btn pink contact" href="https://t.me/meeymirita" target="_blank" rel="noopener">Связаться <img src="/icons/telegram.png" alt=""></a>
    </header>

    <div class="layer">
      <div class="jp-l">デベロッパー</div>
      <div class="jp-r">ニキータ</div>
      <div class="jp-r jp-r2">ニキータ</div>
      <div class="stripes"></div><div class="stripes s2"></div><div class="bar-l"></div><div class="dots-l"></div><div class="lines-l"></div>

      <div class="left">
      <div class="badges">
        <span class="badge"><img src="/icons/code.png" alt="">Backend-разработчик</span>
        <span class="badge" :class="{ off: !open }"><i class="dot"></i>{{ open ? 'Открыт к предложениям' : 'Сейчас не ищу предложения' }}</span>
      </div>
      <h1 class="title"><span class="t1">NIKITA <i>/</i></span><span class="t2">DEVELOPER</span></h1>
      <p class="lead">Backend-разработчик (Laravel) &nbsp;•&nbsp; Люблю создавать надёжные и удобные сервисы, продумывать архитектуру и превращать идеи в работающие продукты <img class="ic-s" src="/icons/heart.png" alt=""></p>
      <div class="btns"><a class="btn pink" href="https://github.com/meeymirita?tab=repositories" target="_blank" rel="noopener">Мои проекты <span>⟶</span></a>
      <a class="btn ghost" href="/resume.pdf" download="resume.pdf"><img src="/icons/download.png" alt="">Резюме (PDF)</a>
      <a class="ibtn" href="https://github.com/meeymirita" target="_blank" rel="noopener" aria-label="GitHub"><i class="mi" style="--i:url(/icons/github.png)"></i></a>
      <a class="ibtn" href="https://t.me/meeymirita" target="_blank" rel="noopener" aria-label="Telegram"><i class="mi" style="--i:url(/icons/telegram.png)"></i></a></div>

      <section id="stack" class="card stack">
        <header><img src="/icons/code.png" alt=""><b>Мой стек</b>
          <div class="tabs"><button v-for="(t, i) in tabs" :key="t.t" type="button" :class="{ on: tab === i }" @click="tab = i">{{ t.t }}</button></div>
        </header>
        <ul>
          <li v-for="[i, n] in shown" :key="i"><img :src="`/icons/${i}.png`" alt=""><span>{{ n }}</span></li>
          <li class="more"><button type="button" @click="nextTab"><img src="/icons/plus.png" alt=""><span>Ещё</span></button></li>
        </ul>
      </section>

      <section id="projects" class="card projects">
        <header><img src="/icons/layers.png" alt=""><b>Проекты</b><RouterLink class="all" to="/projects">Все проекты <span>→</span></RouterLink></header>
        <div class="plist">
          <div v-for="p in projects" :key="p.t" class="projw">
            <a :href="p.href" target="_blank" rel="noopener" class="proj">
              <div class="thumb" :class="p.cls"><span class="tb"><img :src="`/icons/${p.ic}.png`" alt=""></span></div>
              <div class="pt"><b>{{ p.t }}</b><img src="/icons/external.png" alt=""></div>
              <p>{{ p.d }}</p>
              <div class="tags"><span v-for="g in p.tags" :key="g">{{ g }}</span></div>
            </a>
            <button type="button" class="star" :class="{ on: fav.includes(p.t) }" :aria-pressed="fav.includes(p.t)" :aria-label="`В избранное: ${p.t}`" @click="toggleFav(p.t)">
              <img :src="fav.includes(p.t) ? '/icons/star-fill.png' : '/icons/star.png'" alt="">
            </button>
          </div>
        </div>
      </section>

      </div>

      <section id="about" class="card about">
        <header><img src="/icons/user.png" alt=""><b>Обо мне</b><span class="go">···</span></header>
        <dl><template v-for="[k, v] in about" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></template></dl>
        <label class="coop"><i class="dot" :class="{ off: !open }"></i><span>Готов к сотрудничеству</span><input v-model="open" type="checkbox" class="sw" aria-label="Готов к сотрудничеству"></label>
      </section>

      <section class="card now">
        <header><i class="dot"></i><b>Сейчас</b></header>
        <div class="nrow"><img src="/icons/code.png" alt=""><span>Разработка проекта<br>на Laravel</span><img class="eq" src="/icons/chart.png" alt=""></div>
      </section>

      <div class="num">01</div>

      <footer class="stats">
        <div v-for="[i, b, t] in stats" :key="b"><img :src="`/icons/${i}.png`" alt=""><p><b>{{ b }}</b><span>{{ t }}</span></p></div>
      </footer>
    </div>
  </main>
</template>

<style>
.stage { --u:min(calc(100vw/96), calc(100vh/56)); position:relative; width:100%; height:100vh; height:100dvh; overflow:hidden;
  font-size:var(--u); background:#fbeef2; color:#2a1f2b; }
.stage .bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:16% 0%; }
.veil { position:absolute; inset:0; background:linear-gradient(90deg, rgba(252,238,243,.95) 0, rgba(252,238,243,.8) 30%, rgba(252,238,243,0) 62%); }
.layer { position:absolute; inset:0; z-index:1; }
.layer > * { position:absolute; }
.left { left:calc(var(--u)*8); bottom:calc(var(--u)*6); width:calc(var(--u)*37.5); display:flex; flex-direction:column; gap:calc(var(--u)*.8); }
.left > * { position:static !important; width:auto; box-sizing:border-box; }
.stage img { display:block; }

.jp-l, .jp-r { writing-mode:vertical-rl; font-family:'Noto Serif JP',serif; letter-spacing:.35em; }
.jp-l { left:calc(var(--u)*2.8); top:calc(var(--u)*5); font-size:calc(var(--u)*1.3); }
.jp-r { right:calc(var(--u)*1.2); top:calc(var(--u)*6); font-size:calc(var(--u)*2.1); letter-spacing:.2em; }
.jp-r2 { top:auto; bottom:calc(var(--u)*6); }
.stripes { left:0; top:calc(var(--u)*19); width:calc(var(--u)*6.5); height:calc(var(--u)*13); background:repeating-linear-gradient(115deg,#241b27 0 calc(var(--u)*.22),transparent calc(var(--u)*.22) calc(var(--u)*.85)); clip-path:polygon(0 0,100% 38%,100% 100%,0 100%); }
.stripes.s2 { top:calc(var(--u)*33); height:calc(var(--u)*11); width:calc(var(--u)*4.2); opacity:.8; clip-path:polygon(0 0,100% 0,100% 100%,0 100%); background:repeating-linear-gradient(115deg,#241b27 0 calc(var(--u)*.2),transparent calc(var(--u)*.2) calc(var(--u)*.8)); }
.bar-l { left:0; top:calc(var(--u)*17.5); width:calc(var(--u)*6.5); height:calc(var(--u)*.9); background:#241b27; transform:skewY(-34deg); transform-origin:left; }
.dots-l { left:calc(var(--u)*.9); top:calc(var(--u)*45); width:calc(var(--u)*5); height:calc(var(--u)*5); background:radial-gradient(circle,#c97aa0 calc(var(--u)*.11),transparent calc(var(--u)*.13)) 0 0/calc(var(--u)*.8) calc(var(--u)*.8); opacity:.7; }
.lines-l { left:0; top:0; width:calc(var(--u)*7.5); height:100%; pointer-events:none; opacity:.55;
  background:repeating-linear-gradient(60deg,transparent 0 calc(var(--u)*3),rgba(214,80,127,.55) calc(var(--u)*3) calc(var(--u)*3.05)); }

.title { margin:0; margin:0 0 0 calc(var(--u)*-.3); font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic; line-height:.82; font-size:calc(var(--u)*4.4); letter-spacing:-.01em; }
.title span { display:block; white-space:nowrap; }
.title .t1 { color:#1b1420; } .title .t1 i { color:#d84a7c; font-size:.8em; margin-left:.25em; }
.title .t2 { color:#d6507f; margin-left:.07em; }
.lead { margin:0; max-width:calc(var(--u)*38); font-size:calc(var(--u)*1.05); line-height:1.4; }
.ic-s { display:inline; width:1.1em; height:1.1em; vertical-align:middle; }
.btns { display:flex; align-items:center; gap:.9em; }
.ibtn { flex:none; width:2.8em; height:2.8em; border-radius:50%; display:grid; place-items:center; background:rgba(255,255,255,.7); border:1px solid #e3c9d4; box-shadow:0 .4em 1em -.5em rgba(180,90,130,.5); transition:transform .15s, border-color .15s; }
.ibtn:hover { transform:translateY(-2px); border-color:#d6507f; }
.ibtn .mi { width:1.2em; height:1.2em; background:#d6507f; -webkit-mask:var(--i) center/contain no-repeat; mask:var(--i) center/contain no-repeat; }
.btn { display:flex; align-items:center; justify-content:center; gap:.7em; height:2.8em; border-radius:2em; font-size:1em; font-weight:600; }
.btn.pink { width:12.9em; background:#d6507f; color:#fff; box-shadow:0 .5em 1.2em -.4em rgba(214,80,127,.6); }
.btn.ghost { width:11.1em; background:rgba(255,255,255,.55); border:1px solid #e3c9d4; font-weight:500; }
.btn img { width:1.1em; height:1.1em; }

.card { background:rgba(255,246,249,.84); backdrop-filter:blur(.5em); border:1px solid rgba(255,255,255,.8);
  border-radius:1.2em; box-shadow:0 1em 2.5em -1.2em rgba(180,90,130,.35); }
.card header { display:flex; align-items:center; gap:.7em; }
.card header img { width:1.6em; height:1.6em; }
.card header b { font-size:1.1em; font-weight:600; }

.stack { height:8.2em; padding:.8em 1.4em; }
.stack header { padding:.2em .8em .7em; border-bottom:1px solid rgba(214,80,127,.15); margin:0 -.6em; }
.tabs { display:flex; gap:.4em; margin-left:auto; }
.tabs button { font:inherit; font-size:.78em; padding:.35em 1em; border-radius:2em; border:0; background:transparent; color:#5b4856; cursor:pointer; }
.tabs button:hover { background:rgba(214,80,127,.1); }
.tabs button.on { background:#f6c3d6; color:#a43a65; font-weight:600; }
.stack ul { list-style:none; margin:.6em 0 0; padding:0; display:flex; }
.stack li { flex:1; min-width:0; text-align:center; font-size:.85em; }
.stack li + li { border-left:1px solid rgba(214,80,127,.14); }
.stack li img { height:2.4em; width:auto; max-width:3.6em; margin:0 auto .4em; object-fit:contain; }
.stack li.more button { font:inherit; font-size:1em; background:none; border:0; padding:0; width:100%; color:inherit; cursor:pointer; }
.stack li.more img { width:2.2em; height:2.2em; padding:.55em; border-radius:.6em; border:1px solid #e3c9d4; background:rgba(255,255,255,.6); }

.left > .projects { width:calc(var(--u)*55.4); }
.projects { height:auto !important; padding-bottom:.8em !important; height:18.9em; padding:1.1em 1.5em; background:rgba(255,246,249,.55); border-radius:1.2em 1.2em 0 0; }
.projects header .all { margin-left:auto; display:flex; align-items:center; gap:.4em; font-size:.85em; font-weight:600; color:#d6507f; white-space:nowrap; }
.projects header .all:hover { text-decoration:underline; }
.plist { display:flex; gap:1.1em; margin-top:1em; }
.projw { position:relative; flex:1; min-width:0; display:flex; }
.star { position:absolute; top:1em; right:1em; width:1.9em; height:1.9em; border-radius:50%; border:0; display:grid; place-items:center; background:rgba(255,255,255,.85); cursor:pointer; box-shadow:0 .2em .6em -.2em rgba(120,60,100,.5); }
.star img { width:1.05em; height:1.05em; }
.star:hover { transform:scale(1.1); }
.proj { padding:.7em !important; display:block; flex:1; min-width:0; padding:.9em; border-radius:1.2em; background:rgba(255,248,250,.95); box-shadow:0 .6em 1.6em -.9em rgba(120,60,100,.4); color:inherit; }
.thumb { position:relative; height:2.7em; border-radius:.8em; }
.tb { position:absolute; left:.5em; bottom:-.5em; width:1.9em; height:1.9em; border-radius:.5em; display:grid; place-items:center; background:rgba(255,255,255,.95); box-shadow:0 .2em .6em -.2em rgba(120,60,100,.5); }
.tb img { width:1.1em; height:1.1em; }
.p1 { background:linear-gradient(135deg,#d9b9e6,#f2cfe0); } .p2 { background:url(/sakura-bg.webp) 4% 12%/230% auto; } .p3 { background:url(/sakura-bg.webp) 4% 12%/230% auto; }
.pt { display:flex; justify-content:space-between; align-items:center; margin-top:.8em; } .pt b { font-size:1em; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; } .pt img { width:1em; }
.proj p { margin:.1em 0 .4em; font-size:.75em; line-height:1.3; color:#4b3946; min-height:2.7em; }
.tags span { display:inline-block; margin:0 .3em .2em 0; padding:.2em .8em; border-radius:1em; font-size:.72em; background:#f6dfe9; color:#a43a65; }

.about { right:calc(var(--u)*4); top:calc(var(--u)*4.8); width:17.8em; height:auto; padding:1em 1.1em; }
.about header { padding-bottom:.4em; } .about .go { margin-left:auto; width:1.9em; height:1.9em; border-radius:50%; border:1px solid #e3c9d4; color:#5b4856; letter-spacing:0; line-height:1; display:grid; place-items:center; }
.about dl { display:grid; grid-template-columns:auto 1fr; gap:.45em .9em; margin:.4em 0 0; font-size:.82em; align-items:center; }
.about dt { background:#f8e6ee; padding:.25em .6em; border-radius:.5em; font-size:.85em; color:#4b3946; } .about dd { margin:0; }

.now { right:calc(var(--u)*5); top:auto; bottom:calc(var(--u)*6); width:19.5em; height:6.1em; padding:.9em 1.2em; }
.dot { flex:none; width:.8em; height:.8em; border-radius:50%; background:#3ec26f; box-shadow:0 0 0 .25em rgba(62,194,111,.18); }
.dot.off { background:#b9a5b0; box-shadow:none; }
.coop { display:flex; align-items:center; gap:.6em; margin-top:.8em; padding-top:.7em; border-top:1px solid rgba(214,80,127,.15); font-size:.82em; cursor:pointer; }
.sw { appearance:none; margin:0 0 0 auto; flex:none; width:2.4em; height:1.3em; border-radius:2em; background:#d9c5cf; position:relative; cursor:pointer; transition:background .2s; }
.sw::after { content:""; position:absolute; top:.15em; left:.15em; width:1em; height:1em; border-radius:50%; background:#fff; transition:transform .2s; box-shadow:0 .1em .3em rgba(0,0,0,.25); }
.sw:checked { background:#e0669a; }
.sw:checked::after { transform:translateX(1.1em); }
.sw:focus-visible, .tabs button:focus-visible, .star:focus-visible, .links a:focus-visible, .ibtn:focus-visible { outline:2px solid #d6507f; outline-offset:2px; }
.flash { animation:flash 1.4s ease-out; }
@keyframes flash { 0%,100% { box-shadow:0 1em 2.5em -1.2em rgba(180,90,130,.35); } 25% { box-shadow:0 0 0 .35em rgba(214,80,127,.55), 0 1em 2.5em -1.2em rgba(180,90,130,.35); } }

.topnav { position:absolute; z-index:3; top:0; left:0; right:0; height:calc(var(--u)*3.6); display:flex; align-items:center; gap:1.5em; padding:0 calc(var(--u)*4) 0 calc(var(--u)*8);
  background:rgba(255,243,248,.55); backdrop-filter:blur(.7em); border-bottom:1px solid rgba(255,255,255,.7); }
.logo { display:flex; align-items:center; gap:.6em; font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:700; font-size:1.7em; color:#2a1f2b; }
.logo svg { width:1.3em; height:1.3em; }
.links { display:flex; gap:.3em; margin:0 auto; }
.links a { display:flex; align-items:center; gap:.5em; padding:.55em 1.1em; border-radius:1em; font-size:.88em; font-weight:500; border:1px solid transparent; transition:background .15s; }
.links a:hover { background:rgba(214,80,127,.1); }
.links a.on { background:rgba(240,139,176,.4); border-color:rgba(255,255,255,.7); font-weight:600; }
.links a img { width:1.2em; height:1.2em; }
.btn.pink.contact { width:auto; height:2.4em; padding:0 1.4em; font-size:.9em; }

.badges { display:flex; flex-wrap:wrap; gap:.6em; }
.badge { display:flex; align-items:center; gap:.5em; padding:.45em 1em; border-radius:2em; font-size:.82em; font-weight:500; background:rgba(255,255,255,.7); border:1px solid #ecd3de; }
.badge img { width:1.2em; height:1.2em; }

.stats { left:calc(var(--u)*5); right:calc(var(--u)*5); bottom:calc(var(--u)*1.2); height:calc(var(--u)*3.9); display:grid; grid-template-columns:repeat(5,1fr);
  background:rgba(255,246,249,.84); backdrop-filter:blur(.5em); border:1px solid rgba(255,255,255,.8); border-radius:1.4em; box-shadow:0 1em 2.5em -1.2em rgba(180,90,130,.35); }
.stats > div { display:flex; align-items:center; justify-content:center; gap:.9em; padding:0 .8em; min-width:0; }
.stats > div + div { border-left:1px solid rgba(214,80,127,.14); }
.stats img { width:1.9em; height:1.9em; }
.stats p { margin:0; display:flex; flex-direction:column; min-width:0; }
.stats b { font-size:1em; font-weight:600; white-space:nowrap; }
.stats span { font-size:.78em; color:#5b4856; white-space:nowrap; }
.nrow { display:flex; align-items:center; gap:1em; margin-top:.5em; font-size:.8em; } .nrow > img:first-child { width:2em; }
.nrow .eq { margin-left:auto; height:2.4em; width:auto; }

.player { left:72.2em; top:34.7em; width:21.6em; height:10.3em; padding:1em 1.2em; }
.pl-top { display:flex; gap:1em; } .cover { width:5.1em; height:5.1em; border-radius:.7em; background:url(/sakura-bg.webp) 3% 15%/320% auto; flex:none; }
.pl-t { flex:1; font-size:.85em; } .pl-t small { display:block; color:#6a5663; font-size:.85em; }
.bar { height:.25em; background:#f0d6e1; border-radius:1em; margin-top:1.1em; } .bar i { display:block; width:36%; height:100%; background:#e0669a; border-radius:1em; }
.tm { display:flex; justify-content:space-between; font-size:.75em; color:#6a5663; margin-top:.4em; width:70%; }
.hrt { width:1.5em; height:1.5em; }
.pl-ctl { display:flex; justify-content:space-between; align-items:center; margin:1.1em .5em 0; } .pl-ctl img { width:1.3em; }
.pl-ctl .pp { width:2.4em; height:2.4em; } .pl-ctl .pp img { width:100%; }

.act { left:52.7em; top:48.3em; width:24.2em; height:9.8em; padding:1em 1.2em; border-radius:1.2em 1.2em 0 0; }
.act ul { list-style:none; margin:.6em 0 0; padding:0; width:61%; font-size:.78em; }
.act li { display:grid; grid-template-columns:1.6em 5.5em 1fr; gap:.4em; align-items:center; padding:.55em 0; border-top:1px solid rgba(214,80,127,.13); }
.act li img { width:1.4em; } .act li span { text-align:right; font-size:.9em; }
.pagoda { position:absolute; right:1em; top:1em; width:7.2em; height:8em; border-radius:.7em; background:url(/sakura-bg.webp) 2% 5%/380% auto; opacity:.9; }

.num { right:calc(var(--u)*2); bottom:calc(var(--u)*10); font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:700; font-size:calc(var(--u)*7); font-variant-numeric:lining-nums; color:rgba(190,150,200,.5); }

@media (max-width:960px) {
  .stage { --u:16px; height:auto; min-height:100dvh; overflow:visible; font-size:16px; }
  .stage .bg, .veil { position:fixed; }
  .stage .bg { object-position:66% 0%; }
  .veil { background:rgba(252,238,243,.78); }
  .layer { position:relative; inset:auto; display:flex; flex-direction:column; gap:16px; padding:28px 16px 40px; max-width:640px; margin:0 auto; }
  .topnav { position:relative; height:auto; flex-wrap:wrap; gap:8px 12px; padding:10px 16px; font-size:16px; }
  .links { order:3; width:100%; margin:0; overflow-x:auto; padding-bottom:2px; }
  .links a { padding:.5em .8em; white-space:nowrap; }
  .layer > *, .layer > .card { position:relative; left:auto; right:auto; top:auto; bottom:auto; width:auto; height:auto; }
  .jp-l, .jp-r, .jp-r2, .stripes, .bar-l, .dots-l, .lines-l, .num { display:none; }
  .left { gap:16px; }
  .title { margin:0; font-size:clamp(44px, 15vw, 84px); }
  .lead { max-width:none; font-size:16px; }
  .btns { flex-wrap:wrap; }
  .btn.pink, .btn.ghost { width:auto; padding:0 1.6em; }
  .stack { height:auto; }
  .tabs { margin-left:0; width:100%; overflow-x:auto; }
  .stack ul { flex-wrap:wrap; justify-content:flex-start; gap:12px 8px; }
  .stack li { flex:none; width:calc(25% - 6px); min-width:64px; }
  .stack li + li { border-left:0; }
  .stack header { flex-wrap:wrap; }
  .projects { border-radius:1.2em; }
  .plist { flex-direction:column; }
  .projw { flex:none; }
  .proj { flex:1; }
  .left > .projects { width:auto; }
  .thumb { height:90px; }
  .proj p { min-height:0; font-size:13px; }
  .about dl { font-size:14px; }
  .now { height:auto; }
  .nrow { font-size:14px; }
  .about { order:2; } .now { order:3; } .stats { order:4; grid-template-columns:1fr 1fr; height:auto; padding:6px 0; }
  .stats > div { padding:10px; justify-content:flex-start; } .stats > div + div { border-left:0; }
  .stats > div { gap:10px; } .stats b, .stats span { white-space:normal; } .stats img { width:24px; height:24px; flex:none; }
}
@media (max-width:380px) {
  .stack li { width:calc(33.3% - 6px); }
  .logo { font-size:1.4em; }
}
</style>
