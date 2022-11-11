/**
 * index.js - 注册 BaseBreadcrumb 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseBreadcrumb from './src/BaseBreadcrumb'

/* istanbul ignore next */
BaseBreadcrumb.install = function (Vue) {
  Vue.component(BaseBreadcrumb.name, BaseBreadcrumb)
}

export default BaseBreadcrumb
