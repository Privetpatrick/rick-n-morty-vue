<template>
  <div @click="navigate" class="container-card">
    <div class="image-container">
      <img class="character-image" :src="character.image" />
    </div>

    <div class="character-info">
      <div class="name-card">{{ character.name }}</div>
      <div class="species-card">{{ character.species }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  methods: {
    navigate() {
      this.$router.push({
        name: "character",
        params: { id: this.character.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-card {
  margin-right: 20px;
  margin-bottom: 24px;
  width: 240px;
  height: 244px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  cursor: pointer;
}

.image-container {
  width: 100%;
  height: 168px;
  object-fit: cover;
}

.character-image {
  object-fit: cover;
  width: 100%;
  height: 168px;
  border-radius: 4px 4px 0 0;
}

.character-info {
  margin-left: 16px;
  overflow: hidden;
  width: 100%;
  height: 76px;
  // padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name-card {
  margin-top: auto;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
}

.species-card {
  margin-bottom: auto;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}

@media (width < 700px) {
  .container-card {
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 28px;
    width: 312px;
    height: 308px;
  }

  .image-container,
  .character-image {
    height: 232px;
  }

  .character-info {
    height: 76px;
  }
}
</style>
