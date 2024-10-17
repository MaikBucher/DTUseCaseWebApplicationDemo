import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../pages/startpage.vue';
import DTDescription from "@/pages/DTDescription.vue";
import DTDefinition from "@/pages/DTDefinition.vue";

const routes = [
    { path: '/', component: StartPage, name: 'StartPage' },
    { path: '/dtdescription', component: DTDescription, name: 'DTDescription' },
    { path: '/dtdefinition', component: DTDefinition, name: 'DTDefinition' }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;