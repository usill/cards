<template>
  <div class="cards__menu">
    <button class="button cards__back" @click="backPage">
      <back-arrow-icon></back-arrow-icon>
    </button>
    <div class="cards__number">Page {{ page }}</div>
    <button class="button cards__next" @click="nextPage">
      <next-arrow-icon></next-arrow-icon>
    </button>
  </div>
</template>

<script>
import BackArrowIcon from "./icons/BackArrovIcon.vue";
import NextArrowIcon from "./icons/NextArrowIcon.vue";

export default {
  components: {
    BackArrowIcon,
    NextArrowIcon,
  },
  props: {
    totalPages: {
      type: [Number, String],
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    backPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.$emit("backPage", this.page);
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page += 1;
        this.$emit("nextPage", this.page);
      }
    },
  },
};
</script>

<style>
.cards__menu {
  margin-top: auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-left: 2px solid rgb(153, 180, 255);
  border-right: 2px solid rgb(153, 180, 255);
  border-bottom: 2px solid rgb(153, 180, 255);
}

.cards__number {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.button {
  width: 20%;
  border: none;
  background-color: white;
  cursor: pointer;
}

.arrow {
  width: 24px;
  height: 24px;
}

.button:hover .arrow {
  fill: rgb(81, 81, 255);
}
</style>
