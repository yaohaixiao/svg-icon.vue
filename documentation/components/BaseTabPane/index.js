/**
 * index.js - 注册 BaseTabPane 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabPane from './src/BaseTabPane'

BaseTabPane.install = function (Vue) {
  Vue.component(BaseTabPane.name, BaseTabPane)
}

export default BaseTabPane
