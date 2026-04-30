<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Hopp til innhold</a>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  background: #fff;
  color: #333;
  font-weight: 600;
  border: 2px solid #333;
  border-radius: 4px;
  z-index: 9999;
  text-decoration: none;
  overflow: visible;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid #333;
  outline-offset: 3px;
  border-radius: 2px;
}
</style>
