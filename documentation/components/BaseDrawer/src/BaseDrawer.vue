<template>
  <div
    :class="['base-drawer', { 'base-drawer_opened': visible }]"
    :style="cssRules">
    <base-container :class="className">
      <div
        v-if="showClose"
        class="base-drawer__close"
        @click="onClose">
        <svg-icon
          name="close"
          :size="20" />
      </div>
      <slot name="header">
        <base-header
          v-if="title"
          flex
          align="left"
          height="outer"
          padding="inner"
          :border="false">
          <h2 class="base-drawer__title">
            {{ title }}
            <span class="base-drawer__icon">
              <slot name="icon" />
            </span>
          </h2>
          <div class="base-drawer__help">
            <slot name="help" />
          </div>
        </base-header>
      </slot>
      <base-main
        padding="inner"
        :class="{ 'base-drawer__main': !title && buttons.length < 1 }">
        <slot />
      </base-main>
      <slot name="footer">
        <base-footer
          v-if="buttons.length > 0"
          :align="align"
          padding="inner"
          :border="false">
          <base-button
            v-for="button in buttons"
            :key="button.name"
            size="regular"
            :icon="button.icon"
            :type="button.type"
            :disabled="button.disabled || locked"
            :loading="locked && button.name === action"
            @click="onTrigger(button)">
            {{ button.text }}
          </base-button>
        </base-footer>
      </slot>
    </base-container>
    <div
      class="base-drawer__overlay"
      @click="onOverlayClick" />
  </div>
</template>

<script>
/**
 * BaseDrawer.vue - 侧滑弹窗组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.8
 */
import BaseContainer from 'components/BaseContainer'
import BaseHeader from 'components/BaseHeader'
import BaseFooter from 'components/BaseFooter'
import BaseMain from 'components/BaseMain'

import BaseButton from 'components/BaseButton'
import SvgIcon from '@/SvgIcon'

import Popper from '$utils/popper'

import { isString, isFunction } from '$utils/typeof'

export default {
  name: 'DevDrawer',
  componentName: 'DevDrawer',
  components: {
    BaseContainer,
    BaseHeader,
    BaseFooter,
    BaseMain,
    BaseButton,
    SvgIcon
  },
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: null
    },
    title: {
      type: String,
      default: '标题'
    },
    direction: {
      type: String,
      default: 'rtl',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      }
    },
    size: {
      type: String,
      default: 'regular'
    },
    padding: {
      type: String,
      default: 'inner'
    },
    shorter: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => []
    },
    overlayClosable: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      zIndex: 3,
      timer: null,
      action: '',
      visible: false,
      opening: false,
      closed: true,
      closing: false,
      locked: false,
      $content: null
    }
  },
  computed: {
    align() {
      const direction = this.direction

      switch (direction) {
        case 'rtl':
        case 'ltr':
          return 'right'
        case 'ttb':
        case 'btt':
          return 'center'
        default:
          return 'left'
      }
    },
    className() {
      const size = this.size
      const direction = this.direction
      const shorter = this.shorter
      const closed = this.closed
      const customClass = this.customClass
      const visible = this.visible

      return [
        'base-drawer__modal',
        `base-drawer_${size}`,
        `base-drawer_${direction}`,
        { 'base-drawer_shorter': shorter },
        `${customClass}`,
        { 'base-drawer_closed': closed },
        { 'base-drawer_opened': visible }
      ]
    },
    cssRules() {
      let rules = null

      if (this.appendToBody && this.visible) {
        rules = {
          zIndex: this.zIndex
        }
      }

      return rules
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        this.zIndex = Popper.nextZIndex()
      } else {
        this.zIndex = Popper.prevZIndex()
      }
    }
  },
  mounted() {
    if (this.appendToBody) {
      document.body.appendChild(this.$el)
    }

    this.$content = this.getContent()
  },
  destroyed() {
    const $wrapper = this.$el

    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }

    // 移除 DOM
    if (this.appendToBody && $wrapper && $wrapper.parentNode) {
      $wrapper.parentNode.removeChild($wrapper)
    }
  },
  methods: {
    getContent() {
      return this.$slots.default[0]
    },
    lock() {
      this.locked = true
      this.$emit('lock')
    },
    unlock() {
      this.locked = false
      this.$emit('unlock')
    },
    open() {
      const $content = this.$content
      const componentInstance = $content.componentInstance
      const open = componentInstance && componentInstance.onOpen

      if (this.closing) {
        return false
      }

      this.visible = true
      this.closed = false
      this.opening = true

      // 执行 $slots.default 中，子组件的 onOpen 初始化方法
      if (open && isFunction(open)) {
        open()
      }
      this.$emit('open')

      // 展开动画结束，触发 opened 事件
      this.timer = setTimeout(() => {
        this.$emit('opened')
        this.opening = false
      }, 400)
    },
    close() {
      const $content = this.$content
      const componentInstance = $content.componentInstance
      const close = componentInstance && componentInstance.onClose

      // 执行 $slots.default 中，子组件的 onClose 关闭时方法
      if (close && isFunction(close)) {
        close()
      }
      this.closed = true
      this.$emit('close')

      // 收起动画结束，触发 closed 事件
      this.timer = setTimeout(() => {
        this.visible = false
        this.$emit('closed')
      }, 400)
    },
    onClose() {
      const beforeClose = this.beforeClose

      if (this.locked || this.opening) {
        return false
      }

      if (beforeClose && isFunction(beforeClose)) {
        beforeClose(this.close)
      } else {
        this.close()
      }
    },
    onTrigger(button) {
      const $content = this.$content
      const name = button.name
      // 获取 buttons 参数中的按钮回调函数
      let callback =
        button.action || `on${name[0].toUpperCase()}${name.slice(1)}`

      this.action = name

      // 如果 callback 只是一个函数名字符串
      if (isString(callback)) {
        // 在 $slots.default 子组件中查找对应名称的方法
        if ($content && $content.componentInstance) {
          callback = $content.componentInstance[callback]
        } else {
          callback = null
        }
      }

      // 锁定界面，直到回调函数执行完成
      this.lock()

      // 执行回调函数
      if (isFunction(callback)) {
        let fn = callback()

        if (fn && fn.then && isFunction(fn.then)) {
          fn.then(() => {
            this.unlock()
            this.close()
          }).catch(() => {
            this.unlock()
          })
        } else {
          this.unlock()
          this.close()
        }
      } else {
        // 如果按钮没有任何回调方法，则解除锁定，关闭 BaseDrawer
        this.unlock()
        this.close()
      }
    },
    onOverlayClick() {
      if (!this.overlayClosable) {
        return false
      }

      this.onClose()
    }
  }
}
</script>

<style lang="less">
@import './base-drawer';
</style>
