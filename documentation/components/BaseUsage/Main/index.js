/**
 * index.js - 注册 BaseUsageMain 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageMain from './src/BaseUsageMain.vue'

BaseUsageMain.install = function (Vue) {
  Vue.component(BaseUsageMain.name, BaseUsageMain)
}

export default BaseUsageMain
