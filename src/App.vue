<template>
  <div class="container">
    <post-form @create="addPost" />
    <post-list :posts="posts" />
  </div>
</template>
<script>
import PostForm from "@/components/post-form.vue";
import PostList from "@/components/post-list.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi" },
        { id: 2, title: "Javascript", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi" },
        { id: 3, title: "Javascript", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi" },
      ],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push({
        id: this.posts[this.posts.length - 1].id + 1,
        title: post.title,
        body: post.body,
      });

      this.title = this.body = "";
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 15px;
}
</style>
