import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './Myfarm.vue'

library.add(fas);

createApp(Myfarm)
.component('fa', FontAwesomeIcon)
.mount('#Myfarm');