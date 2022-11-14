/**
 * BaseTips.vue - 注册 BaseTips 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.14
 */
import BaseTips from './src/BaseTips'

BaseTips.install = function (Vue) {
  Vue.component(BaseTips.name, BaseTips)
}

export default BaseTips
