import BaseButton from './src/BaseButton'

/* istanbul ignore next */
BaseButton.install = function (Vue) {
  Vue.component(BaseButton.name, BaseButton)
}

export default BaseButton
