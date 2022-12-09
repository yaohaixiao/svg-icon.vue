/**
 * index.js - 注册 BasePaginationNext 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BasePaginationNext from './src/BasePaginationNext'

/* istanbul ignore next */
BasePaginationNext.install = function (Vue) {
  Vue.component(BasePaginationNext.name, BasePaginationNext)
}

export default BasePaginationNext
