<template functional>
  <textarea
    readonly
    :value="props.code"
    class="cart-drawer__code" />
</template>

<script>
/**
 * CartDrawerCode.vue - CartDrawerCode (函数)组件
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
