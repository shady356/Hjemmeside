<script setup lang="ts">
const colors: { name: string; hex: string; border?: string }[] = [
  { name: 'Tekst Primær', hex: '#26272C', border: '#ddd' },
  { name: 'Tekst Sekundær', hex: '#3F455E' },
  { name: 'Border', hex: '#CCCCCC' },
  { name: 'Premier League', hex: '#3D195B' },
  { name: 'Premier League Soft', hex: '#F3E5FF', border: '#e0d5ec' },
  { name: 'Grå 100', hex: '#FFFFFF', border: '#ddd' },
  { name: 'Grå 200', hex: '#F2F2F2', border: '#ddd' },
  { name: 'Grå 300', hex: '#E5E5E5' },
  { name: 'Grå 400', hex: '#CCCCCC' },
  { name: 'Kamper', hex: '#0F49FC' },
  { name: 'Kamper Lys', hex: '#7EFDFF' },
  { name: 'Spillere', hex: '#04F9A5' },
  { name: 'Spillere Lys', hex: '#81FFD4' },
  { name: 'FDR 1', hex: '#375523' },
  { name: 'FDR 2', hex: '#04F9A5' },
  { name: 'FDR 3', hex: '#CCCCCC' },
  { name: 'FDR 4', hex: '#EE5B80' },
  { name: 'FDR 5', hex: '#80072D' },
]
</script>

<template>
  <div class="color-grid">
    <div v-for="color in colors" :key="color.name" class="color-swatch">
      <div
        class="swatch-dot"
        :style="{
          background: color.hex,
          border: color.border ? `1px solid ${color.border}` : undefined,
        }"
      ></div>
      <div>
        <p class="swatch-name">{{ color.name }}</p>
        <p class="swatch-hex">{{ color.hex }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.color-swatch {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.swatch-dot {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
}

.swatch-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: #26272c;
  margin: 0;
}

.swatch-hex {
  font-size: 0.72rem;
  color: #3f455e;
  margin: 0;
  font-family: monospace;
}

@media (max-width: 600px) {
  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
