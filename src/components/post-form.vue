<template>
  <form action="" class="posts-form">
    <input
      type="text"
      class="txt"
      v-model="post.title"
      placeholder="title post"
    />
    <input
      type="text"
      class="txt"
      v-model="post.body"
      placeholder="body post"
    />
    <button-component class="btn" @click.prevent="createPost">Add Post</button-component>
  </form>
</template>

<script>
export default {
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
  max-width: 600px;
  width: 100%;
  padding: 3rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  margin: 30px auto;
}

.txt {
  width: 100%;
  margin-bottom: 15px;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
