<template>
  <main class="home">
    <section class="hero">
        <h1>Hi, I'm <span class="name">KK</span></h1>
        <p class="tagline">Software Engineering Master's Student In CDU</p>
        <p class="intro">
          Passionate about building elegant web applications
          and exploring modern frontend technologies.
        </p>
      </section>

      <section class="skills">
        <h2>Tech Stack</h2>
        <ul class="skill-list">
          <li>Vue.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>GraphDB</li>
          <li>Git</li>
          <li>Linux Shell</li>
        </ul>
      </section>
  </main>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0 2rem;
}

.name {
  color: #42b883;
}

.tagline {
  font-size: 1.2rem;
  color: #888;
  margin-top: 0.5rem;
}

.intro {
  margin-top: 1.5rem;
  line-height: 1.8;
}

.skills h2 {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
}

.skill-list li {
  background: #42b883;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>
