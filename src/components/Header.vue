<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="home-link-name">Henrik Oddløkken</RouterLink>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: 'home', hash: '#projects' }">Prosjekter</RouterLink></li>
        <li><RouterLink :to="{ name: 'home', hash: '#contact' }">Kontakt</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #fdf8ef;
  max-width: 1024px;
  margin: 0 auto;
}

.home-link-name {
  text-decoration: none;
  color: var(--primary-text);
  font-weight: 500;
}

nav {
  display: flex;
  gap: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: var(--primary-text);
  font-weight: 500;
}
</style>
