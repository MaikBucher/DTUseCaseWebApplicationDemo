import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../pages/startpage.vue';
import DTDescription from "@/pages/DTDescription.vue";
import DTSubmodel from "@/pages/DTSubmodel.vue";
import DTPublish from "@/pages/DTPublish.vue";
import DTHistory from "@/pages/DTHistory.vue";
import DTVisual from "@/pages/DTVisual.vue";

const routes = [
    { path: '/', component: StartPage, name: 'StartPage' },
    { path: '/dtdescription', component: DTDescription, name: 'DTDescription' },
    { path: '/dtsubmodel', component: DTSubmodel, name: 'DTSubmodel' },
    { path: '/dtpublish', component: DTPublish, name: 'DTPublish' },
    { path: '/dthistory', component: DTHistory, name: 'DTHistory' },
    { path: '/dtvisualization', component: DTVisual, name: 'DTVisualization' }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;