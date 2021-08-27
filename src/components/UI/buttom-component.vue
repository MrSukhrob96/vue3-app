<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent"
}
</script>

<style lang="scss" scoped>
.btn {
  outline: none;
  border: none;
  background: none;
  padding: 13.5px 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
}
</style>
