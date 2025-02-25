<script setup>
import { ref } from 'vue';

// Sidebar state
const sidebarOpen = ref(true);
</script>

<template>
  <div class="flex overflow-x-hidden h-screen">
    <aside
      class="fixed top-0 left-0 min-h-screen flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300"
      :class="{ '-ml-64': !sidebarOpen }"
    >

      <nav class="flex-1 flex flex-col bg-white">
        <a href="#" class="p-2">Nav Link 1</a>
        <a href="#" class="p-2">Nav Link 2</a>
        <a href="#" class="p-2">Nav Link 3</a>
      </nav>
    </aside>

    <div class="flex-1 transition-all duration-300" :class="{'ml-64' : sidebarOpen}">
      <header class="fixed top-0 right-0 transition-all duration-300 flex items-center justify-between p-4 text-semibold text-gray-100 bg-gray-900" :class="sidebarOpen ? 'w-[calc(100%-16rem)] ml-64' : 'w-full ml-0'">
        <div class="flex items-center">
          <button class="p-1 mr-4 cursor-pointer" @click="sidebarOpen = !sidebarOpen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          Header
        </div>

        <div class="text-grey-100">
          User Profile
        </div>
      </header>

      <main class="p-4 pt-18">
        Main Content
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Add your custom styles here */
</style>
