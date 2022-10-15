import BaseHeader from './src/BaseHeader'

/* istanbul ignore next */
BaseHeader.install = function (Vue) {
  Vue.component(BaseHeader.name, BaseHeader)
}

export default BaseHeader
