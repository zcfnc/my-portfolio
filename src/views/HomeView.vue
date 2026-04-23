<template>
  <main class="home">
    <section class="hero">
        <h1>Hi, I'm <span class="name">KK</span></h1>
        <p class="tagline">Master of IT Student · Software Development Engineer</p>
        <p class="intro">
          6 years of software development experience in Python and C.
          Skilled in software development, cross-team collaboration, and automation tools development.
        </p>
      </section>

      <section class="skills">
        <h2>Technical Skills</h2>
        <div class="skill-group">
          <h3>Programming</h3>
          <ul class="skill-list">
            <li>Python</li>
            <li>C</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Tools & Frameworks</h3>
          <ul class="skill-list">
            <li>Git</li>
            <li>Linux</li>
            <li>Elasticsearch</li>
            <li>Graph DB</li>
            <li>PyQt</li>
            <li>Selenium</li>
            <li>FastAPI</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div class="skill-group">
          <h3>Libraries</h3>
          <ul class="skill-list">
            <li>Pandas</li>
            <li>NumPy</li>
          </ul>
        </div>
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

.skill-group {
  margin-top: 1.5rem;
}

.skill-group h3 {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
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
