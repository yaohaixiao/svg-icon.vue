<template>
  <div
    :class="['icon-cell', { 'is-checked': isChecked }]"
    @click="onCopy">
    <div class="icon-cell__svg">
      <svg-icon
        :name="name"
        :size="32" />
    </div>
    <p class="icon-cell__name">
      {{ name }}
    </p>
    <span class="icon-cell__marked">
      <svg-icon
        name="selected"
        :size="24" />
    </span>
  </div>
</template>

<script>
/**
 * IconCell.vue - Icon 示例栏组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.08
 */
import SvgIcon from '@/SvgIcon'

import { copyToClipboard, getStorage } from '$utils/utils'

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
      name: '',
      isChecked: false
    }
  },
  watch: {
    symbol() {
      this.update()
    }
  },
  mounted() {
    this.update()

    this.$subscribe('clean:cart', this.update)
  },
  methods: {
    update() {
      const icons = getStorage('svg.icon.set')
      const keys = this.symbol.match(/icon-(\w+(-\w+)*)+/)

      this.name = keys[1]

      if (icons) {
        this.isChecked = JSON.parse(icons).indexOf(this.symbol) > -1
      } else {
        this.isChecked = false
      }
    },
    add(icon) {
      this.$broadcast('add:icon', icon)
    },
    remove(icon) {
      this.$broadcast('remove:icon', icon)
    },
    copy(name, action = '加入') {
      copyToClipboard(name)
      this.$message.success({
        round: true,
        message: `图标“${name}”已${action}图标集购物车！`
      })
    },
    toggle() {
      this.isChecked = !this.isChecked
    },
    onCopy() {
      let action = ''
      const icon = this.symbol

      this.toggle()

      if (this.isChecked) {
        this.add(icon)
        action = '加入'
      } else {
        action = '移除'
        this.remove(icon)
      }

      this.copy(this.name, action)
    }
  }
}
</script>

<style lang="less">
@import './icon-cell';
</style>
