<template>
  <li :class="['cart-drawer-item', { 'is-empty': isEmpty }]">
    <slot>
      <div class="cart-drawer-item__checkbox">
        <base-checkbox
          v-model="checked"
          @change="onCheck" />
      </div>
      <div class="cart-drawer-item__icon">
        <svg-icon
          :name="name"
          :size="32" />
      </div>
      <div class="cart-drawer-item__meta">
        <h3 class="cart-drawer-item__title">{{ name }}</h3>
        <dl class="cart-drawer-item__dl">
          <dt class="cart-drawer-item__dt">宽：</dt>
          <dd class="cart-drawer-item__dd">{{ width }}</dd>
          <dt class="cart-drawer-item__dt">高：</dt>
          <dd class="cart-drawer-item__dd">{{ height }}</dd>
        </dl>
      </div>
      <div
        class="cart-drawer-item__delete"
        @click="onDelete">
        <svg-icon
          name="trash"
          :size="20" />
      </div>
    </slot>
  </li>
</template>

<script>
/**
 * CartDrawerItem.vue - CartDrawerItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.10
 */
import BaseCheckbox from '$components/BaseCheckbox'

import SvgIcon from '@/SvgIcon'

export default {
  name: 'CartDrawerItem',
  componentName: 'CartDrawerItem',
  components: {
    BaseCheckbox,
    SvgIcon
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    symbol: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isBuildIn: {
      type: Boolean,
      default: true
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: 0,
      checked: false,
      buildIn: true,
      item: ''
    }
  },
  computed: {
    name() {
      const matches = this.item.match(/icon-(\w+(-\w+)*)+/)
      return matches[1] || ''
    },
    size() {
      const match = this.item.match(/viewBox="0 0 (.*?)"/)[1].split(' ')
      let width = 0
      let height = 0

      if (match) {
        width = match[0] ? parseInt(match[0], 10) : 0
        height = match[1] ? parseInt(match[1], 10) : 0
      }

      return {
        width,
        height
      }
    },
    width() {
      const { width } = this.size
      return width > 200 ? 200 : width
    },
    height() {
      const { height } = this.size
      return height > 200 ? 200 : height
    }
  },
  watch: {
    index() {
      this.update()
    },
    symbol() {
      this.update()
    },
    isChecked() {
      this.update()
    },
    isBuiltIn() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.id = this.index
      this.item = this.symbol
      this.checked = this.isChecked
      this.buildIn = this.isBuildIn
    },
    onCheck() {
      this.$emit('check', {
        id: this.id,
        symbol: this.item,
        checked: this.checked,
        name: this.name
      })
    },
    onDelete() {
      this.$emit('delete', {
        id: this.id,
        symbol: this.item,
        name: this.name,
        isBuildIn: this.buildIn
      })
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-drawer-item';
</style>
