import { createRouter, createWebHashHistory } from "vue-router";
import DetailsCard from "@/components/DetailsCard.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/id=:userId?", component: DetailsCard }],
});
