<script setup lang="ts">
import MessageForm from "~/components/MessageForm.vue";
import { useTextChatStore } from "~/stores/textChat";

const store = useTextChatStore();

const sendQuestion = () => {
  store.createPrompt();
  store.sendPrompt();
};
</script>

<template>
  <section class="w-full h-full pt-20">
    <div
      class="container mx-auto text-text py-8 px-14 flex flex-col md:flex-row items-start justify-between md:space-x-8 h-[780px]"
    >
      <div class="w-full md:w-4/12 h-full">
        <h1 class="text-md font-bold text-gray-300 mb-6">
          Enter the text you would like to ask questions about.
        </h1>

        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="bg-secondary border border-neutral-500 w-full rounded-md outline-none p-5 text-sm font-medium"
            placeholder="Enter text ..."
            v-model="store.analyzeText"
          ></textarea>
        </div>
      </div>
      <div class="relative w-full md:w-8/12 h-full">
        <div
          class="max-w-[800px] max-h-[590px] overflow-scroll mx-auto space-y-6 hide-scrollbar"
        >
          <div class="w-full mx-auto space-y-8">
            <div v-if="store.responseFromOpenAi.length > 0" class="space-y-1.5">
              <h1 class="text-md font-bold">You</h1>

              <p class="text-sm text-gray-200">
                {{ store.responseFromOpenAi }}
              </p>
            </div>
            <div v-else class="py-52">
              <p class="text-sm text-gray-400 font-bold text-center">
                <i class="fa-solid fa-comment mr-1.5"></i>
                There are no questions and response.
              </p>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 pb-3.5 w-full bg-background py-5 px-10">
          <MessageForm
            v-model="store.questionAboutAnalyzeText"
            :send-question="sendQuestion"
            :token-count="store.tokenLength"
          />
        </div>
      </div>
    </div>
  </section>
</template>
