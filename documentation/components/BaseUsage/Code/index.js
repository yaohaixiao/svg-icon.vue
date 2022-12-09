/**
 * index.js - 注册 BaseUsageCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageCode from './src/BaseUsageCode.vue'

BaseUsageCode.install = function (Vue) {
  Vue.component(BaseUsageCode.name, BaseUsageCode)
}

export default BaseUsageCode
