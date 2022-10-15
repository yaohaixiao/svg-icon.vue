/**
 * index.js - 注册 UsageCaseItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseItem from './src/Item'

UsageCaseItem.install = function (Vue) {
  Vue.component(UsageCaseItem.name, UsageCaseItem)
}

export default UsageCaseItem
