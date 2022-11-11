<template>
  <header :class="className">
    <h2
      v-if="$scopedSlots.title"
      class="base-header__title">
      <slot name="title" />
    </h2>
    <div
      v-if="$scopedSlots.start"
      class="base-header__start">
      <slot name="start" />
    </div>
    <slot name="breadcrumb" />
    <slot name="tabs" />
    <slot />
    <div
      v-if="$scopedSlots.toolbar || $scopedSlots.filter || $scopedSlots.actions"
      :class="['base-header__toolbar', `base-header__toolbar_${padding}`]">
      <slot name="toolbar" />
      <slot name="filter" />
      <slot name="actions" />
    </div>
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
    textAlign: {
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
          'base-header--static': !this.flex,
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
@import './base-header';
</style>
