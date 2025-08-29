<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="section">
    <h1>Education</h1>
    <ul>
      <h3>Elementary</h3>
      <li>Pineda Gutuirez Elementary School (PGES)</li>
      <h3>Junior Highschool</h3>
      <li>Dominican School of Angeles City Incorporated (DSACFI)</li>
      <h3>Senior Highschool</h3>
      <li>Holy Angel University - STEM</li>
      <h>College</h>
      <li>Holy Angel University</li>
    </ul>
  </div>
</template>
