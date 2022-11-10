<template>
  <nav :class="className">
    <div
      v-if="isScrollable"
      :class="prevClassName"
      @click="onScrollPrev">
      <svg-icon
        name="arrow-left"
        :size="12" />
    </div>
    <div :class="mainClassName">
      <ul
        :class="listClassName"
        :style="cssRules">
        <slot :items="items">
          <base-tab-item
            v-for="(item, i) in items"
            :key="i"
            :index="i"
            :closable="closable"
            :editable="editable"
            :disabled="item.disabled"
            :label="item.label"
            :value="item.value"
            :icon="item.icon"
            :before-leave="beforeLeave"
            @click="onChange"
            @remove="onRemove" />
        </slot>
      </ul>
    </div>
    <div
      v-if="isScrollable"
      :class="nextClassName"
      @click="onScrollNext">
      <svg-icon
        name="arrow-right"
        :size="12" />
    </div>
    <div
      v-if="addable || editable"
      class="base-tab-nav__add"
      @click="onAdd">
      <svg-icon
        name="circle-plus"
        :size="16" />
    </div>
    <base-tab-bar
      v-if="!type"
      :left="barLeft"
      :width="barWidth" />
  </nav>
</template>

<script>
/**
 * BaseTabNav.vue - BaseTabNav 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import BaseTabItem from 'components/BaseTabItem'
import BaseTabBar from 'components/BaseTabBar'

import SvgIcon from '@/SvgIcon'

const ITEM_SELECTOR = '.base-tab-item'
let guid = 0

export default {
  name: 'BaseTabNav',
  componentName: 'BaseTabNav',
  components: {
    BaseTabItem,
    BaseTabBar,
    SvgIcon
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    stretch: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      default: () => []
    },
    beforeLeave: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      items: [],
      index: 0,
      active: null,
      barLeft: 0,
      barWidth: 40,
      isScrollable: false,
      listWidth: 0,
      step: 1,
      scrollLeft: 0
    }
  },
  computed: {
    count() {
      return this.items.length
    },
    maxStep() {
      const maxWidth = this.getMaxWidth()
      const listWidth = this.listWidth

      return Math.ceil(listWidth / maxWidth)
    },
    className() {
      const type = this.type

      return ['base-tab-nav', type ? `base-tab-nav_${type}` : '']
    },
    prevClassName() {
      const isMin = this.step === 1

      return ['base-tab-nav__prev', { 'is-disabled': isMin }]
    },
    nextClassName() {
      const isMax = this.step === this.maxStep
      const listWidth = this.getListWidth()
      const maxWidth = this.getMaxWidth()
      const maxLeft = listWidth - maxWidth
      const scrollLeft = this.scrollLeft

      return [
        'base-tab-nav__next',
        { 'is-disabled': isMax && scrollLeft >= maxLeft }
      ]
    },
    mainClassName() {
      const editable = this.addable || this.editable
      return [
        'base-tab-nav__main',
        { 'is-max': this.isScrollable && editable },
        { 'is-full': this.isScrollable && !editable }
      ]
    },
    listClassName() {
      const stretch = this.stretch

      return [
        'base-tabs__list',
        { 'base-tabs__list_flex': stretch },
        { direction_row: stretch },
        { 'is-scrollable': this.isScrollable }
      ]
    },
    cssRules() {
      const isScrollable = this.isScrollable
      const listWidth = this.listWidth
      const scrollLeft = this.scrollLeft

      if (!isScrollable) {
        return null
      }

      return {
        width: `${listWidth + 1}px`,
        transform: `translateX(-${scrollLeft}px)`
      }
    }
  },
  watch: {
    tabs() {
      this.update()

      this.$nextTick(() => {
        this.calculateNavBarPosition()
      })
    },
    index() {
      if (this.type) {
        return false
      }

      this.$nextTick(() => {
        this.calculateNavBarPosition()
      })
    },
    count() {
      this.$nextTick(() => {
        this.listWidth = this.getListWidth()
        this.isScrollable = this.isScrollButtonsVisible()
      })
    },
    value() {
      this.setActive()
    }
  },
  created() {
    this.update()
    this.setActive()
  },
  mounted() {
    if (this.type) {
      return false
    }

    this.$nextTick(() => {
      this.calculateNavBarPosition()
      this.listWidth = this.getListWidth()
      this.isScrollable = this.isScrollButtonsVisible()
    })
  },
  methods: {
    update() {
      this.items = [...this.tabs]
    },
    isScrollButtonsVisible() {
      const listWidth = this.getListWidth()
      const maxWidth = this.getMaxWidth()

      return listWidth > maxWidth && this.scrollable
    },
    getScrollLeft() {
      const listWidth = this.getListWidth()
      const maxWidth = this.getMaxWidth()
      const left = maxWidth * (this.step - 1)
      const maxLeft = listWidth - maxWidth

      return left < maxLeft ? left : maxLeft
    },
    getListWidth() {
      const $el = this.$el
      let $items
      let width = 0

      if (!$el) {
        return false
      }

      $items = $el.querySelectorAll(ITEM_SELECTOR)

      $items.forEach(($item) => {
        width += $item.offsetWidth
      })

      return width + 2
    },
    getMaxWidth() {
      const $el = this.$el
      const editable = this.addable || this.editable

      if (!$el) {
        return Number.MAX_SAFE_INTEGER
      }

      return $el.offsetWidth - (editable ? 120 : 80)
    },
    getBarLeft() {
      const index = this.index
      const $items = this.$el.querySelectorAll(ITEM_SELECTOR)
      const items = [...$items]
      let left = 0
      let $prevItems

      if (this.type || (!items && items.length < 1)) {
        return 0
      }

      $prevItems = items.splice(0, index)

      if ($prevItems.length < 1) {
        return 0
      }

      $prevItems.forEach((item) => {
        left += item.offsetWidth
      })

      return left
    },
    getBarWidth() {
      const $active = this.active

      if (this.type || !$active) {
        return 40
      }

      return $active.offsetWidth - 32
    },
    calculateNavBarPosition() {
      const $items = this.$el.querySelectorAll(ITEM_SELECTOR)

      if (this.type || !$items || $items.length < 1) {
        return false
      }

      this.active = $items[this.index]
      this.barLeft = this.getBarLeft()
      this.barWidth = this.getBarWidth()
    },
    setActive() {
      let index

      this.$nextTick(() => {
        index = this.items.findIndex((item) => item.value === this.value)
        this.index = index >= 0 ? index : 0
      })
    },
    switchActive() {
      this.$nextTick(() => {
        const items = this.items
        const index = this.index

        if (items.length < 1) {
          return false
        }

        this.onChange(items[index], index)
      })
    },
    add(item) {
      this.items.push(item)
      this.index = this.count - 1

      this.switchActive()
    },
    remove(index) {
      const items = [...this.items]

      if (index < 0) {
        return false
      }

      items.splice(index, 1)
      this.items = items

      if (items[index]) {
        this.index = index
      } else if (items[index - 1]) {
        this.index = index - 1
      } else {
        this.index = 0
      }

      this.switchActive()
    },
    onScrollPrev() {
      let step = this.step

      if (step <= 1) {
        this.scrollLeft = this.getScrollLeft()
        return false
      }

      step -= 1

      this.step = step
      this.scrollLeft = this.getScrollLeft()
    },
    onScrollNext() {
      let step = this.step

      if (step >= this.maxStep) {
        this.scrollLeft = this.getScrollLeft()
        return false
      }

      step += 1

      this.step = step
      this.scrollLeft = this.getScrollLeft()
    },
    onChange(tab, index) {
      this.index = index

      this.$emit('input', tab.value)
      this.$emit('change', tab)
    },
    onAdd() {
      const id = (guid += 1)
      const item = {
        label: `New Tab ${id}`,
        editable: this.editable,
        closable: this.closable,
        disabled: false
      }

      if (!this.addable && !this.editable) {
        return false
      }

      this.add(item)

      this.$emit('add', item)
      this.$emit('edit', item, 'add')
    },
    onRemove(index) {
      const tab = { ...this.items[index] }

      if (!this.closable && !this.editable) {
        return false
      }

      this.remove(index)

      this.$emit('remove', index)
      this.$emit('edit', tab, 'remove')
    }
  }
}
</script>

<style lang="less">
@import './base-tab-nav';
</style>
