<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

      <h1>Name:</h1>
      <h2>Marius Kevin D. Galang</h2>
  
  <div class="section">
    <h2>Objectives:</h2>
    <ul>
      <li>Enhance skill in Web Development</li>
      <li>Get Hands-on Experiece</li>
    </ul>

    <h2>Course</h2>
    <p>BSIT Web Development</p>
 
    <h2>Specialization</h2>
    <ul>
      <li>Web Development</li>
      <li>Front End</li>
      <li>Back End</li>
    </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    .section {
      margin-bottom: 30px;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    .contact a {
      color: #2980b9;
      text-decoration: none;
    }
</style>
