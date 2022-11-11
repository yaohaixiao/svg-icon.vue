/**
 * index.js - 注册 BaseAside 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseAside from './src/BaseAside'

/* istanbul ignore next */
BaseAside.install = function (Vue) {
  Vue.component(BaseAside.name, BaseAside)
}

export default BaseAside
