import { encode } from "gpt-tokenizer";
import { ClientOptions, OpenAI } from "openai";
import { defineStore } from "pinia";
import { ref } from "vue";

type MessageProps = Array<{ role: string; content: string }>;

export const useTextChatStore = defineStore("text-chat", () => {
  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!openAiApiKey) {
    throw new Error("OpenAI API key not provided");
  }

  const openAiOptions: ClientOptions = {
    apiKey: openAiApiKey,
    dangerouslyAllowBrowser: true,
  };

  const openAi = new OpenAI(openAiOptions);

  const analyzeText = ref("");
  const questionAboutAnalyzeText = ref("");
  const promptForMessages = ref<MessageProps>([]);
  const responseFromOpenAi = ref("");
  const tokenLength = ref(0);

  const createPrompt = () => {
    const instructions = {
      name: "instruction",
      role: "system",
      content: "You will answer a question about the following text.",
    };
    const textToAnalyze = {
      name: "text",
      role: "user",
      content: analyzeText.value,
    };
    const chatQuestion = {
      name: "question",
      role: "user",
      content: questionAboutAnalyzeText.value,
    };

    promptForMessages.value.push(instructions);
    promptForMessages.value.push(textToAnalyze);
    promptForMessages.value.push(chatQuestion);

    tokenLength.value = checkTokens(
      instructions.content + textToAnalyze.content + chatQuestion.content
    );
  };

  const sendPrompt = async () => {
    try {
      if (analyzeText.value.length === 0) {
        alert("You have not added any text to analyze.");
      } else {
        const response = await openAi.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: promptForMessages.value,
        });

        responseFromOpenAi.value = response.choices[0].message.content ?? "";
      }
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  const checkTokens = (value: string) => {
    if (value == null) throw new Error("No string was provided");

    const encoded = encode(value);

    return encoded.length;
  };

  return {
    tokenLength,
    analyzeText,
    questionAboutAnalyzeText,
    promptForMessages,
    responseFromOpenAi,
    createPrompt,
    sendPrompt,
  };
});
