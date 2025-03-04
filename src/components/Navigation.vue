<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { CubeIcon as CubeOutlineIcon } from "@heroicons/vue/24/outline";
import { CubeIcon as CubeSolidIcon } from "@heroicons/vue/24/solid";
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

// Scroll-to-top visibility state
const showScrollTop = ref(false);

// Detect scrolling
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

// Attach scroll event
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Clean up event listener when component unmounts
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <!-- Left Floating Navigation -->
  <div class="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50">
    
    <!-- Dashboard Link -->
    <a href="#dashboard" class="group relative ring-1 ring-blue-300/20 dark:ring-blue-500/15 hover:ring-2 hover:ring-blue-400/30 dark:hover:ring-blue-600/25 rounded-xl bg-blue-50/60 dark:bg-blue-900/30 hover:bg-blue-100/75 dark:hover:bg-blue-800/50 p-3 w-14 h-14 flex items-center justify-center transition-all duration-300">
      <CubeOutlineIcon class="absolute h-9 w-9 text-blue-600 dark:text-blue-400 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
      <CubeSolidIcon class="absolute h-9 w-9 text-blue-700 dark:text-blue-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    </a>

    <!-- Projects Link -->
    <a href="#projects" class="group relative ring-1 ring-orange-300/20 dark:ring-orange-500/15 hover:ring-2 hover:ring-orange-400/30 dark:hover:ring-orange-600/25 rounded-xl bg-orange-50/60 dark:bg-orange-900/30 hover:bg-orange-100/75 dark:hover:bg-orange-800/50 p-3 w-14 h-14 flex items-center justify-center transition-all duration-300">
      <CubeOutlineIcon class="absolute h-9 w-9 text-orange-500 dark:text-orange-400 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
      <CubeSolidIcon class="absolute h-9 w-9 text-orange-600 dark:text-orange-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    </a>

    <!-- Team Link -->
    <a href="#team" class="group relative ring-1 ring-gray-300/20 dark:ring-gray-500/15 hover:ring-2 hover:ring-gray-400/30 dark:hover:ring-gray-600/25 rounded-xl bg-gray-50/60 dark:bg-gray-900/30 hover:bg-gray-100/75 dark:hover:bg-gray-800/50 p-3 w-14 h-14 flex items-center justify-center transition-all duration-300">
      <CubeOutlineIcon class="absolute h-9 w-9 text-gray-700 dark:text-gray-400 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
      <CubeSolidIcon class="absolute h-9 w-9 text-gray-800 dark:text-gray-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    </a>

  </div>

  <!-- Scroll-to-Top Button -->
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed animate-bounce cursor-pointer bottom-6 right-6 ring-1 ring-gray-300/20 dark:ring-gray-500/15 hover:ring-2 hover:ring-blue-400/30 dark:hover:ring-blue-600/25 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 p-3 w-12 h-12 flex items-center justify-center transition-all duration-300 z-50 shadow-lg"
  >
    <ArrowUpIcon class="h-6 w-6 text-blue-500 dark:text-blue-400" />
  </button>
</template>
