/**
 * index.js - 注册 BaseTabNav 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabNav from './src/BaseTabNav'

BaseTabNav.install = function (Vue) {
  Vue.component(BaseTabNav.name, BaseTabNav)
}

export default BaseTabNav
