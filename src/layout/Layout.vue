<script setup>
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";

onMounted(() => {
  console.log("HELLO From Layout");
});
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view/>
  </main>
  <footer></footer>
</template>

<style scoped></style>
