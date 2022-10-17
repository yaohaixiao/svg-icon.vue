<template>
  <div class="icon-cell" @click="onCopy">
    <div class="icon-cell__svg">
      <svg-icon :name="name" :size="32" />
    </div>
    <p class="icon-cell__name">
      {{ name }}
    </p>
  </div>
</template>

<script>
/**
 * IconCell.vue - Icon 示例栏组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import SvgIcon from '@/SvgIcon'

import { copyToClipboard } from '$utils/utils'

export default {
  name: 'IconCell',
  componentName: 'IconCell',
  components: {
    SvgIcon
  },
  props: {
    symbol: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name: ''
    }
  },
  watch: {
    symbol() {
      this.update()
    }
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      const keys = this.symbol.match(/icon-(\w+(-\w+)*)+/)

      this.name = keys[1]
    },
    onCopy() {
      copyToClipboard(this.name)
      this.$message.success({
        round: true,
        message: `图标名称“${this.name}”已复制到粘贴板中`
      })
    }
  }
}
</script>

<style lang="less">
@import './icon-cell';
</style>
