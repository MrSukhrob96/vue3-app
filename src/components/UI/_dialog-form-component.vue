<template>
  <div class="overlay" v-if="show" @click="hideDialog">
    <div class="modal-dialog" @click.stop="">
      <div class="modal-dialog__header">
        <span ref="close" @click="hideDialog">x</span>
      </div>
      <div class="modal-dialog__bo">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DialogFormComponent",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  min-width: 400px;
  min-height: 400px;
  background: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  animation: dialog-animate 0.5s ease-in-out;
}

@keyframes dialog-animate {
  0% {
    opacity: 0.3;
    transform: translateY(-200px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-dialog__header {
  text-align: right;
  padding: 3px 12px 3px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}
</style>
