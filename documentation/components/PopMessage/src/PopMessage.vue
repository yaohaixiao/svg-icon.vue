<template>
  <div
    ref="wrapper"
    :class="className"
    :style="cssRules"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
    <span
      v-if="!isPlain"
      ref="icon"
      class="pop-message__icon">
      <svg-icon
        :name="iconName"
        :size="iconSize"
      />
    </span>
    <p
      v-if="!dangerouslyUseHTMLString"
      ref="content"
      class="pop-message__content">
      <slot>{{ message }}</slot>
    </p>
    <p
      v-else
      ref="content"
      class="pop-message__content"
      v-html="message"></p>
    <span
      v-if="closable"
      ref="close"
      class="pop-message__close"
      @click="onClose">
      <svg-icon
        name="close"
        :size="18"
      />
    </span>
  </div>
</template>

<script>
/**
 * PopMessage.vue - 弹出消息组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.9
 */
import SvgIcon from '@/SvgIcon'
import { isFunction } from '$utils/typeof'

const TYPES = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  name: 'PopMessage',
  componentName: 'PopMessage',
  components: {
    SvgIcon
  },
  data() {
    return {
      id: 1,
      timer: null,
      type: 'info',
      round: false,
      theme: '',
      duration: 5,
      delay: 2,
      message: '',
      beforeClose: null,
      closable: true,
      customClass: '',
      offset: 30,
      visible: false,
      dangerouslyUseHTMLString: false,
      closed: true
    }
  },
  computed: {
    isPlain() {
      return this.theme === 'plain'
    },
    isLight() {
      return this.theme === 'light'
    },
    isDefault() {
      return this.theme === ''
    },
    icon() {
      return TYPES[this.type]
    },
    iconName() {
      const icon = this.icon

      return this.isLight ? `circle-${icon}` : icon
    },
    iconSize() {
      const isDefault = this.isDefault
      const isRound = this.round

      if (isRound) {
        return isDefault ? 12 : 20
      } else {
        return isDefault && this.round ? 12 : 18
      }
    },
    className() {
      const type = this.type
      const theme = this.theme
      const round = this.round
      const closable = this.closable
      const visible = this.visible
      const clsTheme = theme ? `pop-message_theme_${theme}` : ''

      return [
        'pop-message',
        `pop-message_${type}`,
        clsTheme,
        {
          'pop-message--round': round,
          'pop-message--non-closeable': !closable,
          'pop-message--visible': visible
        },
        this.customClass
      ]
    },
    cssRules() {
      const visible = this.visible
      const top = visible ? this.offset : -50

      return {
        top: `${top}px`
      }
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    const $wrapper = this.$el

    $wrapper.removeEventListener('mouseenter', this.onMouseEnter)
    $wrapper.removeEventListener('mouseleave', this.onMouseLeave)

    if ($wrapper) {
      $wrapper.parentNode.removeChild($wrapper)
    }

    this.clearTimer()
  },
  methods: {
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    startTimer(duration) {
      this.timer = setTimeout(() => {
        this.close()
      }, duration * 1000)
    },
    open() {
      const duration = this.duration

      this.clearTimer()

      setTimeout(() => {
        this.closed = false
        this.visible = true

        if (duration > 0) {
          this.startTimer(this.duration)
        }
      }, 100)
    },
    close() {
      const beforeClose = this.beforeClose

      this.closed = true

      if (isFunction(beforeClose)) {
        beforeClose(this)
      }

      this.visible = false

      setTimeout(() => {
        this.remove()
      }, 500)
    },
    remove() {
      this.$destroy()
    },
    onMouseEnter() {
      this.clearTimer()
    },
    onMouseLeave() {
      const duration = this.duration

      if (duration <= 0) {
        return false
      }

      this.startTimer(this.delay)
    },
    onClose() {
      this.clearTimer()
      this.close()
    }
  }
}
</script>

<style lang="less">
@import './pop-message';
</style>
