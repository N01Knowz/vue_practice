<script setup>
//Composition instead of option
import { ref, onMounted } from "vue";

// create a reactive state variable
const count = ref(0);

const idTest = "testing";

const isActive = true;

// lifecycle hooks. When this component gets rendered then do this. Basically UseEffect in react.
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <!-- v-bind allows us to use the variables of the vue but can also be shorten with just :??? like v-bind:id to :id. Probably have most of the html attribute-->

  <!-- to use vue variables and insert it to a attribute. -->
  <div v-bind:id="idTest"></div>
  <div :id="idTest"></div>

  <!-- v-model simplifies the input change of the variable -->
  <input type="number" v-model="count" />

  <!-- v-if is like if statement and will only show the element if it is true -->
  <p v-if="isActive">I am active</p>

  <!-- v-on = DOM Events like onClick, onSubmit, and etc on react. Can be shortened with @ like @click, @submit.prevent -->
  <a v-on:click="doSomething"> ... </a>
  <a @click="doSomething"> ... </a>
</template>

<style scoped></style>
