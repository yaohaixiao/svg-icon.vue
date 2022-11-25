<template>
  <div
    :class="className"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
    <template v-if="isInput">
      <div
        v-if="$slots.prepend"
        class="base-input__prepend">
        <slot name="prepend" />
      </div>
      <span
        v-if="$slots.prefix || prefixIcon"
        class="dev-input__prefix">
        <slot name="prefix"></slot>
        <span
          v-if="prefixIcon"
          class="dev-input__icon">
          <svg-icon
            :name="prefixIcon"
            :size="14" />
        </span>
      </span>
      <input
        v-if="isInput"
        ref="input"
        v-bind="$attrs"
        :value="value"
        :name="name"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :autofocus="autofocus"
        :min="min"
        :max="max"
        :step="step"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="isDisabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :aria-label="label"
        :tabindex="tabindex"
        :class="inputClassName"
        @compositionstart="onCompositionStart"
        @compositionupdate="onCompositionUpdate"
        @compositionend="onCompositionEnd"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange" />
      <span
        v-if="isSuffixVisible()"
        :class="['base-input__suffix', { 'overflow-visible': isClearVisible }]">
        <slot name="suffix"></slot>
        <span
          v-if="suffixIcon"
          class="base-input__icon">
          <svg-icon
            :name="suffixIcon"
            :size="14" />
        </span>
        <span
          v-if="isClearVisible"
          class="base-input__icon is-clear"
          @mousedown.prevent
          @click="onClear">
          <svg-icon
            name="circle-error"
            :size="14" />
        </span>
        <span
          v-if="isTogglePasswordVisible"
          class="base-input__icon"
          @click="onTogglePassword">
          <svg-icon
            :name="passwordVisible ? 'invisible' : 'visible'"
            :size="14" />
        </span>
      </span>
      <span
        v-if="isWordLimitVisible"
        class="base-input__count">
        {{ textLength }} / {{ limitLength }}
      </span>
      <div
        v-if="$slots.append"
        class="base-input__append">
        <slot name="append" />
      </div>
    </template>
    <template v-if="isTextarea">
      <textarea
        ref="textarea"
        v-bind="$attrs"
        :value="value"
        :name="name"
        :rows="rows"
        :minlength="minlength"
        :maxlength="maxlength"
        :disabled="isDisabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :aria-label="label"
        :tabindex="tabindex"
        :class="textareaClassName"
        @compositionstart="onCompositionStart"
        @compositionupdate="onCompositionUpdate"
        @compositionend="onCompositionEnd"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"></textarea>
      <span
        v-if="isWordLimitVisible"
        class="base-textarea__count">
        {{ textLength }} / {{ limitLength }}
      </span>
    </template>
  </div>
</template>

<script>
/**
 * BaseInput.vue - BaseInput 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.12
 */
import SvgIcon from '@/SvgIcon'

import { debounce } from '$utils/utils'

export default {
  name: 'BaseInput',
  componentName: 'BaseInput',
  components: {
    SvgIcon
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    form: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'input'
    },
    tabindex: {
      type: [String, Number],
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    maxlength: {
      type: Number,
      default: null
    },
    autosize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    size: {
      type: String,
      default: 'regular'
    },
    resize: {
      type: String,
      default: 'none'
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hovering: false,
      focused: false,
      passwordVisible: false,
      isComposing: false
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
    className() {
      const $slots = this.$slots
      const $append = $slots.append
      const $prepend = $slots.prepend
      const isInput = this.isInput

      return [
        {
          'base-input': isInput,
          'base-input_auto':
            this.isInput && this.autosize && !$append && !$prepend,
          'base-textarea': this.isTextarea,
          'base-textarea_auto': this.isTextarea && this.autosize,
          'base-input_append': $append,
          'base-input_prepend': $prepend,
          'base-input_prefix': $slots.prefix || this.prefixIcon,
          'base-input_suffix':
            $slots.suffix ||
            this.suffixIcon ||
            this.clearable ||
            this.showPassword,
          'is-disabled': this.isDisabled,
          'is-hovering': this.hovering,
          'is-exceed': this.isExceed
        },
        isInput ? `base-input_${this.fieldSize}` : ''
      ]
    },
    fieldSize() {
      const formItem = this.formItem
      let size = this.size

      if (formItem && formItem.fieldSize) {
        size = formItem.fieldSize
      }

      return size
    },
    inputClassName() {
      const $slots = this.$slots
      const $append = $slots.append
      const $prepend = $slots.prepend

      return [
        'base-input__inner',
        {
          'base-input__inner_append': $append,
          'base-input__inner_prepend': $prepend,
          'base-input__inner_auto': this.autosize && !$append && !$prepend,
          'is-disabled': this.isDisabled
        }
      ]
    },
    textareaClassName() {
      return [
        'base-textarea__inner',
        {
          'base-textarea__inner_auto': this.autosize,
          'is-disabled': this.isDisabled
        }
      ]
    },
    limitLength() {
      return this.maxlength
    },
    textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    isExceed() {
      return this.isWordLimitVisible && this.textLength > this.limitLength
    },
    isTextarea() {
      return this.type === 'textarea'
    },
    isInput() {
      return !this.isTextarea
    },
    isDisabled() {
      const formItem = this.formItem
      let disabled = this.disabled

      if (formItem && formItem.isDisabled) {
        disabled = formItem.isDisabled
      }

      return disabled
    },
    isClearVisible() {
      return (
        this.clearable &&
        !this.isDisabled &&
        !this.readonly &&
        this.value &&
        (this.focused || this.hovering)
      )
    },
    isTogglePasswordVisible() {
      return (
        this.showPassword &&
        !this.isDisabled &&
        !this.readonly &&
        (!!this.value || this.focused)
      )
    },
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.limitLength &&
        (this.type === 'text' || this.isTextarea) &&
        !this.isDisabled &&
        !this.readonly &&
        !this.showPassword
      )
    }
  },
  methods: {
    isSuffixVisible() {
      return (
        this.$slots.suffix ||
        this.suffixIcon ||
        this.isClearVisible ||
        this.showPassword
      )
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea
    },
    focus() {
      this.focused = true
      this.getInput().focus()
    },
    blur() {
      this.focused = false
      this.getInput().blur()
    },
    select() {
      this.focused = true
      this.getInput().select()
    },
    clear() {
      const field = this.formItem

      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')

      this.$broadcast('field:change', { field })
    },
    change(value) {
      const field = this.formItem

      this.$emit('input', value)
      this.$emit('change', value)

      this.$broadcast('field:change', { field })
    },
    onMouseEnter() {
      this.hovering = true
    },
    onMouseLeave() {
      this.hovering = false
    },
    onTogglePassword() {
      this.passwordVisible = !this.passwordVisible
    },
    onCompositionStart(evt) {
      this.$emit('compositionstart', evt)
      this.isComposing = true
    },
    onCompositionUpdate(evt) {
      this.$emit('compositionupdate', evt)
      this.isComposing = true
    },
    onCompositionEnd(evt) {
      this.$emit('compositionend', evt)
      if (this.isComposing) {
        this.isComposing = false
        // this.onInput(evt)
      }
    },
    onFocus(evt) {
      this.focused = true
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      const field = this.formItem

      this.focused = false
      this.$emit('blur', evt)

      this.$nextTick(() => {
        this.$broadcast('field:blur', { field })
      })
    },
    onClear() {
      this.clear()
    },
    onInput: debounce(function (evt) {
      // 在输入过程中不触发 input 方法
      if (this.isComposing) {
        return false
      }
      this.onChange(evt)
    }, 300),
    onChange(evt) {
      const value = evt.target.value

      this.change(value)
    }
  }
}
</script>

<style lang="less">
@import './base-input';
</style>
