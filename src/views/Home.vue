<script lang="ts" setup>
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";
</script>

<template>
  <div class="scroll-smooth">
    <!-- Dashboard Section -->
    <section id="dashboard" class="min-h-screen flex flex-col justify-center items-center">
      <Dashboard />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="min-h-screen flex flex-col justify-center items-center">
      <Projects />
    </section>

    <!-- Team Section -->
    <section id="team" class="min-h-screen flex flex-col justify-center items-center">
      <Team />
    </section>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
