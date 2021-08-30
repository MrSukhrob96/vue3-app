<template>
  <div class="container">
    <button-component class="btn" @click="showDialog">Add Post</button-component>
    <dialog-form-component v-model:show="modalVissable">
      <post-form @create="addPost" :edit="post" />
    </dialog-form-component>
    <post-list
      :posts="posts"
      @remove="removePost"
      @edit="editPost"
      v-if="posts.length > 0"
    />
    <h4 v-else>Posts not found</h4>
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
        {
          id: 1,
          title: "Javascript",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi",
        },
        {
          id: 2,
          title: "Javascript",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi",
        },
        {
          id: 3,
          title: "Javascript",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi",
        },
      ],
      post: {},
      modalVissable: false,
    };
  },
  computed:{
    getLastIdPosts(){
      if(this.posts.length > 0){
          return this.posts[this.posts.length - 1].id
      }
      return 0;
    }
  },
  methods: {
    addPost(post) {
      this.posts.push({
        id: this.getLastIdPosts + 1,
        title: post.title,
        body: post.body,
      });

      this.title = this.body = "";
      this.modalVissable = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    editPost(post) {
      this.post = this.posts.find((p) => p.id == post.id);
    },
    showDialog(show) {
      this.modalVissable = true;
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
