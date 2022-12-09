/**
 * index.js - 注册 BaseTabsNav 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabsNav from './src/BaseTabsNav'

BaseTabsNav.install = function (Vue) {
  Vue.component(BaseTabsNav.name, BaseTabsNav)
}

export default BaseTabsNav
