<script setup lang="ts">
import logo from "~/assets/images/logo.png";
</script>

<template>
  <section class="h-auto p-20 pt-44">
    <div class="flex flex-col items-center justify-center w-full mb-10">
      <div class="mb-5">
        <img :src="logo" alt="Logo" class="h-40 object-contain" />
      </div>
      <h1 class="text-3xl font-bold text-text mb-4">Welcome to AI Assist</h1>
      <p class="text-sm text-gray-400">
        Ask questions about written text, images, or spoken language with audio.
      </p>
    </div>

    <div class="flex items-center justify-center">
      <ul
        class="space-y-8 flex flex-col items-center justify-center text-md text-text font-semibold w-[450px]"
      >
        <li class="w-full">
          <button
            type="button"
            class="w-full border px-10 py-3 rounded-md hover:scale-110 duration-150 transition-all"
          >
            <router-link :to="{ name: 'text.chat' }">
              <i class="fa-solid fa-comment mr-1.5"></i>
              I want to ask questions about written text
            </router-link>
          </button>
        </li>

        <li class="w-full">
          <button
            type="button"
            class="w-full border px-10 py-3 rounded-md hover:scale-110 duration-150 transition-all"
          >
            <router-link :to="{ name: 'image.chat' }">
              <i class="fa-solid fa-image mr-1.5"></i>
              I want to ask questions about an image
            </router-link>
          </button>
        </li>

        <li class="w-full">
          <button
            type="button"
            class="w-full border px-10 py-3 rounded-md hover:scale-110 duration-150 transition-all"
          >
            <router-link :to="{ name: 'audio.chat' }">
              <i class="fa-solid fa-microphone mr-1.5"></i>
              I want to ask questions about spoken language
            </router-link>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
