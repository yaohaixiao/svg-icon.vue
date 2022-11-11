/**
 * index.js - 注册 BaseContainer 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseContainer from './src/BaseContainer'

/* istanbul ignore next */
BaseContainer.install = function (Vue) {
  Vue.component(BaseContainer.name, BaseContainer)
}

export default BaseContainer
