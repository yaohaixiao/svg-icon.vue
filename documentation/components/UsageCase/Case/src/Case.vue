<template>
  <div class="usage-case">
    <usage-case-header ref="header">
      <slot name="case" />
    </usage-case-header>
    <usage-case-main :expanded="folded">
      <usage-case-tips
        v-if="$slots.tips"
        ref="tips">
        <slot name="tips" />
      </usage-case-tips>
      <usage-case-code ref="code">
        <slot name="code" />
      </usage-case-code>
    </usage-case-main>
    <usage-case-footer
      ref="footer"
      :folded="folded"
      @toggle="onToggle" />
  </div>
</template>

<script>
/**
 * Case.vue - 用例展示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import UsageCaseHeader from '$components/UsageCase/Header'
import UsageCaseMain from '$components/UsageCase/Main'
import UsageCaseCode from '$components/UsageCase/Code'
import UsageCaseTips from '$components/UsageCase/Tips'
import UsageCaseFooter from '$components/UsageCase/Footer'

export default {
  name: 'UsageCase',
  componentName: 'UsageCase',
  components: {
    UsageCaseHeader,
    UsageCaseMain,
    UsageCaseCode,
    UsageCaseTips,
    UsageCaseFooter
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
@import './case';
</style>
