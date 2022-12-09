/**
 * index.js - 注册 BasePagination 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BasePagination from './src/BasePagination'

/* istanbul ignore next */
BasePagination.install = function (Vue) {
  Vue.component(BasePagination.name, BasePagination)
}

export default BasePagination
