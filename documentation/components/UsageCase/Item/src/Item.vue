<template>
   <div :class="className">
     <slot />
   </div>
</template>

<script>
/**
 * Item.vue - UsageCaseItem 组件
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
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    className() {
      return [
        'usage-case-item',
        `util-align-${this.align}`,
        {
          'usage-case-item--flex': this.flex
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import './item';
</style>
