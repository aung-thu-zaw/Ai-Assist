<script setup lang="ts"></script>

<template>
  <nav
    class="w-full fixed top-0 z-50 bg-transparent flex items-center justify-between px-14 py-5 border-b border-b-accent shadow-[rgba(76,175,80,0.4)_0px_1px_8px_5px]"
  >
    <h1
      class="font-extrabold text-xl bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
    >
      <router-link :to="{ name: 'home' }"> Ai Assist </router-link>
    </h1>

    <ul class="flex items-center space-x-2 text-sm font-bold">
      <button type="button" class="hover:bg-secondary px-3 py-2 rounded-md">
        <router-link
          :to="{ name: 'text.chat' }"
          class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 space-x-2"
        >
          <i class="fa-solid fa-comment"></i>
          Text Chat
        </router-link>
      </button>

      <button type="button" class="hover:bg-secondary px-3 py-2 rounded-md">
        <router-link
          :to="{ name: 'image.chat' }"
          class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 space-x-2"
        >
          <i class="fa-solid fa-image"></i>
          Image Chat
        </router-link>
      </button>

      <button type="button" class="hover:bg-secondary px-3 py-2 rounded-md">
        <router-link
          :to="{ name: 'audio.chat' }"
          class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 space-x-2"
        >
          <i class="fa-solid fa-microphone"></i>
          Audio Chat
        </router-link>
      </button>
    </ul>
  </nav>
</template>
