<template>
  <svg
    v-if="name"
    aria-hidden="true"
    :style="cssRules"
    class="svg-icon">
    <use v-bind="binds" />
  </svg>
</template>

<script>
/**
 * SvgIcon.vue - SVG 图标显示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import { render } from './utils/utils'

render()

export default {
  name: 'SvgIcon',
  componentName: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [
        String,
        Number
      ],
      default: 16
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    binds() {
      return {
        'xlink:href': `#icon-${this.name}`
      }
    },
    cssRules() {
      const size = this.size
      const color = this.color

      return {
        width: `${size}px`,
        height: `${size}px`,
        color: color
      }
    }
  }
}
</script>

<style lang="less">
@import './svg-icon';
</style>
