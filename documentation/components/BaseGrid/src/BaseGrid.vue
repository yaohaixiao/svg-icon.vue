<template>
  <div
    :style="cssRules"
    class="base-grid">
    <slot />
  </div>
</template>

<script>
/**
 * BaseGrid.vue - Grid 布局组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseGrid',
  componentName: 'BaseGrid',
  props: {
    padding: {
      type: String,
      // none: 0
      // regular: 0 10px
      // inner: 0 16px
      // outer: 0 20px
      default: 'none'
    },
    columns: {
      type: Number,
      default: 4
    },
    gap: {
      type: Number,
      default: 20
    },
    overflow: {
      type: String,
      default: 'hidden'
    }
  },
  computed: {
    cssRules() {
      const columns = this.columns
      const gap = this.gap

      return (
        'grid-template-columns:repeat(' + columns + ', 1fr);gap:' + gap + 'px'
      )
    }
  }
}
</script>

<style lang="less">
@import './base-grid';
</style>
