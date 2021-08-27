<template>
  <div class="post">
    <div class="post__items">
      <div class="post__item post_info">
        <div class="post__title">{{ post.title }}</div>
        <div class="post__body">{{ post.body }}</div>
      </div>
      <div class="post__item post_action">
        <button-component>EDIT</button-component>
        <button-component>DELETE</button-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.post__title {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 20px;
}

.post__body {
  color: rgba(0, 0, 0, 0.3);
  font-style: italic;
}

.post__items {
  display: flex;
  justify-content: space-between;
}
.post_info {
  flex: 1 1 70%;
}
</style>
