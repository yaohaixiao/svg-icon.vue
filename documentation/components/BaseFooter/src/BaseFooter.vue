<template>
  <footer :class="className">
    <slot />
  </footer>
</template>

<script>
/**
 * BaseFooter.vue - 页脚容器组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseFooter',
  componentName: 'BaseFooter',
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    padding: {
      type: String,
      default: 'outer'
    },
    height: {
      type: String,
      default: 'auto'
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    className() {
      const align = this.align
      const flex = this.flex
      const height = this.height
      const padding = this.padding
      const border = this.border

      return [
        'base-footer',
        {
          'base-footer--flex': flex,
          'util-border-top': border
        },
        `util-height-${height}`,
        `util-padding-${padding}`,
        `util-align-${align}`
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-footer';
</style>
