import axios from "axios";
import { GET_CHARACTERS, GET_CHARACTERS_BY_NAME } from "@/shared/constants";

export const charactersModule = {
  state() {
    return {
      characters: [],
      character: null,
    };
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
  mutations: {
    setCharacters(state, newCharacters) {
      state.characters = newCharacters;
    },
  },
  actions: {
    async fetchCharacters(context, input) {
      try {
        if (input) {
          let characters = await axios.get(GET_CHARACTERS_BY_NAME + input);
          characters = characters.data.results.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          context.commit("setCharacters", characters);
        } else {
          let characters = await axios.get(GET_CHARACTERS);
          characters = characters.data.results.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          context.commit("setCharacters", characters);
        }
      } catch (e) {
        context.commit("setCharacters", []);
      }
    },
  },
};
