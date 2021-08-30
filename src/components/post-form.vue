<template>
  <form action="" class="posts-form">
    <input-component v-model:value="post.title" v-model:edit="post.title"  />
    <input-component v-model:value="post.body" v-model:edit="post.body" />
    <button-component class="btn" @click.prevent="createPost">Add Post</button-component>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", this.post);
      this.post.title = this.post.body = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.posts-form {
  width: 100%;
  padding: 3rem;
  margin: 30px auto;
}
</style>
