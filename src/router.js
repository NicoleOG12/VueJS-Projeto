import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import contactUs from "./components/pages/contactUs.vue";
import aboutUs from "./components/pages/aboutUs.vue";
import loginForm from "./components/pages/loginForm.vue";

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
    },
    {
        path: '/loginForm',
        name: 'Login',
        component: loginForm
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;