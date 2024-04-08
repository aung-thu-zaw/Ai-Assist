<script setup lang="ts">
// Your Code
</script>

<template>
  <form action="#" class="w-full space-y-3.5 max-w-[750px] mx-auto">
    <div
      class="bg-secondary border border-neutral-500 p-2.5 pl-5 rounded-lg text-sm font-normal w-full flex items-center"
    >
      <input
        type="text"
        class="bg-transparent outline-none w-full"
        placeholder="Write a message ..."
      />

      <button type="submit" class="bg-background w-10 h-10 text-sm rounded-md">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>

    <p class="text-xs font-medium text-gray-300">Token Length : 200</p>
  </form>
</template>
