<template>
  <div class="about">
    <div class="about">
    <header>
      <h1>Mirai Jewelry</h1>
      <p>About Us</p>
    </header>

    <section class="about-section">
      <h2>Our Story</h2>
      <p>
        Mirai Jewelry was born from a passion for timeless beauty and modern elegance.
        Founded in Angeles City, our mission is to craft pieces that celebrate life's most meaningful moments—
        from quiet triumphs to grand celebrations.
      </p>

      <h2>Craftsmanship & Values</h2>
      <p>
        Every piece is designed with care, using ethically sourced materials and a commitment to quality.
        We believe jewelry should not only adorn, but empower—reflecting the strength, grace, and individuality of the wearer.
      </p>

      <h2>Why "Mirai"?</h2>
      <p>
        “Mirai” means “future” in Japanese—a name that reflects our vision to create heirlooms that endure,
        and a brand that evolves with the dreams of those who wear it.
      </p>
    </section>

    <footer>
      &copy; 2025 Mirai Jewelry · All rights reserved
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>

h1 {
  font-family: 'Italianno';
  font-size: 80px;
  text-shadow: #000 2px 2px;
}

header p {
  font-family: 'Italianno';
  font-size: 35px;
  text-shadow: #000 2px 2px;
}

h1, h2 {
  font-weight: normal;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fdf6f0;
  color: #333;
}

header {
  background: linear-gradient(to bottom right, #FFBF00, #000);
  padding: 1.5em;
  text-align: center;
  color: white;
}

.about-section {
  max-width: 800px;
  margin: auto;
  padding: 2em;
  line-height: 1.8;
  font-size: 1.1em;
}

.about-section h2 {
  margin-top: 2em;
  font-size: 1.5em;
  color: #FFBF00;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 0.9em;
}
</style>
