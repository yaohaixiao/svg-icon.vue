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
 * Update: 2022.10.18
 */
export default {
  name: 'SvgIcon',
  componentName: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number, Array],
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
    width() {
      const size = this.size
      return Array.isArray(size) ? size[0] : size
    },
    height() {
      const size = this.size
      return Array.isArray(size) ? size[1] : size
    },
    cssRules() {
      const color = this.color

      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        color
      }
    }
  }
}
</script>

<style>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  overflow: hidden;
}
</style>
