/**
 * index.js - 注册 UsageCase 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCase from './src/Case'

UsageCase.install = function (Vue) {
  Vue.component(UsageCase.name, UsageCase)
}

export default UsageCase
