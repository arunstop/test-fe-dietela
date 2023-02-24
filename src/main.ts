import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'

Vue.use(VueCompositionApi)
Vue.use(PiniaVuePlugin)
Vue.use(Chakra)
const pinia = createPinia()

new Vue({
  el: `#app`,
  pinia,
  render: (h) => h(CThemeProvider, [h(App)]),
}).$mount('#app')
