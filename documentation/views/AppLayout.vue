<template>
  <base-container>
    <app-header />
    <base-main
      use-main-tag
      flex
      overflow="hidden">
      <app-aside />
      <base-main overflow="hidden">
        <keep-alive>
          <router-view />
        </keep-alive>
      </base-main>
    </base-main>
    <cart-bar :items="icons" />
    <cart-drawer :items="icons" />
  </base-container>
</template>

<script>
/**
 * AppLayout.vue - 主题框架页
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseContainer from '$components/BaseContainer'
import BaseMain from '$components/BaseMain'

import CartBar from '$components/CartBar'
import CartDrawer from '$components/CartDrawer'

const AppHeader = () => import('./AppHeader')
const AppAside = () => import('./AppAside')

import { getStorage, setStorage, clearStorage } from '$utils/storage'

export default {
  name: 'AppLayout',
  componentName: 'AppLayout',
  components: {
    BaseContainer,
    BaseMain,
    AppHeader,
    AppAside,
    CartBar,
    CartDrawer
  },
  data() {
    return {
      icons: []
    }
  },
  watch: {
    icons() {
      setStorage('svg.icon.set', JSON.stringify(this.icons))
      this.$broadcast('update:icons')
    }
  },
  created() {
    this.update()
  },
  mounted() {
    this.$subscribe('add:icon', this.add)
    this.$subscribe('remove:icon', this.remove)
    this.$subscribe('clean:cart', this.clean)
  },
  beforeDestroy() {
    this.$unsubscribe('add:icon', this.add)
    this.$unsubscribe('remove:icon', this.remove)
    this.$unsubscribe('clean:cart', this.clean)

    clearStorage('svg.icon.set')
  },
  methods: {
    update() {
      const icons = getStorage('svg.icon.set')

      if (icons) {
        this.icons = JSON.parse(icons)
      }
    },
    add(icon) {
      const icons = [...this.icons]

      icons.push(icon)
      this.icons = icons
    },
    remove(icon) {
      const icons = [...this.icons]
      const index = icons.indexOf(icon)

      if (index < 0) {
        return false
      }

      icons.splice(index, 1)
      this.icons = icons
    },
    clean() {
      this.icons = []
    }
  }
}
</script>

<style scoped></style>
