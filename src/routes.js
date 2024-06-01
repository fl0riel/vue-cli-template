import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routerHistory = createWebHistory();

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/about",
            component: AboutPage,
        }
    ]
});

export default routers;