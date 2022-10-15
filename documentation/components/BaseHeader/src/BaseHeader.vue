<template>
  <header :class="className">
    <slot />
  </header>
</template>

<script>
/**
 * BaseHeader.vue - 页头容器组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseHeader',
  componentName: 'BaseHeader',
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
      return [
        'base-header',
        {
          'base-header--flex': this.flex,
          'util-border-bottom': this.border
        },
        `util-height-${this.height}`,
        `util-padding-${this.padding}`,
        `util-align-${this.align}`
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-header';
</style>
