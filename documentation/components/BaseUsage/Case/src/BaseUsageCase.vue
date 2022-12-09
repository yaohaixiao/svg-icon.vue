<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script>
/**
 * UsageCaseItem.vue - UsageCaseItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
export default {
  name: 'UsageCaseItem',
  componentName: 'UsageCaseItem',
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    className() {
      return [
        'base-usage-case',
        `util-align-${this.textAlign}`,
        {
          'base-usage-case--flex': this.flex
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import './base-usage-case';
</style>
