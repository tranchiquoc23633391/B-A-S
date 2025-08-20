import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';




// Thêm icon vào library
library.add(faMagnifyingGlass);
library.add(faBars);
library.add(faFacebook, faTwitter, faLinkedin, faTiktok);

// Tạo ứng dụng Vue, tích hợp router và component FontAwesomeIcon
const app = createApp(App)
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')