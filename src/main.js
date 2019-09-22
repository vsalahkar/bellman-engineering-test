import Vue from 'vue'
import App from './App.vue'
import './styles/style.scss'

Vue.config.productionTip = false


new Vue({
    render: el => el(App),
}).$mount('#app')
