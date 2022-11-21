<template>
  <button
    :type="nativeType"
    :autofocus="autofocus"
    :disabled="isDisabled"
    :class="className"
    @click="onClick">
    <svg-icon
      v-if="icon || loading"
      :name="loading ? 'is-loading' : icon"
      :size="size === 'mini' ? 12 : iconSize"
      :class="['base-button__icon', { loading: loading }]" />
    <span
      v-if="$slots.default"
      class="base-button__inner">
      <slot />
    </span>
    <template v-else>
      <span
        v-if="!circle && loading && loadingText"
        class="base-button__inner">
        {{ loadingText }}
      </span>
    </template>
  </button>
</template>

<script>
/**
 * BaseButton.vue - 按钮组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.8
 */
const SvgIcon = () => import('@/SvgIcon')

export default {
  name: 'BaseButton',
  componentName: 'BaseButton',
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'regular'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 16
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  inject: {
    form: {
      default: ''
    },
    formItem: {
      default: ''
    }
  },
  computed: {
    isDisabled() {
      const formItem = this.formItem
      return (formItem && formItem.isDisabled) || this.disabled || this.loading
    },
    className() {
      const type = this.type
      const plain = this.plain
      const round = this.round
      const circle = this.circle
      const size = this.size
      const isDisabled = this.isDisabled

      return [
        'base-button',
        `base-button_${type}`,
        type !== 'text' ? `base-button_${size}` : '',
        {
          'base-button_round': round,
          'base-button_circle': circle,
          'base-button_plain': plain,
          'is-disabled': isDisabled
        }
      ]
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
@import './base-button';
</style>
