<template>
  <base-button
    icon="arrow-right"
    :icon-size="12"
    :disabled="isDisabled"
    :class="className"
    @click="onNext">
    <template v-if="text">{{ text }}</template>
  </base-button>
</template>

<script>
/**
 * BasePaginationNext.vue - BasePaginationNext 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseButton from '$components/BaseButton'

export default {
  name: 'BasePaginationNext',
  componentName: 'BasePaginationNext',
  components: {
    BaseButton
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 1
    },
    text: {
      type: String,
      default: 'Next'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    next() {
      const max = this.max
      const nextPage = this.page + 1
      return nextPage >= max ? max : nextPage
    },
    className() {
      return [
        'base-pagination-next',
        { 'base-pagination-next_text': this.text }
      ]
    },
    isDisabled() {
      return this.page >= this.max || this.max < 2 || this.disabled
    }
  },
  methods: {
    onNext() {
      this.$emit('next', this.next)
    }
  }
}
</script>

<style lang="less">
@import './base-pagination-next';
</style>
