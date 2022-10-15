/**
 * index.js - 注册超链接组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2021.6.19
 */
import BaseLink from './src/BaseLink'

BaseLink.install = function (Vue) {
  Vue.component(BaseLink.name, BaseLink)
}

export default BaseLink
