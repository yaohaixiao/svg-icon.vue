<template>
  <base-button
    icon="arrow-left"
    :icon-size="12"
    :disabled="isDisabled"
    :class="className"
    @click="onPrev">
    <template v-if="text">{{ text }}</template>
  </base-button>
</template>

<script>
/**
 * BasePaginationPrev.vue - BasePaginationPrev 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseButton from '$components/BaseButton'

export default {
  name: 'BasePaginationPrev',
  componentName: 'BasePaginationPrev',
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
      default: 'Prev'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    prev() {
      const min = this.min
      const prevPage = this.page - 1
      return prevPage <= min ? min : prevPage
    },
    className() {
      return [
        'base-pagination-prev',
        { 'base-pagination-prev_text': this.text }
      ]
    },
    isDisabled() {
      return this.page <= this.min || this.max < 2 || this.disabled
    }
  },
  methods: {
    onPrev() {
      this.$emit('prev', this.prev)
    }
  }
}
</script>

<style lang="less">
@import './base-pagination-prev';
</style>
