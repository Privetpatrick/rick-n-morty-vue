<template>
  <div v-if="character" class="container">
    <button class="back" @click="navigate">
      <div class="back-icon"></div>
      <div>Go back</div>
    </button>
    <img class="character-image" :src="character.image" />
    <h1 class="name">{{ character.name }}</h1>
    <div class="information-container">
      <h4 class="header">Information</h4>
      <div class="info-item">
        <p class="title">Gender</p>
        <p class="content">{{ character.gender }}</p>
        <div class="divider"></div>
      </div>
      <div class="info-item">
        <p class="title">Status</p>
        <p class="content">{{ character.status }}</p>
        <div class="divider"></div>
      </div>
      <div class="info-item">
        <p class="title">Species</p>
        <p class="content">{{ character.species }}</p>
        <div class="divider"></div>
      </div>
      <div class="info-item">
        <p class="title">Origin</p>
        <p class="content">{{ character.origin.name }}</p>
        <div class="divider"></div>
      </div>
      <div class="info-item">
        <p class="title">Type</p>
        <p class="content">
          {{ characterType }}
        </p>
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { GET_CHARACTERS } from "@/shared/constants";

export default {
  data() {
    return {
      character: null,
    };
  },
  computed: {
    characterType() {
      return this.character.type ? this.character.type : "Unknown";
    },
  },
  methods: {
    async fetchOneCharacter(id) {
      try {
        let character = await axios.get(GET_CHARACTERS + "/" + id);
        character = character.data;
        this.character = character;
      } catch (e) {
        this.$router.push({ name: "characters" });
      }
    },
    navigate() {
      this.$router.push({ name: "characters" });
    },
  },
  mounted() {
    const id = this.$route.params.id;
    const characters = this.$store.getters.getCharacters;
    const character = characters.find((char) => char.id === +id);
    if (character) return (this.character = character);
    this.fetchOneCharacter(id);
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

.back {
  height: 24px;
  align-self: flex-start;
  margin-top: 21px;
  margin-left: 50px;
  border: none;
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #000000;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.back-icon {
  margin-right: 12px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(../../../assets/back-icon.svg);
  background-size: contain;
  background-repeat: no-repeat;
}

.character-image {
  margin-top: 32px;
  width: 300px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
}

.name {
  margin-top: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #081f32;
}

.information-container {
  margin-top: 48px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header {
  margin-bottom: 48px;
  align-self: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #8e8e93;
}

.info-item {
  width: 100%;
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
}

.content {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
}

.divider {
  align-self: center;
  margin-top: 11px;
  width: 99%;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
}

@media (width < 600px) {
  .back {
    margin-top: 23px;
    margin-left: 24px;
  }

  .character-image {
    margin-top: 72px;
    width: 150px;
  }

  .name {
    margin-top: 34px;
    font-size: 32px;
    line-height: 38px;
  }

  .information-container {
    margin-top: 34px;
    width: 75%;
  }

  .header {
    margin-bottom: 16px;
    margin-left: -20px;
    align-self: flex-start;
  }

  .divider {
    width: 100%;
  }
}
</style>
