import { createStore } from "vuex";
import { charactersModule } from "./modules/characters";

export const store = createStore({
  modules: {
    characters: charactersModule,
  },
});
