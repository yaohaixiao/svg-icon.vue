/**
 * index.js - 注册 UsageCaseMain 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseMain from './src/Main'

UsageCaseMain.install = function (Vue) {
  Vue.component(UsageCaseMain.name, UsageCaseMain)
}

export default UsageCaseMain
