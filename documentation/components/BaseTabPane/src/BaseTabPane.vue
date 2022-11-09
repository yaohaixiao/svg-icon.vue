<template>
  <div
    v-show="visible"
    :class="className">
    <slot />
  </div>
</template>

<script>
/**
 * BaseTabPane.vue - BaseTabPane 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
export default {
  name: 'BaseTabPane',
  componentName: 'BaseTabPane',
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
      return ['base-tab-pane', { 'is-disabled': this.disabled }]
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
@import './base-tab-pane';
</style>
