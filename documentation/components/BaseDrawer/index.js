/**
 * index.js - 注册 BaseDrawer 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import BaseDrawer from './src/BaseDrawer'

BaseDrawer.install = (Vue) => {
  Vue.component(BaseDrawer.name, BaseDrawer)
}

export default BaseDrawer
