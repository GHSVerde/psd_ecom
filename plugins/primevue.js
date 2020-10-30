import Vue from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import MegaMenu from 'primevue/megamenu';

Vue.prototype.$primevue = {ripple: true};


Vue.component('Card', Card);
Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('MegaMenu', MegaMenu);