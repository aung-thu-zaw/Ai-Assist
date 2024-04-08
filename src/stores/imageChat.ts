import { defineStore } from "pinia";
import { ref } from "vue";
import Replicate from "replicate";

export const useImageChatStore = defineStore("image-chat", () => {
  const replicateApiKey = import.meta.env.VITE_REPLICATE_API_KEY;

  if (!replicateApiKey) throw new Error("Replicate API key not provided");

  const replicate = new Replicate({ auth: replicateApiKey });

  const model =
    "daanelson/minigpt-4:b96a2f33cc8e4b0aa23eacfce731b9c41a7d9466d9ed4e167375587b54db9423";

  const imageURL = ref("");
  const questionAboutImage = ref("");
  const responseFromMiniGPT = ref("");
  const questionAnswerList = ref<any>([]);

  const createPrompt = async () => {
    try {
      const response: any = await replicate.run(model, {
        input: {
          image: imageURL.value,
          prompt: questionAboutImage.value,
        },
      });

      questionAnswerList.value.push({
        question: questionAboutImage.value,
        answer: response.message,
      });

      questionAboutImage.value = "";
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  return {
    imageURL,
    questionAboutImage,
    questionAnswerList,
    responseFromMiniGPT,
    createPrompt,
  };
});
