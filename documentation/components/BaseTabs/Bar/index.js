/**
 * index.js - 注册 BaseTabsBar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabsBar from './src/BaseTabsBar'

BaseTabsBar.install = function (Vue) {
  Vue.component(BaseTabsBar.name, BaseTabsBar)
}

export default BaseTabsBar
