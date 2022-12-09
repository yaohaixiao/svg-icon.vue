/**
 * index.js - 注册 BasePaginationPager 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.09
 */
import BasePaginationPager from './src/BasePaginationPager'

/* istanbul ignore next */
BasePaginationPager.install = function (Vue) {
  Vue.component(BasePaginationPager.name, BasePaginationPager)
}

export default BasePaginationPager
