<template>
  <div
    aria-label="breadcrumb"
    role="navigation"
    class="base-breadcrumb">
    <slot />
  </div>
</template>

<script>
/**
 * BaseBreadcrumb.vue - 面包屑导航组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BaseBreadcrumb',
  componentName: 'BaseBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  },
  provide() {
    return {
      BaseBreadcrumb: this
    }
  }
}
</script>

<style lang="less">
@import './base-breadcrumb';
</style>
