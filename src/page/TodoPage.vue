<script setup>
import { onMounted, ref, watch } from "vue";
import Layout from "../layout/Layout.vue";

const todos = ref([]);

const todoInput = ref("");
const isDisabled = false;

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

const addTodo = () => {
  if (todoInput.value.trim() === "" || todoInput.value === null) return;

  todos.value.push({
    todo: todoInput.value,
    completed: false,
  });
  todoInput.value = "";
};

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};
</script>

<template>
  <div class="p-6 flex flex-col items-center gap-4">
    <span class="bubble"></span>
    <form @submit.prevent="addTodo" class="flex gap-4">
      <input
        type="text"
        class="input input-bordered input-secondary"
        v-model="todoInput"
        placeholder="Add Todo Here..."
      />
      <button class="btn btn-primary" :disabled="isDisabled">Add todo</button>
    </form>
    <div>
      <div v-for="todo in todos">
        <div class="flex bg-neutral items-center p-2 my-2 gap-2">
          <input
            type="text"
            v-model="todo.todo"
            class="input input-ghost input-md"
          />
          <p>Completed:</p>
          <input type="checkbox" v-model="todo.completed" class="checkbox" />
          <button class="btn btn-error btn-sm" @click="removeTodo(todo)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
