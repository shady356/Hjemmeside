<script setup lang="ts">
import { ref, onMounted, type Component } from 'vue'
import type { BadgeIcon, Project } from '@/types'
import ExitIcon from './icons/ExitIcon.vue'
import ArrowRight from './icons/ArrowRight.vue'
import BaseButton from './BaseButton.vue'
import BaseBadge from './BaseBadge.vue'
import BaseButtonIcon from './BaseButtonIcon.vue'
import BookIcon from './icons/BookIcon.vue'
import MobileIcon from './icons/MobileIcon.vue'
import MusicIcon from './icons/MusicIcon.vue'

const iconMap: Record<BadgeIcon, Component> = { book: BookIcon, mobile: MobileIcon, music: MusicIcon }

defineProps<{ project: Project }>()

const emit = defineEmits<{ close: [] }>()

const dialogRef = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogRef.value?.showModal()
})

function close() {
  const dialog = dialogRef.value
  if (!dialog) return
  dialog.classList.add('is-closing')
  dialog.addEventListener(
    'animationend',
    () => {
      dialog.classList.remove('is-closing')
      dialog.close()
    },
    { once: true },
  )
}
</script>

<template>
  <dialog ref="dialogRef" @close="emit('close')" @click="close">
    <div class="dialog-content" @click.stop>
      <BaseButtonIcon class="close-button" @click="close" title="Lukk" aria-label="Lukk dialog">
        <ExitIcon />
      </BaseButtonIcon>
      <div class="dialog-image-wrapper" :style="{ background: project.color }">
        <BaseBadge v-if="project.badge" class="dialog-badge">
          <template v-if="project.badgeIcon" #icon>
            <component :is="iconMap[project.badgeIcon]" />
          </template>
          {{ project.badge }}
        </BaseBadge>
        <img :src="project.image" alt="" class="dialog-image" />
      </div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.longDescription }}</p>
      <div class="links">
        <BaseButton v-if="project.githubUrl" :href="project.githubUrl" :icon="ArrowRight" variant="outline"
          >GitHub</BaseButton
        >
        <BaseButton v-if="project.dialogTo" :to="project.dialogTo" :icon="ArrowRight">{{
          project.primaryLabel || 'Les mer'
        }}</BaseButton>
        <BaseButton v-else-if="project.websiteUrl" :href="project.websiteUrl" :icon="ArrowRight">{{
          project.primaryLabel || 'Gå til nettside'
        }}</BaseButton>
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
  animation: backdrop-in 0.25s ease-out;
}

dialog[open] {
  animation: dialog-in 0.25s ease-out;
}

dialog.is-closing {
  animation: dialog-out 0.2s ease-in forwards;
}

dialog.is-closing::backdrop {
  animation: backdrop-out 0.2s ease-in forwards;
}

@keyframes dialog-in {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes dialog-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.97);
  }
}

@keyframes backdrop-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes backdrop-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
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
  dialog[open] {
    animation: dialog-slide-up 0.3s ease-out;
  }
  dialog.is-closing {
    animation: dialog-slide-down 0.25s ease-in forwards;
  }
  .links {
    flex-direction: column-reverse;
    align-items: stretch;
  }
}

@keyframes dialog-slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes dialog-slide-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
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
