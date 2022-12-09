/**
 * index.js - 注册 BaseUsage 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BaseUsage from './Usage/src/BaseUsage'

BaseUsage.install = function (Vue) {
  Vue.component(BaseUsage.name, BaseUsage)
}

export default BaseUsage
