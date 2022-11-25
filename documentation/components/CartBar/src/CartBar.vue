<template>
  <div
    id="cart"
    :class="['cart-bar', { 'is-hidden': !isShow }]"
    @click="onToggle">
    <div class="cart-bar__icon">
      <svg-icon
        name="put-on"
        :size="30" />
    </div>
    <sup class="cart-bar__count">{{ count }}</sup>
  </div>
</template>

<script>
/**
 * CartBar.vue - 购物车组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.08
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'CartBar',
  componentName: 'CartBar',
  components: {
    SvgIcon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShow: true,
      collections: []
    }
  },
  computed: {
    count() {
      return this.collections.length
    }
  },
  watch: {
    items() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  mounted() {
    const $cart = document.querySelector('#cart')
    const $body = document.body

    $body.appendChild($cart)

    this.$subscribe('show:cart', this.show)
  },
  beforeDestroy() {
    this.$unsubscribe('show:cart', this.show)
  },
  methods: {
    update() {
      this.collections = [...this.items]
    },
    toggle() {
      this.isShow = !this.isShow
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
    onToggle() {
      this.toggle()

      if (this.isShow) {
        setTimeout(() => {
          this.$broadcast('hide:drawer')
        }, 300)
      } else {
        setTimeout(() => {
          this.$broadcast('show:drawer')
        }, 300)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-bar';
</style>
