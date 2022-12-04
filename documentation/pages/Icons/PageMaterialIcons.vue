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
        <base-breadcrumb-item current>Material</base-breadcrumb-item>
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
        <h1 class="article__h1">Material</h1>
        <h2 class="article__h2">
          {{ `${materialSet.title}（${count}）` }}
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
          <li>Designer：Google</li>
          <li>
            Homepage:
            <a href="https://material.io/resources/icons">
              https://material.io/resources/icons
            </a>
          </li>
          <li>License：Apache License 2.0</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/linecons">Linecons 图标库</router-link>
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/meteocons">Meteocons 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageMaterialIcons.vue - Material Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
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

const IconCell = () => import('./components/IconCell')

import materialSet from '@/assets/material'

import { cloneDeep, debounce } from '$utils/utils'
import timeSlice from '$utils/time-slice'

const step = 30

export default {
  name: 'PageMaterialIcons',
  componentName: 'PageMaterialIcons',
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
      materialSet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.materialSet.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, step)
  },
  mounted() {
    const icons = cloneDeep(this.materialSet.symbols)
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
      const symbols = this.materialSet.symbols.filter((symbol) => {
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
