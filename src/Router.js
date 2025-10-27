import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/MenuComponent.vue';
import CollatzComponent from './components/CollatzComponent.vue';

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/collatz", component: CollatzComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router