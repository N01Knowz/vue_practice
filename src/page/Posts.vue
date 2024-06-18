<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Layout from "../layout/Layout.vue";

const posts = ref({});

const getPosts = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => (posts.value = res.data));
};

onMounted(() => {
  getPosts();
});

watch(posts, (newValue) => {
  console.log(posts.value);
});
</script>

<template>
  <div class="flex gap-12 items-center justify-center w-full bg-black flex-wrap p-6">
    <span v-if="!posts" class="loading loading-spinner loading-xs"></span>
    <div
      v-if="posts"
      v-for="post in posts"
      class="card w-96 bg-base-100 shadow-xl h-64"
    >
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
