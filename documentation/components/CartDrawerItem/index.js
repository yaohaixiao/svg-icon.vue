/**
 * index.js - 注册 CartDrawerItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import CartDrawerItem from './src/CartDrawerItem'

CartDrawerItem.install = function (Vue) {
  Vue.component(CartDrawerItem.name, CartDrawerItem)
}

export default CartDrawerItem
