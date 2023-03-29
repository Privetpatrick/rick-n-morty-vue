<template>
  <div class="container">
    <div class="main-img"></div>
    <div class="search-container">
      <form>
        <div class="search-icon"></div>
        <input
          @input="fetchCharacters(inputValue)"
          v-model.trim="inputValue"
          class="search"
          type="text"
          name="search"
          placeholder="Filter by name..."
        />
      </form>
    </div>
    <div class="characters-container">
      <CharacterCard
        v-for="character in characters"
        :character="character"
        :key="character.id"
      ></CharacterCard>
    </div>
    <div v-if="characters.length === 0" class="characters-container">
      <div class="no-results">Sorry no characters with such name.</div>
    </div>
  </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import { mapActions } from "vuex";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../services/localStorage.service";

export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    },
  },
  methods: {
    ...mapActions(["fetchCharacters"]),
  },
  mounted() {
    const inputValue = getLocalStorage();
    if (inputValue) {
      this.inputValue = inputValue;
      this.fetchCharacters(inputValue);
    } else {
      this.fetchCharacters(inputValue);
    }
  },
  beforeUnmount() {
    setLocalStorage(this.inputValue);
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-img {
  margin-top: 86px;
  width: 600px;
  height: 200px;
  background-image: url(../../../assets/rick-n-morty.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.search-container {
  margin-top: 16px;
  position: relative;
  min-width: 1020px;
  margin-right: 20px;
}

.search-icon {
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 24px;
  background-image: url(../../../assets/search-icon.svg);
  background-size: contain;
  background-repeat: no-repeat;
}

.search {
  width: 100%;
  height: 56px;
  padding: 16px 16px 16px 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.5);
  &::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
  }
}

.characters-container {
  max-width: 1040px;
  width: 90%;
  margin-top: 54px;
  display: flex;
  flex-wrap: wrap;
}

.no-results {
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

@media (width < 1020px) {
  .search-container {
    min-width: auto;
    width: 90%;
  }
}

@media (width < 700px) {
  .main-img {
    margin-top: 92px;
    width: 312px;
    height: 104px;
  }

  .search-container {
    margin-top: 32px;
    margin-right: 0;
    width: 312px;
  }

  .search-icon {
    top: 20px;
    left: 19px;
    width: 17.5px;
    height: 17.5px;
  }

  .characters-container {
    max-width: 312px;
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
  }

  .no-results {
    width: 312px;
  }
}
</style>
