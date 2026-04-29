<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { blogPosts } from '@/data/blogPosts'

const router = useRouter()
const selectedTag = ref<string | null>(null)

// 获取所有不重复的标签
const allTags = computed(() => {
  const tags = new Set<string>()
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
})

// 按标签筛选文章
const filteredPosts = computed(() => {
  if (!selectedTag.value) return blogPosts
  return blogPosts.filter(post => post.tags.includes(selectedTag.value!))
})

function goToPost(id: number) {
  router.push(`/blog/${id}`)
}

function toggleTag(tag: string) {
  selectedTag.value = selectedTag.value === tag ? null : tag
}
</script>

<template>
  <main class="blog">
    <h1>Tech Blog</h1>
    <p class="subtitle">{{ blogPosts.length }} articles on software development, big data, and more.</p>

    <div class="tag-filter">
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="['tag-btn', { active: selectedTag === tag }]"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <div class="post-list">
      <article
        class="post-card"
        v-for="post in filteredPosts"
        :key="post.id"
        @click="goToPost(post.id)"
      >
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <span class="date">{{ post.date }}</span>
        </div>
        <p>{{ post.summary }}</p>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
.blog {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #888;
  margin-bottom: 1.5rem;
}

.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag-btn {
  background: #f0f0f0;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.tag-btn:hover {
  border-color: #42b883;
}

.tag-btn.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
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

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.tags span {
  background: #f0f0f0;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #555;
}
</style>
