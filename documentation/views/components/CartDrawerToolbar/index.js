/**
 * index.js - 注册 CartDrawerToolbar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import CartDrawerToolbar from './src/CartDrawerToolbar'

CartDrawerToolbar.install = function (Vue) {
  Vue.component(CartDrawerToolbar.name, CartDrawerToolbar)
}

export default CartDrawerToolbar
