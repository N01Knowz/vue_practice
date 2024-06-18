import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../components/NotFound.vue";
import TodoPage from "../page/TodoPage.vue";
import Posts from "../page/Posts.vue";
import Layout from "../layout/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: TodoPage },
      { path: "posts", component: Posts },
    ],
  },
  {
    path: "/:pathMatch(.*)", // Catch-all route
    component: NotFound, // Your "Not Found" component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
