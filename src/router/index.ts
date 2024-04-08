import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/text-chat",
      name: "text.chat",
      component: () => import("../views/TextChat.vue"),
    },
    {
      path: "/image-chat",
      name: "image.chat",
      component: () => import("../views/ImageChat.vue"),
    },
    {
      path: "/audio-chat",
      name: "audio.chat",
      component: () => import("../views/AudioChat.vue"),
    },
  ],
});

export default router;
