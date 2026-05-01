<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExitIcon from './icons/ExitIcon.vue'
import ArrowRight from './icons/ArrowRight.vue'
import BaseButton from './BaseButton.vue'
import BaseBadge from './BaseBadge.vue'
import BaseButtonIcon from './BaseButtonIcon.vue'
import BookIcon from './icons/BookIcon.vue'
import MobileIcon from './icons/MobileIcon.vue'
import MusicIcon from './icons/MusicIcon.vue'

const iconMap = { book: BookIcon, mobile: MobileIcon, music: MusicIcon }

defineProps<{
  title: string
  description: string
  image: string
  color: string
  githubUrl?: string
  websiteUrl?: string
  to?: string
  primaryLabel?: string
  badge?: string
  badgeIcon?: 'book' | 'mobile' | 'music'
}>()

const emit = defineEmits<{ close: [] }>()

const dialogRef = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogRef.value?.showModal()
})

function close() {
  dialogRef.value?.close()
}
</script>

<template>
  <dialog ref="dialogRef" @close="emit('close')" @click="close">
    <div class="dialog-content" @click.stop>
      <BaseButtonIcon class="close-button" @click="close" title="Lukk" aria-label="Lukk dialog">
        <ExitIcon />
      </BaseButtonIcon>
      <div class="dialog-image-wrapper" :style="{ background: color }">
        <BaseBadge v-if="badge" class="dialog-badge">
          <template v-if="badgeIcon" #icon>
            <component :is="iconMap[badgeIcon]" />
          </template>
          {{ badge }}
        </BaseBadge>
        <img :src="image" :alt="title" class="dialog-image" />
      </div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="links">
        <BaseButton v-if="githubUrl" :href="githubUrl" variant="outline">Se på GitHub</BaseButton>
        <BaseButton v-if="to" :to="to" :icon="ArrowRight">{{ primaryLabel || 'Les mer' }}</BaseButton>
        <BaseButton v-else-if="websiteUrl" :href="websiteUrl" :icon="ArrowRight">{{ primaryLabel || 'Besøk nettside' }}</BaseButton>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

dialog[open] {
  animation: dialog-enter 0.2s ease-out;
}

.dialog-content {
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #fff;
  width: 500px;
  max-width: 100vw;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  dialog {
    margin: auto auto 0;
    width: 100%;
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  .dialog-content {
    width: 100%;
    max-height: 70vh;
    overflow-y: auto;
    border-radius: 20px 20px 0 0;
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}

.dialog-image-wrapper {
  position: relative;
  margin: -2rem -2rem 1.75rem;
  padding: 1.5rem;
  border-radius: 20px;
}

.dialog-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

h2 {
  font-size: 1.25rem;
  margin: 0 0 0.4rem;
  padding-right: 2rem;
  color: #222;
}

p {
  margin: 0 0 1.75rem;
  color: var(--primary-text);
  line-height: 1.6;
}

.dialog-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  display: block;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
</style>
