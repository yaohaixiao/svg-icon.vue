/**
 * base-toolbar.vue - 注册 BaseToolbar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.15
 */
import BaseToolbar from './src/BaseToolbar'

BaseToolbar.install = function (Vue) {
  Vue.component(BaseToolbar.name, BaseToolbar)
}

export default BaseToolbar
