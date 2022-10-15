<template>
  <aside :class="className">
    <slot />
  </aside>
</template>

<script>
/**
 * BaseAside.vue - Aside 侧边栏组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseAside',
  componentName: 'BaseAside',
  props: {
    width: {
      type: String,
      default: 'regular'
    },
    padding: {
      type: String,
      default: 'inner'
    },
    border: {
      type: String,
      default: 'right'
    },
    flex: {
      type: Boolean,
      default: false
    },
    background: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'base-aside',
        `base-aside_${this.width}`,
        `util-border-${this.border}`,
        `util-padding-${this.padding}`,
        {
          'base-aside--flex' : this.flex,
          'base-aside--background' : this.background,
          'base-aside--collapsed' : this.collapsed
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-aside';
</style>
