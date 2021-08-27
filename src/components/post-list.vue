<template>
  <post-item v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import PostItem from "./post-item.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.post {
  margin: 15px 0;
  padding: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}
</style>
