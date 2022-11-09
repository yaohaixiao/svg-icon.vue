/**
 * index.js - 注册 CartDrawer 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import CartDrawer from './src/CartDrawer'

CartDrawer.install = function (Vue) {
  Vue.component(CartDrawer.name, CartDrawer)
}

export default CartDrawer
