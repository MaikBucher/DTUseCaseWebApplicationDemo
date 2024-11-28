import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../pages/startpage.vue';
import DTDescription from "@/pages/DTDescription.vue";
import DTSubmodel from "@/pages/DTSubmodel.vue";
import DTPublish from "@/pages/DTPublish.vue";
import DTHistory from "@/pages/DTHistory.vue";
import DTVisual from "@/pages/DTVisual.vue";
import VideoPage from "@/pages/VideoPage.vue";
import DTStorage from "@/pages/DTStorage.vue";
import DTAccess from "@/pages/DTAccess.vue";
import SurveyPage from "@/pages/SurveyPage.vue";

const routes = [
    { path: '/', component: StartPage, name: 'StartPage', meta: { showVisualization: false } },
    { path: '/dtdescription', component: DTDescription, name: 'DTDescription', meta: { showVisualization: true } },
    { path: '/dtsubmodel', component: DTSubmodel, name: 'DTSubmodel', meta: { showVisualization: true } },
    { path: '/dtpublish', component: DTPublish, name: 'DTPublish', meta: { showVisualization: true } },
    { path: '/dthistory', component: DTHistory, name: 'DTHistory', meta: { showVisualization: false } },
    { path: '/dtvisualization', component: DTVisual, name: 'DTVisualization', meta: { showVisualization: true } },
    { path: '/video', component: VideoPage, name: 'VideoPage', meta: { showVisualization: false }, props: true },
    { path:'/dtstorage', component: DTStorage, name: 'DTStorage', meta: { showVisualization: true } },
    { path:'/dtaccess', component: DTAccess, name: 'DTAccess', meta: { showVisualization: true } },
    { path: '/dtsurvey', component: SurveyPage, name: 'SurveyPage', meta: { showVisualization: false } }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;