import Vue from 'vue';
import PortalVue from 'portal-vue';

import AppComponent from './app.component';

Vue.use(PortalVue);

new Vue({
  el: '#app',
  render: h => h(AppComponent)
});
