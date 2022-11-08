<template>
  <div
    :class="['the-cart', { 'is-hidden': !isOpen }]"
    @click="onToggle">
    <div class="the-cart__icon">
      <svg-icon
        name="put-on"
        :size="30" />
    </div>
    <sup class="the-cart__count">{{ count }}</sup>
  </div>
</template>

<script>
/**
 * TheCart.vue - 购物车组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.08
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'TheCart',
  componentName: 'TheCart',
  components: {
    SvgIcon
  },
  props: {
    icons: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    count() {
      return this.icons.length
    }
  },
  mounted() {
    const $el = this.$el
    const $body = document.body

    $body.appendChild($el)

    this.$subscribe('show:cart', this.toggle)
  },
  beforeDestroy() {
    this.$unsubscribe('show:cart', this.toggle)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    show() {
      this.$broadcast('show:drawer')
    },
    hide() {
      this.$broadcast('hide:drawer')
    },
    onToggle() {
      this.toggle()

      if (this.isOpen) {
        setTimeout(() => {
          this.hide()
        }, 300)
      } else {
        setTimeout(() => {
          this.show()
        }, 300)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './the-cart';
</style>
