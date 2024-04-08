<script setup lang="ts">
import MessageForm from "~/components/MessageForm.vue";
import { useImageChatStore } from "~/stores/imageChat";

const store = useImageChatStore();

const sendQuestion = () => store.createPrompt();
</script>

<template>
  <section class="w-full h-full pt-20">
    <div
      class="container mx-auto text-text py-8 px-14 flex flex-col md:flex-row items-start justify-between md:space-x-8 h-[780px]"
    >
      <div class="w-full md:w-4/12 h-full">
        <div class="space-y-6">
          <h1 class="text-md font-bold text-gray-300">
            Add an image URL that you would like to ask questions about.
          </h1>

          <input
            type="text"
            name="image-url"
            class="bg-secondary border border-neutral-500 w-full rounded-md outline-none p-3.5 text-sm font-medium"
            placeholder="Enter Image URL ..."
            v-model="store.imageURL"
          />
        </div>

        <hr class="my-10" />

        <div v-if="store.imageURL" class="space-y-6">
          <h1 class="text-md font-bold text-gray-300">
            <i class="fa-solid fa-image mr-1.5"></i>
            Your Image
          </h1>

          <p class="text-sm text-gray-200 font-medium">
            You can ask questions about this image.
          </p>

          <div
            class="rounded-md overflow-hidden max-h-72 border border-neutral-500"
          >
            <img :src="store.imageURL" alt="image" class="object-cover" />
          </div>
        </div>
      </div>
      <div class="relative w-full md:w-8/12 h-full">
        <div
          class="max-w-[800px] max-h-[590px] overflow-scroll mx-auto space-y-6 hide-scrollbar"
        >
          <div
            v-if="store.questionAnswerList.length > 0"
            class="w-full mx-auto space-y-8"
          >
            <div
              v-for="(chat, index) in store.questionAnswerList"
              :key="index"
              class="w-full mx-auto space-y-8"
            >
              <div class="space-y-1.5">
                <h1 class="text-md font-bold">
                  <i class="fa-solid fa-circle-question mr-1.5"></i>
                  Your Question - No.{{ index + 1 }}
                </h1>

                <p class="text-sm text-gray-200">
                  {{ chat.question }}
                </p>
              </div>

              <div
                class="space-y-1.5 bg-secondary p-6 rounded-md border border-neutral-500"
              >
                <h1 class="text-md font-bold">
                  <i class="fa-solid fa-comment mr-1.5"></i>
                  Answer From AI - Mini GPT-4 Model
                </h1>

                <p class="text-sm text-gray-200">
                  {{ chat.answer }}
                </p>
              </div>
            </div>
          </div>

          <div v-else class="py-52">
            <p class="text-sm text-gray-400 font-bold text-center">
              <i class="fa-solid fa-comment mr-1.5"></i>
              There are no questions and response.
            </p>
          </div>
        </div>

        <div class="absolute bottom-0 pb-3.5 w-full bg-background py-5 px-10">
          <MessageForm
            v-model="store.questionAboutImage"
            :send-question="sendQuestion"
          />
        </div>
      </div>
    </div>
  </section>
</template>
