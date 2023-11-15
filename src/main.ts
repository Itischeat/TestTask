import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';



const app = createApp(App);

app.use(PrimeVue)
app.component('InputText', InputText)
app.component('InputGroup', InputGroup)
app.component('Button', Button)
app.directive('tooltip', Tooltip);
app.mount('#app')
