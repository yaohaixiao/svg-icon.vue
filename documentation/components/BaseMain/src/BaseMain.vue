<template>
  <main
    v-if="useMainTag"
    :class="className">
    <slot />
  </main>
  <div
    v-else
    :class="className">
    <slot />
  </div>
</template>

<script>
/**
 * BaseMain.vue - Main 布局组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseMain',
  componentName: 'BaseMain',
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    useMainTag: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'none'
    },
    overflow: {
      type: String,
      default: 'auto'
    },
    direction: {
      type: String,
      default: 'row'
    }
  },
  computed: {
    className() {
      const flex = this.flex
      const direction = flex ? `util-direction-${this.direction}` : ''

      return [
        'base-main',
        `util-padding-${this.padding}`,
        `util-overflow-${this.overflow}`,
        { 'base-main--flex': flex },
        direction
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-main';
</style>
