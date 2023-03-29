import { createRouter, createWebHistory } from "vue-router";
import CharactersPage from "../components/pages/characters-page/CharactersPage.vue";
import OneCharacterPage from "../components/pages/one-character-page/OneCharacterPage.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "characters" },
  },
  {
    path: "/characters",
    name: "characters",
    component: CharactersPage,
  },
  {
    path: "/character/:id",
    name: "character",
    component: OneCharacterPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "characters" },
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
