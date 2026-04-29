<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>                                                                         
  <header class="navbar">
    <RouterLink to="/" class="logo">KK</RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/project">Projects</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/life">Life</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="footer">
      <p>© 2026 KK. Built with Vue.js</p>
  </footer>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  max-width: 900px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b883;
  text-decoration: none;
}

nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #42b883;
}

.footer {
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
    color: #999;
    font-size: 0.85rem;
    border-top: 1px solid #e0e0e0;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

</style>
