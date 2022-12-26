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
        <h1 class="article__h1">EverIcons 图标库</h1>
        <template v-for="(iconSet, i) in everIconsSets">
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
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Aleksey Popov</li>
          <li>
            Homepage:
            <a href="http://evericons.com">http://evericons.com</a>
          </li>
          <li>License：CC0 1.0 Universal (free to use)</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/zondicons">Zondicons 图标集</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageEverIcons.vue - EverIcons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.26
 */
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseFooter from '$components/BaseFooter'

import BaseInput from '$components/BaseInput'
import BaseGrid from '$components/BaseGrid'
import BaseEmpty from '$components/BaseEmpty'

import Defer from '$mixins/defer'

import arrowsSet from '@/assets/ever-icons/arrows'
import basicSet from '@/assets/ever-icons/basic'
import callSet from '@/assets/ever-icons/call'
import chattingSet from '@/assets/ever-icons/chatting'
import connectionSet from '@/assets/ever-icons/connection'
import fileSet from '@/assets/ever-icons/file'
import financeSet from '@/assets/ever-icons/finance'
import foodSet from '@/assets/ever-icons/food'
import gadgetsSet from '@/assets/ever-icons/gadgets'
import gridSet from '@/assets/ever-icons/grid'
import mapsSet from '@/assets/ever-icons/maps'
import musicSet from '@/assets/ever-icons/music'
import notificationsSet from '@/assets/ever-icons/notifications'
import reactionsSet from '@/assets/ever-icons/reactions'
import securitySet from '@/assets/ever-icons/security'
import shoppingSet from '@/assets/ever-icons/shopping'
import softwareSet from '@/assets/ever-icons/software'
import symbolsSet from '@/assets/ever-icons/symbols'
import timeSet from '@/assets/ever-icons/time'
import variousSet from '@/assets/ever-icons/various'

import { debounce, cloneDeep } from '$utils/utils'

const DEFAULT_SET = [
  arrowsSet,
  basicSet,
  callSet,
  chattingSet,
  connectionSet,
  fileSet,
  financeSet,
  foodSet,
  gadgetsSet,
  gridSet,
  mapsSet,
  musicSet,
  notificationsSet,
  reactionsSet,
  securitySet,
  shoppingSet,
  softwareSet,
  symbolsSet,
  timeSet,
  variousSet
]

export default {
  name: 'PageEverIcons',
  componentName: 'PageEverIcons',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseFooter,
    BaseInput,
    BaseGrid,
    BaseEmpty
  },
  mixins: [Defer()],
  data() {
    return {
      everIconsSets: [],
      keyword: ''
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      const everIconsSets = cloneDeep(DEFAULT_SET)

      everIconsSets.forEach((iconSet) => {
        iconSet.symbols = iconSet.symbols.filter((symbol) => {
          const name = this.getSymbolName(symbol).toLowerCase()

          return name.indexOf(this.keyword.toLowerCase()) > -1
        })
      })

      this.everIconsSets = everIconsSets
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
