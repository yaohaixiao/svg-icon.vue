/**
 * index.js - 注册 BaseTabsPane 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabsPane from './src/BaseTabsPane'

BaseTabsPane.install = function (Vue) {
  Vue.component(BaseTabsPane.name, BaseTabsPane)
}

export default BaseTabsPane
