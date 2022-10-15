import BaseMain from './src/BaseMain'

/* istanbul ignore next */
BaseMain.install = function (Vue) {
  Vue.component(BaseMain.name, BaseMain)
}

export default BaseMain
