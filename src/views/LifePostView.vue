<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const postId = route.params.id
</script>

<template>
  <main class="post-detail">
    <button class="back" @click="router.back()">&larr; Back</button>
    <h1>Life Post #{{ postId }}</h1>
    <p class="placeholder">
      Article content goes here. You can replace this with real content later.
    </p>
  </main>
</template>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.back {
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  color: #666;
  margin-bottom: 2rem;
  transition: border-color 0.2s;
}

.back:hover {
  border-color: #42b883;
  color: #42b883;
}

.placeholder {
  margin-top: 1.5rem;
  color: #666;
  line-height: 1.8;
}
</style>
