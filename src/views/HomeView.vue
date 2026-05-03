<script setup lang="ts">
import { ref, computed } from 'vue'
import Projects from '@/components/Projects.vue'

const topPhoto = ref(1)

function showNextPhoto() {
  topPhoto.value = topPhoto.value === 1 ? 2 : 1
}

const photo1Style = computed(() => ({ zIndex: topPhoto.value === 1 ? 2 : 1 }))
const photo2Style = computed(() => ({ zIndex: topPhoto.value === 2 ? 2 : 1 }))
</script>

<template>
  <main id="main-content">
    <div class="top-row">
      <section id="about" class="ingress-section">
        <h1>Jeg er Henrik, en UX-designer som også koder</h1>
        <p>
          Jeg brenner for å lage løsninger som er gjennomtenkte og gir en god brukeropplevelse for
          alle.
        </p>
      </section>
      <section class="photos">
        <button aria-label="Vis neste bilde av meg" class="photo-button" @click="showNextPhoto()">
          <img
            class="photos-1"
            :class="{ 'is-top': topPhoto === 1 }"
            :style="photo1Style"
            src="@/assets/meg1.jpg"
            alt="Bilde av meg"
          />
          <img
            class="photos-2"
            :class="{ 'is-top': topPhoto === 2 }"
            :style="photo2Style"
            src="@/assets/meg3.jpg"
            alt="Bilde av meg 2"
          />
        </button>
      </section>
    </div>
    <Projects />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
}

.top-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: 4rem 3rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .top-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.ingress-section {
  width: 100%;
  text-align: center;
}

@media (min-width: 768px) {
  .ingress-section {
    max-width: 520px;
    text-align: left;
  }
}

h1 {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.photos {
  position: relative;
  display: flex;
  flex-shrink: 0;
}

.photo-button {
  position: relative;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: min(256px, 45vw);
  aspect-ratio: 3/4;
}

.photos-1,
.photos-2 {
  aspect-ratio: 3/4;
  position: absolute;
  top: 0;
  left: 0;
  width: min(256px, 45vw);
  border-radius: 20px;
  border: 8px solid #fff;
  object-fit: cover;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.photos-1 {
  transform: rotate(-5deg) scale(1);
}

.photos-2 {
  transform: rotate(5deg) scale(1);
}

@keyframes enter-1 {
  from {
    transform: rotate(-15deg) scale(0.95);
  }
  to {
    transform: rotate(-5deg) scale(1.05);
  }
}

@keyframes enter-2 {
  from {
    transform: rotate(15deg) scale(0.95);
  }
  to {
    transform: rotate(5deg) scale(1.05);
  }
}

.photos-1.is-top {
  animation: enter-1 0.4s ease-out forwards;
}

.photos-2.is-top {
  animation: enter-2 0.4s ease-out forwards;
}
</style>
