/**
 * index.js - 注册 BaseEmpty 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseEmpty from './src/BaseEmpty'

BaseEmpty.install = (Vue) => {
  Vue.component(BaseEmpty.name, BaseEmpty)
}

export default BaseEmpty
