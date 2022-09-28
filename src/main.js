import { createApp } from 'vue'
import App from './App.vue'
import Api from './utils/index'
import CustomClass from './components/common/custom-class/index'
import Prefix from './components/common/prefix'

const app = createApp(App)
app.config.globalProperties.$api = Api
app.config.globalProperties.$customClass = CustomClass
app.config.globalProperties.$prefix = Prefix
app.mount('#app')
