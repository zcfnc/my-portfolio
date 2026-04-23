<script setup lang="ts">
import { ref } from 'vue'

// 定义项目数据，ref() 让它成为响应式的
const projects = ref([
  {
    name: 'My Portfolio',
    description: 'A personal portfolio website built with Vue 3 and TypeScript.',
    tech: ['Vue.js', 'TypeScript'],
    link: 'https://github.com/zcfnc/my-portfolio',
  },
  {
    name: 'myself_OCR',
    description: 'Automatic exam paper grading system .',
    tech: ['Python', 'CNN'],
    link: 'https://github.com/zcfnc/myselfOCR',
  },
])
</script>

<template>
  <main class="projects">
    <h1>Projects</h1>

    <!-- v-for: 遍历 projects 数组，为每个项目渲染一张卡片 -->        
    <div class="project-grid">
      <div class="project-card" v-for="project in projects"
:key="project.name">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <div class="tech-tags">
          <span v-for="t in project.tech" :key="t">{{ t }}</span>     
        </div>
        <!-- :href 是 v-bind:href 的缩写，动态绑定链接 -->
        <a :href="project.link" target="_blank">View on GitHub →</a>  
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

.project-grid {
  display: grid;
  gap: 1.5rem;
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.project-card h2 {
  margin-bottom: 0.5rem;
  color: #42b883;
}

.project-card p {
  color: #666;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tags span {
  background: #f0f0f0;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.project-card a {
  color: #42b883;
  font-weight: 500;
}
</style>