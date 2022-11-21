<template>
  <div
    v-if="visible"
    :class="className">
    <span
      v-if="textAlign === 'left'"
      class="base-tips__icon">
      <svg-icon :name="icon" />
    </span>
    <p
      :class="[
        'base-tips__text',
        { 'is-disallowed': !userSelect },
        { 'full-width': !closeable }
      ]">
      <template v-if="text">
        <span
          v-if="textAlign === 'center'"
          class="base-tips__icon">
          <svg-icon :name="icon" />
        </span>
        {{ text }}
      </template>
      <template v-if="html">
        <span
          v-if="textAlign === 'center'"
          class="base-tips__icon">
          <svg-icon :name="icon" />
        </span>
        <span v-html="stripScripts(html)" />
      </template>
      <slot />
    </p>
    <span
      v-if="closeable"
      class="base-tips__close"
      @click="onClose">
      <svg-icon name="close" />
    </span>
  </div>
</template>

<script>
/**
 * BaseTips.vue - BaseTips 提示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.14
 */
const SvgIcon = () => import('@/SvgIcon')

import { stripScripts } from '$utils/string'

export default {
  name: 'BaseTips',
  componentName: 'BaseTips',
  components: {
    SvgIcon
  },
  props: {
    // 类型：
    // info - 普通提示
    // error - 错误提示
    // warning - 警告提示
    // success - 成功提示
    type: {
      type: String,
      default: 'warning'
    },
    // 文本格式提示内容
    text: {
      type: String,
      default: ''
    },
    // HTML格式提示内容
    html: {
      type: String,
      default: ''
    },
    // 提示图标名称
    icon: {
      type: String,
      default: 'tips'
    },
    effect: {
      type: String,
      default: 'light'
    },
    // 自定义 class 样式名称
    customClass: {
      type: String,
      default: ''
    },
    // 提示文本对其方式：
    // left - 左对齐
    // center - 居中对齐
    // right - 右对其
    textAlign: {
      type: String,
      default: 'left'
    },
    // 边框是否有圆角
    radius: {
      type: Boolean,
      default: true
    },
    // 是否有边框
    border: {
      type: Boolean,
      default: true
    },
    // 是否允许用户选择提示框中的文本
    userSelect: {
      type: Boolean,
      default: false
    },
    // 是否自动关闭
    autoClose: {
      type: Boolean,
      default: false
    },
    // 自动关闭的展示时间（单位：秒）
    // 只在 autoClose 为 true 时有效
    duration: {
      type: Number,
      default: 10
    },
    // 是否显示关闭按钮
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true,
      timer: null
    }
  },
  computed: {
    className() {
      const type = this.type
      const align = this.textAlign
      const radius = this.radius
      const border = this.border
      const effect = this.effect
      const customClass = this.customClass

      return [
        'base-tips',
        `base-tips_${type}`,
        `util-align-${align}`,
        { 'with-radius': radius },
        { 'with-border': border },
        `base-tips_${effect}`,
        customClass
      ]
    }
  },
  mounted() {
    // 自动关闭
    if (this.autoClose) {
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    }
  },
  destroyed() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  },
  methods: {
    stripScripts(str) {
      return stripScripts(str)
    },
    close() {
      this.visible = false
      this.$emit('close')
    },
    onClose() {
      this.close()
    }
  }
}
</script>

<style lang="less">
@import './base-tips';
</style>
