<script setup lang="ts">
import { ref } from "vue";

interface Props {
  modelValue: String;
  sendQuestion: () => void;
  tokenCount: Number;
}

const props = defineProps<Props>();

const emits = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

const onInput = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  emits("update:modelValue", newValue);
  inputValue.value = newValue;
};
</script>

<template>
  <form
    @submit.prevent="sendQuestion"
    class="w-full space-y-3.5 max-w-[750px] mx-auto"
  >
    <div
      class="bg-secondary border border-neutral-500 p-2.5 pl-5 rounded-lg text-sm font-normal w-full flex items-center"
    >
      <input
        type="text"
        class="bg-transparent outline-none w-full"
        placeholder="Write a message ..."
        :value="inputValue"
        @input="onInput"
      />

      <button
        type="submit"
        class="bg-background w-10 h-10 text-sm rounded-md cursor-not-allowed"
        :class="{ 'bg-accent text-white cursor-pointer': inputValue }"
        :disabled="!inputValue"
      >
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>

    <p class="text-xs font-medium text-gray-300">
      Token Length : {{ tokenCount }}
    </p>
  </form>
</template>
