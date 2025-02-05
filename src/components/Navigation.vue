<script lang="ts" setup>
import { CloudIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="border-black border p-4">
    <div
      class="mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl"
    >
      <div class="flex items-center gap-2 sm:gap-4">
        <CloudIcon class="h-8 w-8 text-pink-600" />
      </div>
      <div class="flex items-center gap-4 sm:gap-8">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/team">Team</router-link>
      </div>
    </div>
  </div>
</template>
