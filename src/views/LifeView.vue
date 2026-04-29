<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Post {
  id: number
  title: string
  date: string
  summary: string
}

const posts = ref<Post[]>([
  {
    id: 1,
    title: 'First Month in Darwin',
    date: '2026-04-18',
    summary: 'My experience settling into life in Darwin, Australia — the weather, the people, and the food.',
  },
  {
    id: 2,
    title: 'Volunteering at Red Cross',
    date: '2026-04-12',
    summary: 'What I learned from volunteering at the Australian Red Cross retail shop in Darwin.',
  },
])

function goToPost(id: number) {
  router.push(`/life/${id}`)
}
</script>

<template>
  <main class="life">
    <h1>Life Journal</h1>
    <div class="post-list">
      <article
        class="post-card"
        v-for="post in posts"
        :key="post.id"
        @click="goToPost(post.id)"
      >
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <span class="date">{{ post.date }}</span>
        </div>
        <p>{{ post.summary }}</p>
      </article>
    </div>
  </main>
</template>

<style scoped>
.life {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  border-color: #42b883;
  box-shadow: 0 2px 12px rgba(66, 184, 131, 0.15);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.8rem;
}

.post-header h2 {
  font-size: 1.15rem;
  color: #333;
}

.date {
  color: #999;
  font-size: 0.85rem;
  white-space: nowrap;
  margin-left: 1rem;
}

.post-card p {
  color: #666;
  line-height: 1.6;
}
</style>
