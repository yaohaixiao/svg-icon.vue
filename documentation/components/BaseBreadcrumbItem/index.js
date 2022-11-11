/**
 * index.js - 注册 BaseBreadcrumbItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseBreadcrumbItem from './src/BaseBreadcrumbItem'

/* istanbul ignore next */
BaseBreadcrumbItem.install = function (Vue) {
  Vue.component(BaseBreadcrumbItem.name, BaseBreadcrumbItem)
}

export default BaseBreadcrumbItem
