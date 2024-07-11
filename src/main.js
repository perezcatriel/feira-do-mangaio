// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Añadir íconos a la librería
library.add(faInstagram);

const app = createApp(App);

// Registrar el componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
