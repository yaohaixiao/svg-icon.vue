<template>
  <div
    :class="className"
    @click.stop="onTrigger">
    <p class="base-tag__text">
      <slot />
    </p>
    <span
      v-if="closable"
      class="base-tag__close"
      @click.stop="onClose">
      <svg-icon
        name="close"
        :size="11" />
    </span>
  </div>
</template>

<script>
/**
 * BaseTag.vue - BaseTag 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.14
 */
const SvgIcon = () => import('@/SvgIcon')

export default {
  name: 'BaseTag',
  componentName: 'BaseTag',
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    size: {
      type: String,
      default: 'regular'
    },
    effect: {
      type: String,
      default: 'light'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      const type = this.type
      const size = this.size
      const effect = this.effect
      const closable = this.closable

      return [
        'base-tag',
        `base-tag_${type}`,
        `base-tag_${size}`,
        `base-tag_${effect}`,
        { 'is-closable': closable }
      ]
    }
  },
  methods: {
    click() {
      this.$emit('click')
    },
    close() {
      this.$emit('close')
    },
    onClose() {
      this.close()
    },
    onTrigger() {
      this.click()
    }
  }
}
</script>

<style lang="less">
@import './base-tag';
</style>
