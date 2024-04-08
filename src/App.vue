<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-between min-w-full h-screen bg-background font-roboto overflow-hidden"
  >
    <Navbar />

    <div class="w-full max-h-full">
      <RouterView />
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
