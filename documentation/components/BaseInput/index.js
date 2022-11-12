/**
 * index.js - BaseInput 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.12
 */
import BaseInput from './src/BaseInput'

BaseInput.install = function (Vue) {
  Vue.component(BaseInput.name, BaseInput)
}

export default BaseInput
