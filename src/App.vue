<script lang="ts" setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <!-- Full Page Wrapper -->
  <div class="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 transition-colors duration-300 flex justify-center items-center p-4">
    
    <!-- Gradient Border Container -->
    <div class="relative w-full max-w-7xl p-[3px] rounded-2xl bg-gradient-to-r from-blue-500 via-orange-400 to-gray-500 dark:from-blue-800 dark:via-orange-700 dark:to-gray-600">
      
      <!-- Inner Content Wrapper (Inside the Border) -->
      <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 min-h-screen">
        <Navigation />
        <router-view />
      </div>

    </div>
    
  </div>
</template>
