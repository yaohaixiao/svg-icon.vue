/**
 * index.js - 注册 BaseButton 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseButton from './src/BaseButton'

/* istanbul ignore next */
BaseButton.install = function (Vue) {
  Vue.component(BaseButton.name, BaseButton)
}

export default BaseButton
