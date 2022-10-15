<template>
  <div class="usage-case-tips">
    <div class="usage-case-tips__inner">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * Tips.vue - UsageCaseTips 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
export default {
  name: 'UsageCaseTips',
  componentName: 'UsageCaseTips'
}
</script>

<style scoped lang="less">
@import './tips';
</style>
