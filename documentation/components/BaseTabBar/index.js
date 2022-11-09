/**
 * index.js - 注册 BaseTabBar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabBar from './src/BaseTabBar'

BaseTabBar.install = function (Vue) {
  Vue.component(BaseTabBar.name, BaseTabBar)
}

export default BaseTabBar
