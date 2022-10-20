<template>
  <footer
    ref="footer"
    class="usage-case-footer"
    @click="onToggle">
    <span class="usage-case-footer__icon">
      <svg-icon :name="icon" />
    </span>
    <span class="usage-case-footer__text">{{ text }}</span>
  </footer>
</template>

<script>
/**
 * Footer.vue - UsageCaseFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'UsageCaseFooter',
  componentName: 'UsageCaseFooter',
  components: {
    SvgIcon
  },
  props: {
    folded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon() {
      return this.folded ? 'arrow-down' : 'arrow-up'
    },
    text() {
      return this.folded ? '显示代码' : '隐藏代码'
    }
  },
  methods: {
    onToggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped lang="less">
@import './footer';
</style>
