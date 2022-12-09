/**
 * index.js - 注册 BaseUsageCase 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageCase from './src/BaseUsageCase.vue'

BaseUsageCase.install = function (Vue) {
  Vue.component(BaseUsageCase.name, BaseUsageCase)
}

export default BaseUsageCase
