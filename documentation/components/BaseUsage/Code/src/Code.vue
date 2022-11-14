<template>
  <div
    ref="code"
    class="usage-case-code">
    <span
      class="usage-case-code__copy"
      @click="onCopy">
      <svg-icon name="copy" />
      复制代码
    </span>
    <slot />
  </div>
</template>

<script>
/**
 * Code.vue - BaseUsageCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import SvgIcon from '@/SvgIcon'

import { copyToClipboard } from '$utils/utils'
import { decodeHTML } from '$utils/string'

export default {
  name: 'BaseUsageCode',
  componentName: 'BaseUsageCode',
  components: {
    SvgIcon
  },
  methods: {
    copy() {
      const $code = this.$refs.code
      const code = $code.querySelector('.article__code').innerHTML

      copyToClipboard(decodeHTML(code))
    },
    onCopy() {
      this.copy()

      this.$message.success({
        round: true,
        message: '代码已复制到粘贴板！'
      })
    }
  }
}
</script>

<style scoped lang="less">
@import './code';
</style>
