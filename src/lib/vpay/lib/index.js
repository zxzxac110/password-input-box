// pay.vue写我们的组件
import vpay from './pay.vue'

const myPlugin = {
  // 该插件有一个install方法
  // 参数  传入的vue 插件的自定义参数
  install (Vue, options) {
    // 将其注册为组件
    Vue.component('vpay', vpay)
  }
}

export default myPlugin
