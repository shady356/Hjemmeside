<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'inverted'
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <span class="badge" :class="variant">
    <span v-if="$slots.icon" class="badge-icon">
      <slot name="icon" />
    </span>
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}

.badge.default {
  background: #ffffffaa;
  color: var(--primary-text);
}

.badge-icon {
  display: inline-flex;
  align-items: center;
  line-height: 0;
  width: 18px;
  height: 18px;
}
</style>
