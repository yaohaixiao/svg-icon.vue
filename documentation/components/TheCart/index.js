import TheCart from './src/TheCart'

/* istanbul ignore next */
TheCart.install = function (Vue) {
  Vue.component(TheCart.name, TheCart)
}

export default TheCart
