<template>
  <div class="dev-pagination-total">
    共
    <em class="dev-pagination-total__count">{{ total }}</em>
    条
  </div>
</template>

<script>
/**
 * BasePaginationTotal.vue - BasePaginationTotal 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
export default {
  name: 'BasePaginationTotal',
  componentName: 'BasePaginationTotal',
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="less">
@import './base-pagination-total';
</style>
