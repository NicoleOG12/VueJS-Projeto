import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import contactUs from "./components/pages/contactUs.vue";
import aboutUs from "./components/pages/aboutUs.vue";
const routes = [
    {
        path: '/HomePage',
        name: 'Home Page',
        component: HomePage
    },
    {
        path: '/contactUs',
        name: 'Nos contate',
        component: contactUs
    },
    {
        path: '/aboutUs',
        name: 'Sobre nós',
        component: aboutUs
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;