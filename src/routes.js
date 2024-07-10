import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ItemPage from "@/pages/ItemPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routerHistory = createWebHashHistory();

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/:itemAlias",
            name: "itemAlias",
            component: ItemPage,
        },
        {
            path: "/:CatchAll(.*)",
            name: "404",
            component: NotFoundPage,
        }
    ]
});

export default routers;