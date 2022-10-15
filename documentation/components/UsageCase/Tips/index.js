/**
 * index.js - 注册 UsageCaseTips 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseTips from './src/Tips'

UsageCaseTips.install = function (Vue) {
  Vue.component(UsageCaseTips.name, UsageCaseTips)
}

export default UsageCaseTips
