<template>
  <textarea
    readonly
    :value="code"
    class="cart-drawer-code" />
</template>

<script>
/**
 * CartDrawerCode.vue - CartDrawerCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
export default {
  name: 'CartDrawerCode',
  componentName: 'CartDrawerCode',
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-drawer-code';
</style>
