<template>
  <base-container>
    <app-header />
    <base-main
      use-main-tag
      flex
      overflow="hidden">
      <app-aside />
      <base-main overflow="hidden">
        <router-view />
      </base-main>
    </base-main>
    <the-cart :icons="icons" />
    <base-drawer
      ref="iconSetDrawer"
      title="图标集购物车"
      size="medium"
      :buttons="buttons"
      @close="onDrawerClose">
      <textarea
        class="icons-code"
        :value="code" />
    </base-drawer>
  </base-container>
</template>

<script>
/**
 * AppLayout.vue - 主题框架页
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseContainer from 'components/BaseContainer'
import BaseMain from 'components/BaseMain'

import AppHeader from './AppHeader'
import AppAside from './AppAside'

import BaseDrawer from 'components/BaseDrawer'
import TheCart from 'components/TheCart'

import {
  getStorage,
  setStorage,
  clearStorage,
  copyToClipboard
} from '$utils/utils'

export default {
  name: 'AppLayout',
  componentName: 'AppLayout',
  components: {
    BaseContainer,
    BaseMain,
    AppHeader,
    AppAside,
    BaseDrawer,
    TheCart
  },
  data() {
    return {
      icons: [],
      buttons: [
        {
          name: 'cancel',
          text: '取消'
        },
        {
          name: 'clean',
          text: '清空购物车',
          action: () => {
            this.icons = []
            clearStorage('svg.icon.set')
            this.$message.success({
              round: true,
              message: `图标集购物车已清空！`
            })

            this.$broadcast('clean:cart')
          }
        },
        {
          name: 'confirm',
          text: '复制代码',
          size: 'small',
          type: 'primary',
          action: () => {
            copyToClipboard(this.code)
            this.$message.success({
              round: true,
              message: `图标集代码已复制到粘贴板！`
            })
          }
        }
      ]
    }
  },
  computed: {
    code() {
      const iconSet = {
        title: 'SvgIcon 图标集',
        code: 'svg-icon-set',
        symbols: this.icons
      }

      return JSON.stringify(iconSet, null, 2)
    }
  },
  watch: {
    icons() {
      setStorage('svg.icon.set', JSON.stringify(this.icons))
    }
  },
  created() {
    this.update()
  },
  mounted() {
    this.$subscribe('add:icon', this.add)
    this.$subscribe('remove:icon', this.remove)

    this.$subscribe('show:drawer', this.show)
    this.$subscribe('hide:drawer', this.hide)
  },
  beforeDestroy() {
    this.$unsubscribe('add:icon', this.add)
    this.$unsubscribe('remove:icon', this.remove)

    this.$unsubscribe('show:drawer', this.show)
    this.$unsubscribe('hide:drawer', this.hide)

    clearStorage('svg.icon.set')
  },
  methods: {
    update() {
      const icons = getStorage('svg.icon.set')

      if (icons) {
        this.icons = JSON.parse(icons)
      }
    },
    show() {
      this.$refs.iconSetDrawer.open()
    },
    hide() {
      this.$refs.iconSetDrawer.close()
    },
    add(icon) {
      this.icons.push(icon)
    },
    remove(icon) {
      const index = this.icons.indexOf(icon)

      if (index < 0) {
        return false
      }

      this.icons.splice(index, 1)
    },
    onDrawerClose() {
      setTimeout(() => {
        this.$broadcast('show:cart')
      }, 300)
    }
  }
}
</script>

<style scoped lang="less">
.icons-code {
  margin: 0;
  width: 100%;
  height: 98%;
  line-height: 150%;
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid @primary_border_color;
  border-radius: 4px;
  color: @code_text_color;
  font-family: @font_code_family;
  outline: none;
  overflow: auto;

  &:focus {
    border-color: @primary_color;
  }
}
</style>
