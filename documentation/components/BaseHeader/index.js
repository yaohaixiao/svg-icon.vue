/**
 * index.js - 注册 BaseHeader 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseHeader from './src/BaseHeader'

/* istanbul ignore next */
BaseHeader.install = function (Vue) {
  Vue.component(BaseHeader.name, BaseHeader)
}

export default BaseHeader
