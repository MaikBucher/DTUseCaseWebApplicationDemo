import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


/*
appInsights.trackPageView();
*/

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(router).use(vuetify);

app.mount('#app');

/*
router.afterEach((to) => {
    appInsights.trackPageView({ name: to.name, uri: to.fullPath });
});*/
