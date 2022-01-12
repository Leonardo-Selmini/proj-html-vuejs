import Vue from 'vue';
import App from './App.vue';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// common icons library
import { faClock, faInbox, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
// import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faInbox } from '@fortawesome/free-solid-svg-icons';

// brand icons library
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


Vue.component('font-awesome-icon', FontAwesomeIcon);
/* <font-awesome-icon :icon="['fa', 'play']" /> */

// common
library.add(faClock);
library.add(faPhone);
library.add(faEnvelope);
library.add(faUser);
library.add(faPlay);
library.add(faArrowRight);
library.add(faNetworkWired);
library.add(faBriefcase);
library.add(faChartBar);
library.add(faPlane);
library.add(faGlobe);
library.add(faInbox);

// brand
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

