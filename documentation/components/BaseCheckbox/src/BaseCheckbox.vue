<template>
  <div
    :role="role"
    :tabindex="tabindex"
    :aria-checked="checked || null"
    :class="className"
    @click="onCheck">
    <div :class="inputClassName">
      <div :class="innerClassName">
        <template v-if="checked">
          <svg-icon
            v-if="!indeterminate"
            name="success"
            :size="10" />
        </template>
      </div>
      <input
        ref="checkbox"
        type="checkbox"
        :name="name"
        :value="value"
        :aria-hidden="true"
        :aria-disabled="isDisabled"
        :tabindex="-1"
        autocomplete="off"
        class="base-checkbox__original"
        @focus="onFocus"
        @blur="onBlur" />
    </div>
    <label class="base-checkbox__label">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
import SvgIcon from '@/SvgIcon'

import { isBoolean } from '$utils/typeof'

const isCheckboxGroup = ($parent) => {
  return $parent && $parent.role === 'checkbox-group'
}

export default {
  name: 'BaseCheckbox',
  componentName: 'BaseCheckbox',
  components: {
    SvgIcon
  },
  props: {
    value: {
      type: [Number, String, Boolean],
      default: ''
    },
    label: {
      type: [Number, String, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      role: 'checkbox',
      focused: false
    }
  },
  inject: {
    form: {
      default: ''
    },
    formItem: {
      default: ''
    },
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    className() {
      const checked = this.checked

      return [
        'base-checkbox',
        { 'is-checked': checked },
        { 'is-indeterminate': checked && this.indeterminate },
        { 'is-disabled': this.isDisabled }
      ]
    },
    checked() {
      const $parent = this.$parent
      let value = this.value

      if (isCheckboxGroup($parent)) {
        value = [...$parent.value]
        return value.indexOf(this.label) > -1
      } else {
        return value === true
      }
    },
    isDisabled() {
      const formItem = this.formItem
      const $parent = this.$parent
      const checked = this.checked
      const max = this.max
      const min = this.min
      let value = this.disabled
      let selected = []

      if (formItem && formItem.isDisabled) {
        return formItem.isDisabled
      }

      if (isCheckboxGroup($parent)) {
        selected = $parent.value

        return (
          value ||
          $parent.disabled ||
          (min > 0 && selected.length === min && checked) ||
          (max > 0 && selected.length === max && !checked)
        )
      }

      return value
    },
    min() {
      const $parent = this.$parent
      let val = 0

      if (isCheckboxGroup($parent)) {
        val = $parent.min
      }

      return val
    },
    max() {
      const $parent = this.$parent
      let val = 0

      if (isCheckboxGroup($parent)) {
        val = $parent.max
      }

      return val
    },
    inputClassName() {
      return [
        'base-checkbox__input',
        { 'is-checked': this.checked },
        { 'is-disabled': this.isDisabled }
      ]
    },
    innerClassName() {
      const checked = this.checked

      return [
        'base-checkbox__inner',
        { 'is-checked': checked },
        { 'is-indeterminate': checked && this.indeterminate },
        { 'is-disabled': this.isDisabled }
      ]
    }
  },
  methods: {
    focus() {
      this.$refs.checkbox.focus()
    },
    blur() {
      this.$refs.checkbox.blur()
    },
    check() {
      const field = this.formItem
      const value = this.value
      const $parent = this.$parent
      let checked = []

      if (isCheckboxGroup($parent)) {
        checked = [...$parent.value]
        checked.push(this.label)

        $parent.$emit('input', checked)
      } else {
        this.$broadcast('field:change', { field })
      }

      if (!isBoolean(value)) {
        return false
      }

      this.$emit('input', !value)
      this.$emit('change', !value)
    },
    uncheck() {
      const field = this.formItem
      const isIndeterminate = this.indeterminate
      const value = this.value
      const $parent = this.$parent
      let index = -1
      let checked = []

      if (isCheckboxGroup($parent)) {
        checked = [...$parent.value]
        index = checked.indexOf(this.label)

        if (index === -1) {
          return false
        }

        checked.splice(index, 1)
        $parent.$emit('input', checked)
      } else {
        this.$broadcast('field:change', { field })
      }

      if (!isBoolean(value)) {
        return false
      }

      this.$emit('input', isIndeterminate ? value : !value)
      this.$emit('change', isIndeterminate ? value : !value)
    },
    toggle() {
      if (this.checked) {
        this.uncheck()
      } else {
        this.check()
      }
    },
    onFocus(evt) {
      this.focused = true
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      const $parent = this.$parent
      const field = this.formItem

      this.focused = false
      this.$emit('blur', evt)

      if (!isCheckboxGroup($parent)) {
        this.$broadcast('field:blur', { field })
      }
    },
    onCheck() {
      if (this.isDisabled) {
        return false
      }

      this.toggle()
    }
  }
}
</script>

<style lang="less">
@import './base-checkbox';
</style>
