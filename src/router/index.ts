import { createRouter, createWebHistory } from 'vue-router'
import type {RouterRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouterRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    component: AppTop
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
});

export default router;
