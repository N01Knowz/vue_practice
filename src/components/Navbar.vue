<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
// Create a ref to the current route
const route = useRoute();

// Method to check if the link is active
const isActive = (to) => {
  return route.path === to;
};
</script>

<template>
  <div class="navbar bg-base-200 flex gap-6 justify-center">
    <ul class="flex gap-6">
      <li>
        <RouterLink
          :to="'/'"
          :class="['link', { 'link-secondary': isActive('/') }]"
          >Todo</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="'/posts'"
          :class="['link', { 'link-secondary': isActive('/posts') }]"
          >Posts</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
