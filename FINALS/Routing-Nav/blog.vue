<template>
  <div class="blog">
      <header>
    <h1>Mirai Jewelry</h1>
    <p>Elegant. Timeless. Yours.</p>
  </header>

  <section class="gallery">
    <div class="gallery-item">
      <img :src="require('@/assets/img/gold.jpg')" alt="Gold Ring" />
      <div class="caption">Golden Halo Ring</div>
    </div>
    <div class="gallery-item">
      <img :src="require('@/assets/img/pearl2.png')" alt="Pearl Necklace" />
      <div class="caption">Classic Pearl Necklace</div>
    </div>
    <div class="gallery-item">
      <img :src="require('@/assets/img/dia2.png')" alt="Diamond Bracelet" />
      <div class="caption">Diamond Elegance Bracelet</div>
    </div>
    <div class="gallery-item">
      <img :src="require('@/assets/img/emerald.png')" alt="Emerald Drop Earrings" />
      <div class="caption">Emerald Drop Earrings</div>
    </div>
  </section>

  <footer>
    &copy; 2025 Mirai Jewelry · All rights reserved
  </footer>
  </div>
</template>

<script>
export default{
  name: 'blog',
  data(){
    return {
      title: 'Blog'
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

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  padding: 2em;
}

.gallery-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-item img {
  width: 100%;
  border-radius: 4px;
}

.caption {
  padding: 1em;
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 0.9em;
}
</style>
