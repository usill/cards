<template>
  <div class="open">
    <div class="open__card">
      <p class="open__word">{{ openedCard.word }}</p>
      <p class="open__translete">
        <b>{{ openedCard.translete }}</b>
      </p>
      <figure>
        <img :src="openedCard.image" alt="" class="open__image" />
      </figure>
      <p class="open__context">{{ openedCard.context }}</p>
    </div>
    <basic-button class="open__button" @click="$emit('closeCard')"
      >Закрыть</basic-button
    >
  </div>
</template>

<script>
export default {
  props: {
    openedCard: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.open {
  position: absolute;
  background-color: rgb(153, 180, 255);
  width: 450px;
  height: 520px;
  display: flex;
  flex-direction: column;
}
.open__card {
  width: 80%;
  height: 80%;
  margin-left: 10%;
  margin-top: 5%;
  background-color: #fff;
}
.open__button {
  height: 60px;
  margin-top: auto;
}
.open__word {
  text-align: center;
  font-size: 12px;
  color: rgb(100, 100, 100);
}
.open__word,
.open__translete,
.open__image {
  margin-top: 15px;
}
.open__translete {
  text-align: center;
  color: rgb(29, 89, 255);
  font-size: 20px;
}
.open__image {
  width: 100%;
  padding: 0 10px;
}
.open__context {
  margin-top: 25px;
  padding: 0 10px;
  font-size: 14px;
  color: rgb(100, 100, 100);
}
</style>
