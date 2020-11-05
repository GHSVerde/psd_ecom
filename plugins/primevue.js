import Vue from 'vue';

import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import MegaMenu from 'primevue/megamenu';
import Dropdown from 'primevue/dropdown';
import Menu from 'primevue/menu';
import Carousel from 'primevue/carousel';
import Sidebar from 'primevue/sidebar'

Vue.prototype.$primevue = {ripple: true};

Vue.component('Card', Card);
Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('MegaMenu', MegaMenu);
Vue.component('Dropdown', Dropdown);
Vue.component('Menu', Menu);
Vue.component('Carousel', Carousel);
Vue.component('Sidebar', Sidebar);