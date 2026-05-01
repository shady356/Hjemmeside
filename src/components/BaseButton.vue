<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    href?: string
    to?: string
    variant?: 'primary' | 'outline'
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="base-button"
    :class="variant"
  >
    <slot />
  </a>
  <RouterLink v-else-if="to" :to="to" class="base-button" :class="variant">
    <slot />
  </RouterLink>
  <button v-else class="base-button" :class="variant">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #005bb6;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
}
.base-button.primary:hover {
  background-color: #0f4780;
}
.base-button.primary:active {
  background-color: #005bb6;
}
.base-button.outline {
  background-color: #eee;
  color: var(--secondary-text);
}
.base-button.outline:hover {
  background-color: #ddd;
}
.base-button.outline:active {
  background-color: #eee;
}
.base-button:focus-visible {
  outline: 2px solid var(--outline-color);
  outline-offset: var(--outline-offset);
}
</style>
