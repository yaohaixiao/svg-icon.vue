/**
 * index.js - 注册 BasePaginationTotal 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BasePaginationTotal from './src/BasePaginationTotal'

/* istanbul ignore next */
BasePaginationTotal.install = function (Vue) {
  Vue.component(BasePaginationTotal.name, BasePaginationTotal)
}

export default BasePaginationTotal
