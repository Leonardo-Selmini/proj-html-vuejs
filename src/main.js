import Vue from 'vue';
import App from './App.vue';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// common icons library
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// brand icons library
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


Vue.component('font-awesome-icon', FontAwesomeIcon);

// common
library.add(faClock);
library.add(faPhone);
library.add(faEnvelope);
library.add(faUser);

// brand
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

