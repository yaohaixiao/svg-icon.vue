import BaseDrawer from './src/BaseDrawer'

BaseDrawer.install = (Vue) => {
  Vue.component(BaseDrawer.name, BaseDrawer)
}

export default BaseDrawer
