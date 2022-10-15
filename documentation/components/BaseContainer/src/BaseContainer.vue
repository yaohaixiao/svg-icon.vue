<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script>
/**
 * BaseContainer.vue - flex 布局容器组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseContainer',
  componentName: 'BaseContainer',
  props: {
    direction: {
      type: String,
      default: 'column'
    },
    isAutoHeight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'base-container',
        `util-direction-${this.direction}`,
        { 'util-overflow-auto': this.isAutoHeight }
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-container';
</style>
