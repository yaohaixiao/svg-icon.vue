/**
 * index.js - 注册 BasePaginationPrev 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BasePaginationPrev from './src/BasePaginationPrev'

/* istanbul ignore next */
BasePaginationPrev.install = function (Vue) {
  Vue.component(BasePaginationPrev.name, BasePaginationPrev)
}

export default BasePaginationPrev
