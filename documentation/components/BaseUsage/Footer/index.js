/**
 * index.js - 注册 BaseUsageFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageFooter from './src/BaseUsageFooter.vue'

BaseUsageFooter.install = function (Vue) {
  Vue.component(BaseUsageFooter.name, BaseUsageFooter)
}

export default BaseUsageFooter
