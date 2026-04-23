<template>
  <div class="about">
    <h1>About Me</h1>
    <section class="bio">
        <p>
          I'm a Master's student in Software Engineering at CDU.        
          I enjoy solving problems with clean, efficient code
          and am currently focused on web development with Vue.js.      
        </p>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="edu-item">
          <h3>CDU — M.S. in Software Engineering</h3>
          <p class="period">2026 - Present</p>
        </div>
      </section>

      <section class="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: xxxx@example.com</li>
          <li>
            GitHub:
            <a href="https://github.com/zcfnc" target="_blank"> 
              github.com/zcfnc
            </a>
          </li>
        </ul>
      </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #42b883;
}

.bio p {
  line-height: 1.8;
}

.edu-item h3 {
  margin-bottom: 0.3rem;
}

.period {
  color: #888;
  font-size: 0.9rem;
}

.contact ul {
  list-style: none;
  padding: 0;
  line-height: 2;
}

.contact a {
  color: #42b883;
}
</style>
