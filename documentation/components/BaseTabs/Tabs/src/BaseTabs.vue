<template>
  <div :class="className">
    <div class="base-tabs__header">
      <base-tabs-nav
        :value="value"
        :tabs="tabs"
        :type="type"
        :closable="closable"
        :addable="addable"
        :editable="editable"
        :position="position"
        :stretch="stretch"
        :before-leave="beforeLeave"
        @change="onChange"
        @add="onAdd"
        @remove="onRemove" />
    </div>
    <div
      v-if="$slots.default"
      ref="content"
      class="base-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * BaseTabs.vue - BaseTabs 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import Vue from 'vue'

import BaseTabsNav from '$components/BaseTabs/Nav'
import BaseTabsPane from '$components/BaseTabs/Pane'

const PaneConstructor = Vue.extend(BaseTabsPane)
let guid = 0

export default {
  name: 'BaseTabs',
  componentName: 'BaseTabs',
  components: {
    BaseTabsNav
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
    position: {
      type: String,
      default: 'top'
    },
    stretch: {
      type: Boolean,
      default: false
    },
    beforeLeave: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      tabs: [],
      panes: []
    }
  },
  computed: {
    className() {
      const type = this.type
      return ['dev-tabs', type ? `dev-tabs_${type}` : '']
    }
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      const tabs = []
      const panes = []
      const defaults = this.$slots.default

      if (!defaults || defaults.length < 1) {
        return false
      }

      defaults.forEach((vNode) => {
        let instance

        if (!this.isTabPane(vNode)) {
          return false
        }

        instance = vNode.componentInstance

        tabs.push({
          label: instance.label,
          value: instance.value,
          icon: instance.icon,
          disabled: instance.disabled,
          closable: instance.closable
        })
        panes.push(instance)
      })

      this.tabs = tabs
      this.panes = panes
    },
    isTabPane(vNode) {
      const componentOptions = vNode.componentOptions
      return (
        vNode.tag &&
        componentOptions &&
        componentOptions.Ctor.options.name === 'BaseTabsPane'
      )
    },
    addPane(tab) {
      let $pane

      $pane = new PaneConstructor()
      $pane.$parent = this
      $pane.label = tab.label
      $pane.value = tab.value
      $pane.disabled = this.disabled
      $pane.closable = this.closable
      $pane.$mount()

      guid += 1

      this.$refs.content.appendChild($pane.$el)
      $pane.$el.innerHTML = `New Content ${guid}`

      this.panes.push($pane)
    },
    removePane(index) {
      const panes = this.panes
      let pane

      pane = panes[index]
      pane.$destroy()
      panes.splice(index, 1)
    },
    add(tab) {
      this.tabs.push(tab)
      this.addPane(tab)
    },
    remove(index) {
      const tabs = [...this.tabs]

      tabs.splice(index, 1)
      this.tabs = tabs

      this.removePane(index)
    },
    onChange(tab) {
      this.$emit('input', tab.value)
      this.$emit('change', tab)
    },
    onAdd(tab) {
      this.add(tab)

      this.$emit('add')
      this.$emit('edit', tab, 'add')
    },
    onRemove(index) {
      const tab = this.tabs[index]

      this.remove(index)

      this.$emit('remove')
      this.$emit('edit', tab, 'remove')
    }
  }
}
</script>

<style lang="less">
@import './base-tabs';
</style>
