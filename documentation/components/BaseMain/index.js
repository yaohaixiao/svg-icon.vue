/**
 * index.js - 注册 BaseMain 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseMain from './src/BaseMain'

/* istanbul ignore next */
BaseMain.install = function (Vue) {
  Vue.component(BaseMain.name, BaseMain)
}

export default BaseMain
