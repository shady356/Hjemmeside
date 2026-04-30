<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from './ProjectCard.vue'
import ProjectDialog from './ProjectDialog.vue'
import abstractPianoArt from '@/assets/abstract_piano_art.svg'
import pokeview from '@/assets/pokeview.svg'

const router = useRouter()

const projects = [
  {
    title: 'Enkelt piano',
    description: 'Spill piano i nettlesern',
    longDescription:
      'Et enkelt piano du kan spille direkte i nettleseren. Bruk tastaturet eller klikk på tangentene for å spille.',
    color: '#E2EDD6',
    foreground: '#1C3201',
    image: abstractPianoArt,
    githubUrl: 'https://github.com/shady356/simple-piano',
    websiteUrl: 'https://shady356.github.io/simple-piano/',
    to: undefined as string | undefined,
  },
  {
    title: 'PokéView',
    description: 'Utforsk Pokémon-verdenen',
    longDescription:
      'En Pokédex-app der du kan søke og utforske alle Pokémon med informasjon hentet fra PokéAPI.',
    color: '#F6FBFF',
    foreground: '#02264A',
    image: pokeview,
    githubUrl: 'https://github.com/shady356/pokedex',
    websiteUrl: 'https://shady356.github.io/pokedex/',
    to: undefined as string | undefined,
  },
  {
    title: 'Fantasy Premier League Design',
    description: 'Et UI/UX design case for Fantasy Premier League.',
    longDescription:
      'Et UI/UX design case der jeg redesignet Fantasy Premier League-appen for å forbedre brukeropplevelsen og gjøre det mer intuitivt.',
    color: '#F3E5FF',
    foreground: '#2B0A47',
    image: pokeview,
    githubUrl: '',
    websiteUrl: undefined,
    to: '/fpl-case',
  },
]

type Project = (typeof projects)[number]

const selectedProject = ref<Project | null>(null)

function handleSelect(project: Project) {
  if (project.to) {
    router.push(project.to)
  } else {
    selectedProject.value = project
  }
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
    :website-url="selectedProject.websiteUrl || undefined"
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
