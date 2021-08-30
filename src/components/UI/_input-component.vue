<template>
  <input
    type="text"
    :value="value"
    @input="updateInput"
    class="txt"
    placeholder="body post"
  />
</template>
<script>
export default {
  name: "InputComponent",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.txt {
  width: 80%;
  margin-bottom: 15px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
