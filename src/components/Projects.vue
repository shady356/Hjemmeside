<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
import ProjectDialog from './ProjectDialog.vue'
import abstractPianoArt from '@/assets/abstract_piano_art.svg'
import pokeview from '@/assets/pokeview.svg'
import fplEffect from '@/assets/fplEffect.svg'

interface Project {
  title: string
  description: string
  longDescription: string
  color: string
  foreground: string
  image: string
  githubUrl: string
  websiteUrl?: string
  dialogTo?: string
  primaryLabel?: string
  badge?: string
  badgeIcon?: 'book' | 'mobile' | 'music'
}

const projects: Project[] = [
  {
    title: 'Enkelt piano',
    description: 'Spill piano i nettlesern med tastaturet eller musen',
    longDescription:
      'Et enkelt piano du kan spille direkte i nettleseren. Bruk tastaturet eller klikk på tangentene for å spille.',
    color: '#E2EDD6',
    foreground: '#1C3201',
    image: abstractPianoArt,
    githubUrl: 'https://github.com/shady356/simple-piano',
    websiteUrl: 'https://shady356.github.io/simple-piano/',
    badge: 'Spiller lyd',
    badgeIcon: 'music',
  },
  {
    title: 'PokéView',
    description: 'Utforsk Pokémon i en interaktiv Pokédex-app',
    longDescription:
      'En Pokédex-app der du kan søke og utforske alle Pokémon med informasjon hentet fra PokéAPI.',
    color: '#F6FBFF',
    foreground: '#02264A',
    image: pokeview,
    githubUrl: 'https://github.com/shady356/pokedex',
    websiteUrl: 'https://shady356.github.io/pokedex/',
    badge: 'Mobile app',
    badgeIcon: 'mobile',
  },
  {
    title: 'FPL Design',
    description: 'Et UI/UX design case for Fantasy Premier League.',
    longDescription:
      'Et UI/UX design case der jeg ser på hvordan man kan forbedre Fantasy Premier League-appen for å gi en bedre brukeropplevelse.',
    color: '#fae9ff',
    foreground: '#43245d',
    image: fplEffect,
    githubUrl: '',
    dialogTo: '/fpl-case',
    primaryLabel: 'Les dette Caset',
    badge: 'Design Case',
    badgeIcon: 'book',
  },
]

const selectedProject = ref<Project | null>(null)

function handleSelect(project: Project) {
  selectedProject.value = project
}
</script>

<template>
  <section id="projects" class="projects-section">
    <h2>Mine Prosjekter</h2>
    <div class="cards-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :color="project.color"
        :foreground="project.foreground"
        :image="project.image"
        @select="handleSelect(project)"
      />
    </div>
  </section>

  <ProjectDialog
    v-if="selectedProject"
    :title="selectedProject.title"
    :description="selectedProject.longDescription"
    :image="selectedProject.image"
    :color="selectedProject.color"
    :github-url="selectedProject.githubUrl"
    :website-url="selectedProject.websiteUrl"
    :to="selectedProject.dialogTo"
    :primary-label="selectedProject.primaryLabel"
    :badge="selectedProject.badge"
    :badge-icon="selectedProject.badgeIcon"
    @close="selectedProject = null"
  />
</template>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 3rem 4rem;
  box-sizing: border-box;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

@media screen and (max-width: 768px) {
  h2 {
    margin-bottom: 2rem;
  }

  .projects-section {
    padding: 1.5rem;
    text-align: center;
  }

  .cards-grid {
    justify-content: center;
  }
}
</style>
