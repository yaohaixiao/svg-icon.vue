<template>
  <div
    id="cart-drawer-item-clone"
    class="cart-drawer-item-clone"
    v-html="content"
    :style="cssRules"></div>
</template>

<script>
/**
 * CartDrawerItemClone.vue - CartDrawerItemClone 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.10
 */
const $body = document.body

export default {
  name: 'CartDrawerItemClone',
  componentName: 'CartDrawerItemClone',
  data() {
    return {
      content: '',
      visible: false,
      pageX: 0,
      pageY: 0
    }
  },
  computed: {
    cssRules() {
      return {
        top: `${this.pageY - 20}px`,
        left: `${this.pageX - 20}px`,
        display: this.visible ? 'block' : 'none'
      }
    }
  },
  mounted() {
    $body.appendChild(this.$el)

    $body.addEventListener('mouseover', this.onMouseMove.bind(this))
    this.$subscribe('fill:clone', this.fill)
    this.$subscribe('show:clone', this.show)
    this.$subscribe('hide:clone', this.hide)
  },
  beforeDestroy() {
    $body.removeEventListener('mouseover', this.onMouseMove.bind(this))
    this.$unsubscribe('fill:clone', this.fill)
    this.$unsubscribe('show:clone', this.show)
    this.$unsubscribe('hide:clone', this.hide)
  },
  methods: {
    fill(content) {
      this.content = content
    },
    show() {
      this.visible = true
      console.log('show')
    },
    hide() {
      this.visible = false
    },
    onMouseMove(evt) {
      console.log(evt)
      this.pageX = evt.screenX
      this.pageY = evt.screenY
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-drawer-item-clone';
</style>
