/**
 * index.js - 注册 UsageCaseCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseCode from './src/Code'

UsageCaseCode.install = function (Vue) {
  Vue.component(UsageCaseCode.name, UsageCaseCode)
}

export default UsageCaseCode
