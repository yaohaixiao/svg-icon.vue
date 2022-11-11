<template>
  <div class="base-usage-tips">
    <div class="base-usage-tips__inner">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * Tips.vue - BaseUsageTips 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
export default {
  name: 'BaseUsageTips',
  componentName: 'BaseUsageTips'
}
</script>

<style scoped lang="less">
@import './tips';
</style>
