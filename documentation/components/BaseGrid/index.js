/**
 * index.js - 注册 BaseGrid 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseGrid from './src/BaseGrid'

/* istanbul ignore next */
BaseGrid.install = function (Vue) {
  Vue.component(BaseGrid.name, BaseGrid)
}

export default BaseGrid
