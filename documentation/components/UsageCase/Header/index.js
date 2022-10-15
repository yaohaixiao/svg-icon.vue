/**
 * index.js - 注册 UsageCaseHeader 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseHeader from './src/Header'

UsageCaseHeader.install = function (Vue) {
  Vue.component(UsageCaseHeader.name, UsageCaseHeader)
}

export default UsageCaseHeader
