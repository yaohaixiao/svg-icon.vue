/**
 * index.js - 注册 CartDrawerCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import CartDrawerCode from './src/CartDrawerCode'

CartDrawerCode.install = function (Vue) {
  Vue.component(CartDrawerCode.name, CartDrawerCode)
}

export default CartDrawerCode
