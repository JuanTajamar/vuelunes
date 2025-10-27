import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)
app.config.globalProperties.$filter = {
    collatzColores(numero) {
        if(numero % 2 === 0) {
            return '<span style="color:green>' + numero + '</span>'
        } else {
            return '<span style="color:green>' + numero + '</span>'
        }
    }
}

app.use(router).mount('#app')
