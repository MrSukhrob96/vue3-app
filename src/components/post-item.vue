<template>
  <div class="post">
    <div class="title">{{ post.title }}</div>
    <div class="subtit">
      {{ post.body }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        post: {
            typeof: Object,
        }
    }
};
</script>
