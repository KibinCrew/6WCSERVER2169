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
    <h1>Skill</h1>
    <ul>
      <h3>Training</h3>
      <li>none</li>
      <h3>Seminars</h3>
      <li>Tailwind & Shadcn Workshop</li>
      <li>Prelim Review Session</li>
    </ul>
  </div>
</template>
