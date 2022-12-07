/**
 * index.js - 注册 CartDrawerList 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import CartDrawerList from './src/CartDrawerList'

CartDrawerList.install = function (Vue) {
  Vue.component(CartDrawerList.name, CartDrawerList)
}

export default CartDrawerList
