<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogPosts } from '@/data/blogPosts'

const route = useRoute()
const router = useRouter()

const post = computed(() => {
  const id = Number(route.params.id)
  return blogPosts.find(p => p.id === id)
})
</script>

<template>
  <main class="post-detail">
    <button class="back" @click="router.push('/blog')">&larr; Back to Blog</button>

    <template v-if="post">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <span class="date">{{ post.date }}</span>
        <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>
      <div class="content" v-html="renderMarkdown(post.content)"></div>
    </template>

    <div v-else class="not-found">
      <h1>Post Not Found</h1>
      <p>The article you're looking for doesn't exist.</p>
    </div>
  </main>
</template>

<script lang="ts">
// 简单的 Markdown 渲染（不依赖外部库）
function renderMarkdown(text: string): string {
  let html = text
    // 代码块
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // 行内代码
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 表格
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.every(c => /^[\s-:]+$/.test(c))) return '<!--separator-->'
      const tag = 'td'
      return '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>'
    })
    // 标题
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // 粗体和斜体
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // 列表
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    // 段落
    .replace(/\n\n/g, '</p><p>')
    // 移除表格分隔行
    .replace(/<!--separator-->/g, '')

  // 包裹表格行
  html = html.replace(/(<tr>[\s\S]*?<\/tr>[\s]*)+/g, '<table>$&</table>')

  return '<p>' + html + '</p>'
}

export default {
  methods: { renderMarkdown }
}
</script>

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

h1 {
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.meta .date {
  color: #888;
  font-size: 0.9rem;
}

.meta .tag {
  background: #42b883;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
  color: #888;
}

.content :deep(h1) { font-size: 1.5rem; margin: 2rem 0 1rem; }
.content :deep(h2) { font-size: 1.3rem; margin: 1.8rem 0 0.8rem; color: #42b883; }
.content :deep(h3) { font-size: 1.1rem; margin: 1.5rem 0 0.6rem; }
.content :deep(h4) { font-size: 1rem; margin: 1.2rem 0 0.5rem; }

.content :deep(p) {
  line-height: 1.8;
  margin-bottom: 0.8rem;
  color: #444;
}

.content :deep(pre) {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
}

.content :deep(code) {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
}

.content :deep(:not(pre) > code) {
  background: #f0f0f0;
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-size: 0.85rem;
}

.content :deep(li) {
  line-height: 1.8;
  margin-left: 1.5rem;
  color: #444;
}

.content :deep(strong) {
  color: #333;
}

.content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

.content :deep(td) {
  border: 1px solid #e0e0e0;
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
}

.content :deep(tr:first-child td) {
  background: #f6f8fa;
  font-weight: 600;
}
</style>
