<script setup lang="ts">
// Лепестки сакуры: у каждого свои позиция, размер, скорость и раскачивание
const petals = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 9 + Math.random() * 11,
  fall: 11 + Math.random() * 10,
  delay: -Math.random() * 21,
  sway: 3 + Math.random() * 3,
  drift: 30 + Math.random() * 60,
  hue: Math.random() < 0.35,
}))
</script>

<template>
  <div class="petals" aria-hidden="true">
    <span v-for="p in petals" :key="p.id" class="fall"
      :style="{ left: p.left + '%', animationDuration: p.fall + 's', animationDelay: p.delay + 's' }">
      <i :class="{ pale: p.hue }"
        :style="{ width: p.size + 'px', height: p.size * 0.8 + 'px', animationDuration: p.sway + 's', '--drift': p.drift + 'px' }"></i>
    </span>
  </div>
</template>

<style scoped>
.petals { position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:0; }
.fall { position:absolute; top:-30px; animation:fall linear infinite; will-change:transform; }
.fall i { display:block; border-radius:80% 0 80% 20%; background:linear-gradient(135deg,#ffb6cf,#e8588c);
  box-shadow:0 1px 8px rgba(214,80,127,.45); opacity:1; animation:sway ease-in-out infinite alternate; }
.fall i.pale { background:linear-gradient(135deg,#ffe3ee,#f28db3); }
@keyframes fall { to { transform:translateY(calc(100dvh + 60px)); } }
@keyframes sway {
  from { transform:translateX(calc(var(--drift) * -1)) rotate(-30deg); }
  to   { transform:translateX(var(--drift)) rotate(70deg) scaleX(.7); }
}
@media (prefers-reduced-motion:reduce) { .petals { display:none; } }
</style>
