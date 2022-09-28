<template>
  <div class="app">
    <cards-list :cards="cards" @openCard="openCard"></cards-list>
    <page-menu
      @backPage="changePage"
      @nextPage="changePage"
      :totalPages="totalPages"
    ></page-menu>
    <create-card-menu @addCard="addCard"></create-card-menu>
    <open-card
      v-if="cardIsOpen"
      :openedCard="openedCard"
      @closeCard="closeCard"
    ></open-card>
  </div>
</template>

<script>
import axios from "axios";
import CardsList from "./components/CardsList.vue";
import CreateCardMenu from "./components/CreateCardMenu.vue";
import PageMenu from "./components/PageMenu.vue";
import OpenCard from "./components/OpenCard.vue";
export default {
  components: {
    CardsList,
    CreateCardMenu,
    PageMenu,
    OpenCard,
  },
  data() {
    return {
      cards: [],
      page: 1,
      totalPages: 0,
      cardIsOpen: false,
      openedCard: {},
    };
  },
  methods: {
    closeCard() {
      this.cardIsOpen = false;
    },
    openCard(card) {
      this.openedCard = card;
      this.cardIsOpen = !this.cardIsOpen;
    },
    addCard(value) {
      if (this.cards.length < 10) {
        this.cards.push(value);
      }
      this.getPagesCount();
      console.log(this.totalPages);
    },
    featch() {
      axios({
        method: "GET",
        url: `http://localhost:5000/api?page=${this.page}&limit=10`,
      }).then((response) => {
        this.cards = response.data;
      });
    },
    changePage(value) {
      this.page = value;
    },

    getPagesCount() {
      axios({
        method: "GET",
        url: "http://localhost:5000/api/pagesCount/",
      }).then((response) => {
        this.totalPages = Math.ceil(Number.parseInt(response.data) / 10);
      });
    },
  },
  mounted() {
    this.featch();
    this.getPagesCount();
  },
  watch: {
    page() {
      this.featch();
    },
  },
};
</script>

<style>
.app {
  width: 450px;
  height: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  display: flex;
  flex-direction: column;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(207, 207, 207);
  font-family: "Montserrat", sans-serif;
}
</style>
