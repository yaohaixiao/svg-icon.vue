/**
 * index.js - 注册 BaseTabsItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabsItem from './src/BaseTabsItem'

BaseTabsItem.install = function (Vue) {
  Vue.component(BaseTabsItem.name, BaseTabsItem)
}

export default BaseTabsItem
