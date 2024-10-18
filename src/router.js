import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import contactUs from "./components/pages/contactUs.vue";
import aboutUs from "./components/pages/aboutUs.vue";
import loginForm from "./components/pages/LoginForm.vue";
import NewPage from "./components/NewPage.vue";

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
    },

    {
        path: '/NewPage',
        name: 'NewPage',
        component: NewPage
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;