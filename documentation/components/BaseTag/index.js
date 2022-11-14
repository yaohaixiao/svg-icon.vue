/**
 * index.js - 注册 BaseTag 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.14
 */
import BaseTag from './src/BaseTag'

BaseTag.install = (Vue) => {
  Vue.component(BaseTag.name, BaseTag)
}

export default BaseTag
