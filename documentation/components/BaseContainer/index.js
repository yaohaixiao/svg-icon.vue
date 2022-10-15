import BaseContainer from './src/BaseContainer'

/* istanbul ignore next */
BaseContainer.install = function (Vue) {
  Vue.component(BaseContainer.name, BaseContainer)
}

export default BaseContainer
