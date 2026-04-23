<template>
  <div class="about">
    <h1>About Me</h1>
    <section class="bio">
      <p>
        Master of IT student at Charles Darwin University with 6 years of software development
        experience in Python and C. Skilled in software development, cross-team collaboration,
        and automation tools development.
      </p>
    </section>

    <section class="education">
      <h2>Education</h2>
      <div class="edu-item">
        <h3>Charles Darwin University — Master of IT (Software Engineering)</h3>
        <p class="period">2026 – Present · Darwin, NT, Australia</p>
        <ul class="details">
          <li>Recipient of the Northern Territory Government Study Scholarship (2026)</li>
        </ul>
      </div>
      <div class="edu-item">
        <h3>Nanjing Xiaozhuang University — Bachelor of Computer Science</h3>
        <p class="period">2015 – 2019 · Nanjing, China</p>
        <ul class="details">
          <li>Intelligent Grading System (2nd Prize, International Software Design Competition)</li>
          <li>Professional Learning Awards</li>
          <li>Outstanding Student Cadre Awards</li>
        </ul>
      </div>
    </section>

    <section class="experience">
      <h2>Work Experience</h2>
      <div class="exp-item">
        <h3>Software Development Engineer · iSoftStone</h3>
        <p class="period">Nov 2021 – Nov 2025</p>
        <ul class="details">
          <li>Developed embedded software in C for firmware flashing and device initialization</li>
          <li>Implemented flash memory read/write/erase operations for system stability</li>
          <li>Built Python-based testing framework for chip validation across multiple devices</li>
          <li>Created data preprocessing tools to improve test efficiency and accuracy</li>
          <li>Mentored new team members</li>
        </ul>
      </div>
      <div class="exp-item">
        <h3>Big Data Engineer · Beiming Software</h3>
        <p class="period">Jun 2019 – Nov 2021</p>
        <ul class="details">
          <li>Cleaned and transformed 10M+ power line records into Neo4j graph format</li>
          <li>Implemented graph functions to model electrical network relationships</li>
          <li>Developed network impact analysis features for rapid fault assessment</li>
        </ul>
      </div>
    </section>

    <section class="community">
      <h2>Community & Volunteering</h2>
      <ul class="details">
        <li>Australian Computer Society (ACS) Student Member</li>
        <li>Volunteer at Australian Red Cross (Darwin Retail Shop) — 2026</li>
        <li>Volunteer at Kindness Shake — 2026</li>
        <li>Volunteer at Nanjing International Marathon</li>
      </ul>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: chtppt1@gmail.com</li>
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

.edu-item,
.exp-item {
  margin-bottom: 1.5rem;
}

.edu-item h3,
.exp-item h3 {
  margin-bottom: 0.3rem;
}

.period {
  color: #888;
  font-size: 0.9rem;
}

.details {
  margin-top: 0.5rem;
  padding-left: 1.2rem;
  line-height: 1.8;
  color: #555;
}

.community .details {
  list-style: none;
  padding-left: 0;
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
