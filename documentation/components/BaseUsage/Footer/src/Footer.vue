<template>
  <footer
    ref="footer"
    class="base-usage-footer"
    @click="onToggle">
    <span class="base-usage-footer__icon">
      <svg-icon :name="icon" />
    </span>
    <span class="base-usage-footer__text">{{ text }}</span>
  </footer>
</template>

<script>
/**
 * Footer.vue - BaseUsageFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'BaseUsageFooter',
  componentName: 'BaseUsageFooter',
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
