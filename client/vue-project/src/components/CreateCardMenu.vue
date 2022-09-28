<template>
  <form class="create" @submit.prevent>
    <input
      type="text"
      placeholder="word"
      class="input input__word"
      v-model="word"
      @input="errorMesage = false"
    />
    <input
      type="text"
      placeholder="translete"
      class="input input__translete"
      v-model="translete"
      @input="errorMesage = false"
    />
    <input
      type="text"
      placeholder="image"
      class="input input__image"
      v-model="image"
      @input="errorMesage = false"
    />
    <textarea
      type="text"
      placeholder="context"
      class="textarea"
      v-model="context"
      @input="errorMesage = false"
    ></textarea>
    <span v-if="errorMesage" class="errorMesage"
      >Все поля должны быть заполнены!</span
    >
    <basic-button class="form__button" @click="addCard">Добавить</basic-button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      word: "",
      translete: "",
      image: "",
      context: "",
      errorMesage: false,
    };
  },
  methods: {
    checkInputsValue() {
      if (
        this.word.length <= 0 ||
        this.translete.length <= 0 ||
        this.image.length <= 0 ||
        this.context.length <= 0
      ) {
        this.errorMesage = true;
      }
    },
    addCard() {
      this.checkInputsValue();
      if (!this.errorMesage) {
        const card = {
          id: Date.now(),
          word: this.word,
          translete: this.translete,
          image: this.image,
          context: this.context,
        };

        axios({
          method: "POST",
          url: "http://localhost:5000/api/",
          data: card,
        });
        this.$emit("addCard", card);

        this.word = "";
        this.translete = "";
        this.image = "";
        this.context = "";
      }
    },
  },
};
</script>

<style scoped>
.errorMesage {
  font-size: 14px;
  color: red;
}
.create {
  padding: 20px;
  width: 300px;
  height: 300px;
  position: absolute;
  right: -300px;
  background-color: rgb(153, 180, 255);
}
.input {
  margin-bottom: 5px;
}

.input,
.textarea {
  background-color: rgb(231, 231, 231);
}
.input:focus,
.textarea:focus {
  background-color: white;
}
.input,
.textarea,
.form__button {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
}

.textarea {
  resize: none;
}

.form__button {
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
}
</style>
