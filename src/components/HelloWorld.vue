<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment" class="btn btn-primary">Count is: {{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
