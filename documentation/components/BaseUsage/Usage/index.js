/**
 * index.js - 注册 BaseUsage 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsage from './src/BaseUsage.vue'

BaseUsage.install = function (Vue) {
  Vue.component(BaseUsage.name, BaseUsage)
}

export default BaseUsage
