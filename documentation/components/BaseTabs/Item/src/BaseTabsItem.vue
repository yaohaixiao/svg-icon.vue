<template>
  <li
    :class="className"
    @click="onTrigger">
    <span
      v-if="icon"
      class="base-tabs-item__icon">
      <svg-icon
        :name="icon"
        :size="14" />
    </span>
    <slot>{{ text }}</slot>
    <span
      v-if="(closable || editable) && !disabled"
      class="base-tabs-item__close"
      @click.stop="onRemove">
      <svg-icon
        name="close"
        :size="12" />
    </span>
  </li>
</template>

<script>
/**
 * BaseTabsItem.vue - BaseTabsItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'BaseTabsItem',
  componentName: 'BaseTabsItem',
  components: {
    SvgIcon
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeLeave: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      id: 0,
      text: ''
    }
  },
  computed: {
    isActive() {
      return this.id === this.$parent.index
    },
    isRemovable() {
      return this.closable || this.editable
    },
    className() {
      const TABS_ITEM = 'base-tabs-item'
      return [
        TABS_ITEM,
        this.isRemovable ? `${TABS_ITEM}_editable` : '',
        {
          'is-active': this.isActive,
          'is-disabled': this.disabled
        }
      ]
    }
  },
  watch: {
    index() {
      this.update()
    },
    label() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.id = this.index
      this.text = this.label
    },
    onTrigger() {
      if (this.disabled) {
        return false
      }

      this.$emit(
        'click',
        {
          label: this.label,
          value: this.value
        },
        this.id
      )
    },
    onRemove() {
      if (!this.isRemovable) {
        return false
      }

      this.$emit('remove', this.id)
    }
  }
}
</script>

<style lang="less">
@import './base-tabs-item';
</style>
