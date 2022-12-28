<template>
  <ul :class="['cart-drawer-list', { 'is-empty': isEmpty }]">
    <template v-if="items.length > 0">
      <cart-drawer-item
        v-for="(item, i) in items"
        :key="`item-${i}`"
        :symbol="item.symbol"
        :is-checked="item.checked"
        :is-build-in="item.isBuildIn"
        :index="i"
        @check="onCheck"
        @delete="onDelete"
        @dragstart="onDragStart"
        @drop="onDragDrop"
        @dragend="onDragEnd" />
    </template>
    <cart-drawer-item
      v-else
      is-empty>
      <base-empty />
    </cart-drawer-item>
  </ul>
</template>

<script>
/**
 * CartDrawerList.vue - CartDrawerList 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import BaseEmpty from '$components/BaseEmpty'

import CartDrawerItem from '$views/components/CartDrawerItem'

export default {
  name: 'CartDrawerList',
  componentName: 'CartDrawerList',
  components: {
    BaseEmpty,
    CartDrawerItem
  },
  props: {
    isEmpty: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      start: 0,
      last: 0,
      items: []
    }
  },
  created() {
    this.update()
  },
  watch: {
    options() {
      this.update()
    }
  },
  methods: {
    update() {
      this.items = [...this.options]
    },
    swap(start, last) {
      const items = [...this.items]

      ;[items[start], items[last]] = [items[last], items[start]]

      this.items = items

      this.$emit('update', items)
    },
    doCheck(id, checked) {
      const items = [...this.items]

      items[id].checked = checked
      this.items = items

      this.$emit('update', items)
    },
    doDelete(symbol, name, isBuildIn) {
      let $symbol

      if (!isBuildIn) {
        $symbol = document.querySelector(`#icon-${name}`)

        if ($symbol) {
          $symbol.parentNode.removeChild($symbol)
        }

        this.$emit('delete', symbol)
      } else {
        this.$broadcast('remove:icon', symbol)
      }

      this.$message.success({
        round: true,
        message: `图标 ${name} 已移除购物车！`
      })
    },
    onCheck({ id, checked }) {
      this.doCheck(id, checked)
    },
    onDelete({ symbol, name, isBuildIn }) {
      this.doDelete(symbol, name, isBuildIn)
    },
    onDragStart(start) {
      this.start = parseInt(start, 10)
      // console.log('onDragStart', this.start)
    },
    onDragDrop(last) {
      this.last = parseInt(last, 10)
      // console.log('onDragDrop', this.last)
    },
    onDragEnd() {
      this.swap(this.start, this.last)
      // console.log('onDragEnd')
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-drawer-list';
</style>
