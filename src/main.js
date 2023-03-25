import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';

library.add(fas, faUserSecret)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('VCalendar', Calendar);
app.component('VDatePicker', DatePicker);

setupCalendar(app, {});

app.mount('#app');
