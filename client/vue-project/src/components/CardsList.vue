<template>
  <ul class="cards">
    <TransitionGroup name="list">
      <li
        class="cards__item"
        v-for="card in cards"
        :key="card._id"
        @click="$emit('openCard', card)"
      >
        <img :src="card.image" alt="" width="54" height="36" />
        <article class="cards__text">
          <p class="cards__title">
            <span class="blue"
              ><b>{{ card.word }}</b></span
            >
            - {{ card.translete }}
          </p>
          <p class="cards__subtitle">
            <span class="gray">{{ card.context }}</span>
          </p>
        </article>
      </li>
    </TransitionGroup>
  </ul>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cards {
  height: 470px;
  overflow: hidden;
  border: 2px solid rgb(153, 180, 255);
}
.cards__item {
  display: flex;
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgb(153, 180, 255);
  transition: 0.2s ease;
}

.cards__item:hover {
  background-color: aliceblue;
}

.cards__text {
  margin-left: 10px;
}

.blue {
  color: rgb(81, 81, 255);
}

.gray {
  color: rgb(189, 189, 189);
}

.cards__subtitle {
  font-size: 13px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
