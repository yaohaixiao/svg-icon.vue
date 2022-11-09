/**
 * index.js - 注册 BaseTabItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabItem from './src/BaseTabItem'

BaseTabItem.install = function (Vue) {
  Vue.component(BaseTabItem.name, BaseTabItem)
}

export default BaseTabItem
