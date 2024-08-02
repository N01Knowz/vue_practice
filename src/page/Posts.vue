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
  <div class="flex gap-12 items-center justify-center w-full flex-wrap p-6">
    <span v-if="!posts" class="loading loading-spinner loading-xs"></span>
    <div
      v-if="posts"
      v-for="post in posts"
      class="card w-96 bg-base-100 shadow-info-300 shadow-xl h-64"
    >
      <div class="card-body">
        <h2 class="card-title border-primary border-b-[1px]">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
