<template>
  <div
    aria-label="breadcrumb"
    role="navigation"
    class="breadcrumb-nav">
    <slot />
  </div>
</template>

<script>
/**
 * BreadcrumbNav.vue - 面包屑导航组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
export default {
  name: 'BreadcrumbNav',
  componentName: 'BreadcrumbNav',
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
      BreadcrumbNav: this
    }
  }
}
</script>

<style lang="less">
@import './breadcrumb-nav';
</style>
