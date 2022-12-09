<template>
  <li
    :class="className"
    @click="onTrigger">
    <slot>{{ value }}</slot>
  </li>
</template>

<script>
/**
 * BasePaginationPager.vue - BasePaginationPager 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
export default {
  name: 'BasePaginationPager',
  componentName: 'BasePaginationPager',
  props: {
    page: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: 1,
      active: 1
    }
  },
  computed: {
    className() {
      return [
        'base-pagination-pager',
        {
          'base-pagination-pager--border': this.border,
          'is-active': this.value === this.active,
          'is-disabled': this.disabled
        }
      ]
    }
  },
  watch: {
    page() {
      this.update()
    },
    current() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.value = this.page
      this.active = this.current
    },
    onTrigger() {
      this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="less">
@import './base-pagination-pager';
</style>
