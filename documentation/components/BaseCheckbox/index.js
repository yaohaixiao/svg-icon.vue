/**
 * index.js - 注册 BaseCheckbox 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseCheckbox from './src/BaseCheckbox'

/* istanbul ignore next */
BaseCheckbox.install = function (Vue) {
  Vue.component(BaseCheckbox.name, BaseCheckbox)
}

export default BaseCheckbox
