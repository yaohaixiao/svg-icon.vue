import BaseAside from './src/BaseAside'

/* istanbul ignore next */
BaseAside.install = function (Vue) {
  Vue.component(BaseAside.name, BaseAside)
}

export default BaseAside
