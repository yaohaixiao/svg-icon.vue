/**
 * index.js - 注册 BaseTabs 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.04.05
 */
import BaseTabs from './Tabs/src/BaseTabs'

BaseTabs.install = function (Vue) {
  Vue.component(BaseTabs.name, BaseTabs)
}

export default BaseTabs
