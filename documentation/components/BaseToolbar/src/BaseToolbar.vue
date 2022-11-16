<template>
  <div :class="className">
    <div
      v-if="$scopedSlots.left"
      class="base-toolbar__left">
      <slot name="left" />
    </div>
    <slot name="breadcrumb" />
    <slot name="tabs" />
    <slot />
    <div
      v-if="$scopedSlots.right"
      class="base-toolbar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
/**
 * BaseToolbar.vue - BaseToolbar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.15
 */
export default {
  name: 'BaseToolbar',
  componentName: 'BaseToolbar',
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'inner'
    },
    height: {
      type: String,
      default: 'auto'
    },
    textAlign: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    className() {
      return [
        'base-toolbar',
        `base-toolbar--${this.flex ? 'flex' : 'static'}`,
        {
          'util-border-bottom': this.border
        },
        `util-height-${this.height}`,
        `util-padding-${this.padding}`,
        `util-align-${this.textAlign}`
      ]
    }
  }
}
</script>

<style lang="less">
@import './base-toolbar';
</style>
