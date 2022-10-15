import BaseGrid from './src/BaseGrid'

/* istanbul ignore next */
BaseGrid.install = function (Vue) {
  Vue.component(BaseGrid.name, BaseGrid)
}

export default BaseGrid
