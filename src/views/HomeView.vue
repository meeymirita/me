<script setup lang="ts">
const stack = [
  ['laravel', 'Laravel'], ['php', 'PHP'], ['rabbitmq', 'RabbitMQ'], ['redis', 'Redis'],
  ['vue', 'Vue.js'], ['typescript', 'TypeScript'], ['nestjs', 'NestJS'],
]
const about = [
  ['Имя:', 'Никита / Mirita Mikami'], ['Роль:', 'PHP Developer (Laravel)'], ['Опыт:', '2 года 2 месяца'],
  ['Локация:', 'Новосибирск, РФ'], ['Формат:', 'Remote / Hybrid'],
]
const projects = [
  { t: 'Korean Platform', d: 'Учебная платформа для изучения корейского', tags: ['Nuxt', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'], cls: 'p2', href: 'https://korean.meeymirita.ru/' },
  { t: 'Обучающие материалы', d: 'Платформа с уроками и материалами для обучения IT', tags: ['HTML', 'Python', 'Shell', 'JavaScript'], cls: 'p3', href: 'https://anitech.meeymirita.ru/' },
]
</script>

<template>
  <main class="stage">
    <img class="bg" src="/sakura-bg.webp" alt="">
    <div class="veil"></div>

    <div class="layer">
      <div class="jp-l">デベロッパー</div>
      <div class="jp-r">ニキータ</div>
      <div class="stripes"></div><div class="stripes s2"></div><div class="bar-l"></div><div class="dots-l"></div><div class="lines-l"></div>

      <div class="left">
      <h1 class="title"><span class="t1">NIKITA <i>/</i></span><span class="t2">DEVELOPER</span></h1>
      <p class="lead">Backend-разработчик (Laravel) &nbsp;•&nbsp; Люблю создавать надёжные и удобные сервисы, продумывать архитектуру и превращать идеи в работающие продукты <img class="ic-s" src="/icons/heart.png" alt=""></p>
      <div class="btns"><a class="btn pink" href="https://github.com/meeymirita?tab=repositories" target="_blank" rel="noopener">Мои проекты <span>⟶</span></a>
      <a class="btn ghost" href="/resume.pdf" download="resume.pdf"><img src="/icons/download.png" alt="">Резюме (PDF)</a></div>

      <section class="card stack">
        <header><img src="/icons/code.png" alt=""><b>Мой стек</b><small>Основные технологии</small></header>
        <ul>
          <li v-for="[i, n] in stack" :key="i"><img :src="`/icons/${i}.png`" alt=""><span>{{ n }}</span></li>
        </ul>
      </section>

      <section id="projects" class="card projects">
        <header><img src="/icons/layers.png" alt=""><b>Проекты</b><em>« «</em></header>
        <div class="plist">
          <component :is="p.href ? 'a' : 'div'" v-for="p in projects" :key="p.t" :href="p.href" target="_blank" class="proj">
            <div class="thumb" :class="p.cls"></div>
            <div class="pt"><b>{{ p.t }}</b><img src="/icons/external.png" alt=""></div>
            <p>{{ p.d }}</p>
            <div class="tags"><span v-for="g in p.tags" :key="g">{{ g }}</span></div>
          </component>
        </div>
      </section>

      </div>

      <section class="card about">
        <header><img src="/icons/user.png" alt=""><b>Обо мне</b><span class="go">→</span></header>
        <dl><template v-for="[k, v] in about" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></template></dl>
      </section>

      <section class="card now">
        <header><i class="dot"></i><b>Сейчас</b></header>
        <div class="nrow"><img src="/icons/code.png" alt=""><span>Разработка проекта<br>на Laravel</span><img class="eq" src="/icons/chart.png" alt=""></div>
      </section>

      <div class="num">01</div>
    </div>
  </main>
</template>

<style>
.stage { --u:min(calc(100vw/96), calc(100vh/50)); position:relative; width:100%; height:100vh; height:100dvh; overflow:hidden;
  font-size:var(--u); background:#fbeef2; color:#2a1f2b; }
.stage .bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:16% 0%; }
.veil { position:absolute; inset:0; background:linear-gradient(90deg, rgba(252,238,243,.95) 0, rgba(252,238,243,.8) 30%, rgba(252,238,243,0) 62%); }
.layer { position:absolute; inset:0; }
.layer > * { position:absolute; }
.left { left:calc(var(--u)*8); top:calc(var(--u)*1.8); width:calc(var(--u)*37.5); display:flex; flex-direction:column; gap:calc(var(--u)*1); }
.left > * { position:static !important; width:auto; box-sizing:border-box; }
.stage img { display:block; }

.jp-l, .jp-r { writing-mode:vertical-rl; font-family:'Noto Serif JP',serif; letter-spacing:.35em; }
.jp-l { left:calc(var(--u)*2.8); top:calc(var(--u)*5); font-size:calc(var(--u)*1.3); }
.jp-r { right:calc(var(--u)*1.2); top:calc(var(--u)*3); font-size:calc(var(--u)*2.1); letter-spacing:.2em; }
.stripes { left:0; top:calc(var(--u)*19); width:calc(var(--u)*6.5); height:calc(var(--u)*13); background:repeating-linear-gradient(115deg,#241b27 0 calc(var(--u)*.22),transparent calc(var(--u)*.22) calc(var(--u)*.85)); clip-path:polygon(0 0,100% 38%,100% 100%,0 100%); }
.stripes.s2 { top:calc(var(--u)*33); height:calc(var(--u)*11); width:calc(var(--u)*4.2); opacity:.8; clip-path:polygon(0 0,100% 0,100% 100%,0 100%); background:repeating-linear-gradient(115deg,#241b27 0 calc(var(--u)*.2),transparent calc(var(--u)*.2) calc(var(--u)*.8)); }
.bar-l { left:0; top:calc(var(--u)*17.5); width:calc(var(--u)*6.5); height:calc(var(--u)*.9); background:#241b27; transform:skewY(-34deg); transform-origin:left; }
.dots-l { left:calc(var(--u)*.9); top:calc(var(--u)*45); width:calc(var(--u)*5); height:calc(var(--u)*5); background:radial-gradient(circle,#c97aa0 calc(var(--u)*.11),transparent calc(var(--u)*.13)) 0 0/calc(var(--u)*.8) calc(var(--u)*.8); opacity:.7; }
.lines-l { left:0; top:0; width:calc(var(--u)*7.5); height:100%; pointer-events:none; opacity:.55;
  background:repeating-linear-gradient(60deg,transparent 0 calc(var(--u)*3),rgba(214,80,127,.55) calc(var(--u)*3) calc(var(--u)*3.05)); }

.title { margin:0; margin:0 0 0 calc(var(--u)*-.3); font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic; line-height:.82; font-size:calc(var(--u)*6.9); letter-spacing:-.01em; }
.title span { display:block; white-space:nowrap; }
.title .t1 { color:#1b1420; } .title .t1 i { color:#d84a7c; font-size:.8em; margin-left:.25em; }
.title .t2 { color:#d6507f; margin-left:.07em; }
.lead { margin:0; max-width:calc(var(--u)*38); font-size:calc(var(--u)*1.17); line-height:1.4; }
.ic-s { display:inline; width:1.1em; height:1.1em; vertical-align:middle; }
.btns { display:flex; gap:1em; }
.btn { display:flex; align-items:center; justify-content:center; gap:.7em; height:2.8em; border-radius:2em; font-size:1em; font-weight:600; }
.btn.pink { width:12.9em; background:#d6507f; color:#fff; box-shadow:0 .5em 1.2em -.4em rgba(214,80,127,.6); }
.btn.ghost { width:11.1em; background:rgba(255,255,255,.55); border:1px solid #e3c9d4; font-weight:500; }
.btn img { width:1.1em; height:1.1em; }

.card { background:rgba(255,246,249,.84); backdrop-filter:blur(.5em); border:1px solid rgba(255,255,255,.8);
  border-radius:1.2em; box-shadow:0 1em 2.5em -1.2em rgba(180,90,130,.35); }
.card header { display:flex; align-items:center; gap:.7em; }
.card header img { width:1.6em; height:1.6em; }
.card header b { font-size:1.1em; font-weight:600; }

.stack { height:9.4em; padding:1em 1.4em; }
.stack header { padding:.2em .8em .7em; border-bottom:1px solid rgba(214,80,127,.15); margin:0 -.6em; }
.stack header small { margin-left:auto; font-size:.75em; color:#5b4856; }
.stack ul { list-style:none; margin:.7em 0 0; padding:0; display:flex; justify-content:space-between; }
.stack li { width:5.4em; text-align:center; font-size:.92em; }
.stack li img { height:2.8em; width:auto; max-width:4.4em; margin:0 auto .5em; object-fit:contain; }

.projects { height:auto !important; padding-bottom:.8em !important; height:18.9em; padding:1.1em 1.5em; background:rgba(255,246,249,.55); border-radius:1.2em 1.2em 0 0; }
.projects header em { margin-left:auto; font-style:normal; color:#d6507f; letter-spacing:.2em; margin-right:1em; }
.plist { display:flex; gap:1.1em; margin-top:1em; }
.proj { padding:.7em !important; display:block; flex:1; min-width:0; padding:.9em; border-radius:1.2em; background:rgba(255,248,250,.95); box-shadow:0 .6em 1.6em -.9em rgba(120,60,100,.4); color:inherit; }
.thumb { height:3.4em; border-radius:.8em; }
.p1 { background:linear-gradient(135deg,#d9b9e6,#f2cfe0); } .p2 { background:url(/sakura-bg.webp) 4% 12%/230% auto; } .p3 { background:url(/sakura-bg.webp) 4% 12%/230% auto; }
.pt { display:flex; justify-content:space-between; align-items:center; margin-top:.5em; } .pt b { font-size:1em; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; } .pt img { width:1em; }
.proj p { margin:.1em 0 .5em; font-size:.75em; line-height:1.3; color:#4b3946; min-height:2.7em; }
.tags span { display:inline-block; margin:0 .3em .2em 0; padding:.2em .8em; border-radius:1em; font-size:.72em; background:#f6dfe9; color:#a43a65; }

.about { right:calc(var(--u)*4); top:calc(var(--u)*1.5); width:17.8em; height:auto; padding:1em 1.1em; }
.about header { padding-bottom:.4em; } .about .go { margin-left:auto; width:1.9em; height:1.9em; border-radius:50%; background:#e0669a; color:#fff; display:grid; place-items:center; }
.about dl { display:grid; grid-template-columns:auto 1fr; gap:.45em .9em; margin:.4em 0 0; font-size:.82em; align-items:center; }
.about dt { background:#f8e6ee; padding:.25em .6em; border-radius:.5em; font-size:.85em; color:#4b3946; } .about dd { margin:0; }

.now { right:calc(var(--u)*2.5); top:auto; bottom:calc(var(--u)*1.5); width:19.5em; height:6.1em; padding:.9em 1.2em; }
.dot { width:.8em; height:.8em; border-radius:50%; background:#3ec26f; }
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

.num { right:calc(var(--u)*2); bottom:calc(var(--u)*8); font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:700; font-size:calc(var(--u)*7); font-variant-numeric:lining-nums; color:rgba(190,150,200,.5); }

@media (max-width:960px) {
  .stage { aspect-ratio:auto; font-size:16px; padding:24px 16px 32px; }
  .layer { position:relative; transform:none; display:flex; flex-direction:column; gap:16px; }
  .layer > *, .layer > .card { position:relative; left:auto; top:auto; width:auto; height:auto; }
  .jp-l, .jp-r, .stripes, .num, .pagoda { display:none; }
  .title { font-size:52px; } .plist { position:static; flex-direction:column; } .proj { width:auto; }
  .stack ul { flex-wrap:wrap; gap:12px; } .btn.pink, .btn.ghost { width:auto; padding:0 20px; align-self:flex-start; }
  .act ul { width:100%; } .stage .bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:66% 0%; }
.veil { background:rgba(252,238,243,.72); }
}
</style>
