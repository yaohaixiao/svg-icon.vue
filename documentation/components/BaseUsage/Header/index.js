/**
 * index.js - 注册 BaseUsageHeader 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageHeader from './src/BaseUsageHeader.vue'

BaseUsageHeader.install = function (Vue) {
  Vue.component(BaseUsageHeader.name, BaseUsageHeader)
}

export default BaseUsageHeader
