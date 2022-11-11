/**
 * index.js - 注册 BaseFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseFooter from './src/BaseFooter'

/* istanbul ignore next */
BaseFooter.install = function (Vue) {
  Vue.component(BaseFooter.name, BaseFooter)
}

export default BaseFooter
