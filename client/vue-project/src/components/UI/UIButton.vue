<template>
  <button class="basic__button">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "basic-button",
};
</script>

<style scoped>
.basic__button {
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 14px;
}
</style>
