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
        <base-breadcrumb-item current>Default</base-breadcrumb-item>
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
        <h1 class="article__h1">Default 图标库</h1>
        <template v-for="(iconSet, i) in defaultSets">
          <template v-if="defer(i + 1)">
            <h2
              :key="`title-${i}`"
              class="article__h2">
              {{ `${iconSet.title}（${iconSet.symbols.length}）` }}
            </h2>
            <base-grid
              v-if="iconSet.symbols.length > 0"
              :key="`grid-${i}`"
              :columns="6"
              :gap="16"
              class="article__grid">
              <icon-cell
                v-for="(symbol, j) in iconSet.symbols"
                :key="`generic-${j}`"
                :symbol="symbol" />
            </base-grid>
            <base-empty
              v-else
              :key="`empty-${i}`" />
          </template>
        </template>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/usage">Usage</router-link>
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/brankic-1979">Brankic 1979 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageDefaultIcons.vue - Default Icons 示例页面
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

import Defer from '$mixins/defer'

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

// 粗线条图标
import boldSet from '@/assets/default/bold'
// 实心图标
import solidSet from '@/assets/default/solid'
// 功能性图标
import stateSet from '@/assets/default/state'
// 文件类图标
import fileSet from '@/assets/default/file'
// 开发语言类图标
import languageSet from '@/assets/default/language'
// 箭头类图标
import arrowSet from '@/assets/default/arrow'
// 成对的图标
import pairedSet from '@/assets/default/paired'
// 通用类图标
import genericSet from '@/assets/default/generic'
import { debounce, cloneDeep } from '$utils/utils'

const DEFAULT_SET = [
  boldSet,
  solidSet,
  stateSet,
  fileSet,
  languageSet,
  arrowSet,
  pairedSet,
  genericSet
]

export default {
  name: 'PageDefaultIcons',
  componentName: 'PageDefaultIcons',
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
  mixins: [Defer()],
  data() {
    return {
      defaultSets: [],
      keyword: ''
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      const defaultSets = cloneDeep(DEFAULT_SET)

      defaultSets.forEach((iconSet) => {
        iconSet.symbols = iconSet.symbols.filter((symbol) => {
          const name = this.getSymbolName(symbol).toLowerCase()

          return name.indexOf(this.keyword.toLowerCase()) > -1
        })
      })

      this.defaultSets = defaultSets
    },
    getSymbolName(symbol) {
      const matches = symbol.match(/icon-(\w+(-\w+)*)+/)
      return matches[1] || ''
    },
    onQuery: debounce(function () {
      this.update()
    }, 300)
  }
}
</script>
