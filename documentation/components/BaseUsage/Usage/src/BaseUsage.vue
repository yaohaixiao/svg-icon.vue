<template>
  <div class="base-usage">
    <base-usage-header ref="header">
      <slot name="case" />
    </base-usage-header>
    <base-usage-main :expanded="folded">
      <base-usage-tips
        v-if="$slots.tips"
        ref="tips">
        <slot name="tips" />
      </base-usage-tips>
      <base-usage-code ref="code">
        <slot name="code" />
      </base-usage-code>
    </base-usage-main>
    <base-usage-footer
      ref="footer"
      :folded="folded"
      @toggle="onToggle" />
  </div>
</template>

<script>
/**
 * BaseUsage.vue - 用例展示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import BaseUsageHeader from '$components/BaseUsage/Header'
import BaseUsageMain from '$components/BaseUsage/Main'
import BaseUsageCode from '$components/BaseUsage/Code'
import BaseUsageTips from '$components/BaseUsage/Tips'
import BaseUsageFooter from '$components/BaseUsage/Footer'

export default {
  name: 'BaseUsage',
  componentName: 'BaseUsage',
  components: {
    BaseUsageHeader,
    BaseUsageMain,
    BaseUsageCode,
    BaseUsageTips,
    BaseUsageFooter
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      folded: true
    }
  },
  watch: {
    expanded() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.folded = !this.expanded
    },
    onToggle() {
      this.folded = !this.folded
    }
  }
}
</script>

<style lang="less">
@import './base-usage';
</style>
