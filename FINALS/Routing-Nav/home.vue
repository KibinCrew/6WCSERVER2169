<template>
  <div class="hello">
      <header>
    <h1>Mirai</h1>
    <p>Timeless Jewelry for Every Moment</p>
  </header>

  <div class="hero">
    Discover Your Sparkle
  </div>

  <section class="intro">
    <h2>Welcome to Mirai</h2>
    <p>Explore handcrafted pieces that blend elegance with modern charm. Perfect for gifts, celebrations, or everyday luxury.</p>
  </section>

  <section class="products">
    <div class="product">
      <img :src="require('@/assets/img/halo.png')" alt="Gold Ring" />
      <h3>Golden Halo Ring</h3>
      <p>₱5,499</p>
    </div>
    <div class="product">
      <img :src="require('@/assets/img/pearl.png')" alt="Pearl Necklace" />
      <h3>Classic Pearl Necklace</h3>
      <p>₱7,299</p>
    </div>
    <div class="product">
      <img :src="require('@/assets/img/bracelet.png')" alt="Diamond Bracelet" />
      <h3>Diamond Elegance Bracelet</h3>
      <p>₱9,999</p>
    </div>
  </section>

  <footer>
    &copy; 2025 Mirai Jewelry · All rights reserved
  </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: 'Italianno';font-size: 80px;
  text-shadow: #000 2px 2px;
}

header p{
  font-family: 'Italianno';font-size: 35px;
  text-shadow: #000 2px 2px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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

    .hero {
      background-image: url('https://example.com/jewelry-hero.jpg'); /* Replace with actual image URL */
      background-size: cover;
      background-position: center;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2em;
      font-weight: bold;
      text-shadow: 1px 1px 5px #000;
    }

    .intro {
      padding: 2em;
      text-align: center;
    }

    .products {
      display: flex;
      justify-content: center;
      gap: 2em;
      padding: 2em;
    }

    .product {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,50);
      padding: 1em;
      width: 200px;
      text-align: center;
    }

    .product img {
      width: 100%;
      border-radius: 4px;
    }

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1em;
      font-size: 0.9em;
    }


</style>
