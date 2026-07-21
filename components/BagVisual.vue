<template>
  <svg class="bag" :style="{ width: `min(${size}px, 72vw)` }" viewBox="0 0 300 400" role="img" aria-label="Presentación de Popipet Ecoarena, saco de 10 kilos">
    <defs>
      <linearGradient :id="`bagG-${uid}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1B4A32"/><stop offset="1" stop-color="#0E2A1C"/>
      </linearGradient>
      <linearGradient :id="`woodG-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#C9A97E"/><stop offset="1" stop-color="#8A6742"/>
      </linearGradient>
    </defs>
    <path d="M42 62 Q42 34 70 34 L230 34 Q258 34 258 62 L260 348 Q260 376 230 376 L70 376 Q40 376 40 348 Z" :fill="`url(#bagG-${uid})`"/>
    <path d="M42 62 Q42 34 70 34 L230 34 Q258 34 258 62 L258 78 L42 78 Z" fill="#0A2015"/>
    <rect x="60" y="100" width="180" height="140" rx="10" fill="#FFFFFF"/>
    <g transform="translate(150 146)">
      <path d="M-15 16C-15 -3 -3 -14 15 -15c1.5 19-6 31-23 32-2.5 0-4.9-.4-7-1z" fill="#8FBF4D"/>
      <path d="M-13 16C-6 4 3 -5 12 -12" stroke="#1B4A32" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
    <text x="150" y="204" text-anchor="middle" font-family="Sora,sans-serif" font-weight="700" font-size="30" fill="#143726">Popipet</text>
    <text x="150" y="226" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="700" font-size="12" letter-spacing="7" fill="#8A6742">ECOARENA</text>
    <line x1="70" y1="262" x2="230" y2="262" stroke="#2E5A42" stroke-width="1"/>
    <text x="150" y="286" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="600" font-size="11.5" letter-spacing="2.5" fill="#A9BFB1">ARENA SANITARIA PREMIUM</text>
    <text x="150" y="304" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="600" font-size="11.5" letter-spacing="2.5" fill="#A9BFB1">100% ECOLÓGICA</text>
    <g>
      <ellipse cx="100" cy="336" rx="22" ry="8" :fill="`url(#woodG-${uid})`" transform="rotate(-10 100 336)"/>
      <ellipse cx="152" cy="343" rx="22" ry="8" :fill="`url(#woodG-${uid})`" transform="rotate(6 152 343)"/>
      <ellipse cx="202" cy="334" rx="22" ry="8" :fill="`url(#woodG-${uid})`" transform="rotate(-5 202 334)"/>
    </g>
    <text x="150" y="368" text-anchor="middle" font-family="Sora,sans-serif" font-weight="600" font-size="14" fill="#FFFFFF">10 kg</text>
  </svg>
</template>

<script setup lang="ts">
defineProps({ size: { type: Number, default: 310 } })
const uid = useId()
</script>
