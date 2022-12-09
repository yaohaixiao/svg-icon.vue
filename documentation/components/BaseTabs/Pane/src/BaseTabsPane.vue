<template>
  <div
    v-show="visible"
    :class="className">
    <slot />
  </div>
</template>

<script>
/**
 * BaseTabsPane.vue - BaseTabsPane 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
export default {
  name: 'BaseTabsPane',
  componentName: 'BaseTabsPane',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return ['base-tabs-pane', { 'is-disabled': this.disabled }]
    },
    visible() {
      const $parent = this.$parent

      return this.name === $parent.index || this.label === $parent.value
    }
  },
  destroyed() {
    const $el = this.$el

    if (!$el) {
      return false
    }

    $el.parentNode.removeChild($el)
  }
}
</script>

<style lang="less">
@import './base-tabs-pane';
</style>
