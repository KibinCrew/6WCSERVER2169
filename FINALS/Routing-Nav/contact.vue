<template>
  <div class="contact">
    <header>
      <h1>Mirai Jewelry</h1>
      <p>Contact Us</p>
    </header>

    <section class="contact-section">
      <h2>We'd love to hear from you</h2>
      <form @submit.prevent="submitForm">
        <label>Name</label>
        <input type="text" v-model="name" required />

        <label>Email</label>
        <input type="email" v-model="email" required />

        <label>Message</label>
        <textarea v-model="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div class="store-info">
        <p><strong>📍 Address:</strong> 123 Elegance St, Angeles City, Philippines</p>
        <p><strong>📞 Phone:</strong> +63 912 345 6789</p>
        <p><strong>📧 Email:</strong> hello@miraijewelry.ph</p>
      </div>
    </section>

    <footer>
      &copy; 2025 Mirai Jewelry · All rights reserved
    </footer>
  </div>
</template>

<script>
export default{
  name: 'contact',
  data(){
    return {
      title: 'Contact'
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

.contact-section {
  padding: 2em;
  max-width: 600px;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
}

input, textarea {
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Segoe UI', sans-serif;
}

button {
  background-color: #FFBF00;
  color: white;
  border: none;
  padding: 0.8em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #e0a800;
}

.store-info {
  text-align: center;
  font-size: 1em;
  line-height: 1.6;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em;
  font-size: 0.9em;
}
</style>
