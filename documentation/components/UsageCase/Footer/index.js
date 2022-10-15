/**
 * index.js - 注册 UsageCaseFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseFooter from './src/Footer'

UsageCaseFooter.install = function (Vue) {
  Vue.component(UsageCaseFooter.name, UsageCaseFooter)
}

export default UsageCaseFooter
