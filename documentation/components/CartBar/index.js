/**
 * index.js - 注册 CartBar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import CartBar from './src/CartBar'

/* istanbul ignore next */
CartBar.install = function (Vue) {
  Vue.component(CartBar.name, CartBar)
}

export default CartBar
