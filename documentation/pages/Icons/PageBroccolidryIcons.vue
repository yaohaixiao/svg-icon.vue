<template>
  <base-container>
    <base-header
      flex
      border
      height="inner">
      <base-breadcrumb>
        <base-breadcrumb-item
          to="/"
          icon="circle-arrow-left">
          Home
        </base-breadcrumb-item>
        <base-breadcrumb-item to="/icons">Icons</base-breadcrumb-item>
        <base-breadcrumb-item current>Broccolidry</base-breadcrumb-item>
      </base-breadcrumb>
      <template v-slot:filter>
        <div class="page__filter">
          <base-input
            v-model="keyword"
            autosize
            autofocus
            clearable
            size="small"
            suffix-icon="search"
            placeholder="请输入图标名称"
            @change="onQuery" />
        </div>
      </template>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Broccolidry</h1>
        <h2 class="article__h2">
          {{ `${broccolidrySet.title}（${count}）` }}
        </h2>
        <base-grid
          v-if="count > 0"
          :columns="6"
          :gap="16"
          class="article__grid">
          <icon-cell
            v-for="(symbol, j) in symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
        <base-empty v-else />
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Visual Idiot</li>
          <li>
            Homepage:
            <a href="http://brankic1979.com/icons/">
              http://brankic1979.com/icons/
            </a>
          </li>
          <li>License：Custom (Free to use)</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/brankic-1979">Brankic 1979 图标库</router-link>
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/eighty-shades">
          Eighty Shades 图标库
        </router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageBroccolidryIcons.vue - Broccolidry Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
// import BaseContainer from '$components/BaseContainer'
// import BaseHeader from '$components/BaseHeader'
// import BaseMain from '$components/BaseMain'
// import BaseBreadcrumb from '$components/BaseBreadcrumb'
// import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
// import BaseFooter from '$components/BaseFooter'
//
// import BaseInput from '$components/BaseInput'
// import BaseGrid from '$components/BaseGrid'
// import BaseEmpty from '$components/BaseEmpty'

// 公共组件
const BaseContainer = () =>
  import(/* webpackChunkName: "BaseContainer" */ '$components/BaseContainer')
const BaseHeader = () =>
  import(/* webpackChunkName: "BaseHeader" */ '$components/BaseHeader')
const BaseMain = () =>
  import(/* webpackChunkName: "BaseMain" */ '$components/BaseMain')
const BaseBreadcrumb = () =>
  import(/* webpackChunkName: "BaseBreadcrumb" */ '$components/BaseBreadcrumb')
const BaseBreadcrumbItem = () =>
  import(
    /* webpackChunkName: "BaseBreadcrumbItem" */ '$components/BaseBreadcrumbItem'
  )
const BaseFooter = () =>
  import(/* webpackChunkName: "BaseFooter" */ '$components/BaseFooter')
const BaseInput = () =>
  import(/* webpackChunkName: "BaseInput" */ '$components/BaseInput')
const BaseGrid = () =>
  import(/* webpackChunkName: "BaseGrid" */ '$components/BaseGrid')
const BaseEmpty = () =>
  import(/* webpackChunkName: "BaseEmpty" */ '$components/BaseEmpty')

// ICON 示例组件
const IconCell = () => import('./components/IconCell')

import broccolidrySet from '@/assets/broccolidry'
import { cloneDeep, debounce } from '$utils/utils'
import timeSlice from '$utils/time-slice'

const step = 30

export default {
  name: 'PageBroccolidryIcons',
  componentName: 'PageBroccolidryIcons',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseFooter,
    BaseInput,
    BaseGrid,
    BaseEmpty,
    IconCell
  },
  data() {
    return {
      broccolidrySet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.broccolidrySet.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, step)
  },
  mounted() {
    const icons = cloneDeep(this.broccolidrySet.symbols)
    const add = () => {
      this.symbols = this.symbols.concat(icons.splice(0, step))
    }

    this.$nextTick(() => {
      setTimeout(() => {
        timeSlice(function* () {
          while (icons.length > 0) {
            add()
            yield
          }
        })()
      }, 150)
    })
  },
  methods: {
    query(keyword) {
      const symbols = this.broccolidrySet.symbols.filter((symbol) => {
        const name = this.getSymbolName(symbol).toLowerCase()

        return name.indexOf(keyword.toLowerCase()) > -1
      })

      this.count = symbols.length
      this.symbols = symbols
    },
    getSymbolName(symbol) {
      const matches = symbol.match(/icon-(\w+(-\w+)*)+/)
      return matches[1] || ''
    },
    onQuery: debounce(function () {
      this.query(this.keyword)
    }, 300)
  }
}
</script>
