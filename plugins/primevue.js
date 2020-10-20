import Vue from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

Vue.prototype.$primevue = {ripple: true};


Vue.component('Card', Card);
Vue.component('Button', Button);