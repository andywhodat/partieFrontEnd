// main.js or main.ts

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);

// Initialize Pinia and use it as a plugin
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
