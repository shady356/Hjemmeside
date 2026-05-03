<script setup lang="ts">
defineProps<{
  title: string
  description: string
  color: string
  foreground: string
  image: string
}>()

defineEmits<{ select: [] }>()
</script>

<template>
  <button
    class="card"
    :aria-label="`Åpne detaljer om ${title}`"
    :style="{ '--card-color': color, '--card-fg': foreground }"
    @click="$emit('select')"
  >
    <div class="card-image">
      <img :src="image" alt="" />
    </div>
    <div class="card-footer">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </button>
</template>

<style scoped>
.card {
  background-color: var(--card-color);
  border-radius: 24px;
  width: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 0;
  font-family: inherit;
}

.card:active {
  transform: scale(1.02);
}

.card:focus-visible {
  outline-offset: var(--outline-offset);
}

.card-image {
  padding: 1rem 1rem 0.25rem;
  flex: 1;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
}

.card-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 1.5rem 3rem;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--card-fg);
  margin: 0;
}

.card-description {
  font-size: 14px;
  color: var(--card-fg);
  margin: 0;
}
</style>
