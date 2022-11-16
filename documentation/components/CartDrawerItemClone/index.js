/**
 * index.js - 注册 CartDrawerItemClone 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import CartDrawerItemClone from './src/CartDrawerItemClone'

CartDrawerItemClone.install = function (Vue) {
  Vue.component(CartDrawerItemClone.name, CartDrawerItemClone)
}

export default CartDrawerItemClone
