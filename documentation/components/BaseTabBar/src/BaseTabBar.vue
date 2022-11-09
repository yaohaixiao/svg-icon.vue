<template>
  <div
    class="base-tab-bar"
    :style="cssRules" />
</template>

<script>
/**
 * BaseTabBar.vue - BaseTabBar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
export default {
  name: 'BaseTabBar',
  componentName: 'BaseTabBar',
  props: {
    left: {
      type: Number,
      default: 16
    },
    width: {
      type: Number,
      default: 40
    }
  },
  computed: {
    cssRules() {
      const width = this.width
      const left = this.left

      return {
        width: `${width}px`,
        transform: `translateX(${left}px)`
      }
    }
  }
}
</script>

<style lang="less">
@import './base-tab-bar';
</style>
