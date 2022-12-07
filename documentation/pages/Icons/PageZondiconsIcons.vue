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
        <base-breadcrumb-item current>Zondicons</base-breadcrumb-item>
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
        <h1 class="article__h1">Zondicons</h1>
        <h2 class="article__h2">
          {{ `${zondiconsSet.title}（${count}）` }}
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
          <li>Designer：Steve Schoger</li>
          <li>
            Homepage:
            <a href="http://www.zondicons.com/">http://www.zondicons.com/</a>
          </li>
          <li>License：CC BY 4.0</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/wpzoom">wpzoom 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageZondiconsIcons.vue - Material Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
// 公共组件
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseFooter from '$components/BaseFooter'

import BaseInput from '$components/BaseInput'
import BaseGrid from '$components/BaseGrid'
import BaseEmpty from '$components/BaseEmpty'

import zondiconsSet from '@/assets/zondicons'
import { cloneDeep, debounce } from '$utils/utils'
import timeSlice from '$utils/time-slice'

export default {
  name: 'PageZondiconsIcons',
  componentName: 'PageZondiconsIcons',
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
  data() {
    return {
      zondiconsSet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.zondiconsSet.symbols
    const icons = cloneDeep(this.zondiconsSet.symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, 30)
  },
  mounted() {
    const icons = cloneDeep(this.zondiconsSet.symbols)
    const add = () => {
      this.symbols = this.symbols.concat(icons.splice(0, 6))
    }

    icons.splice(0, 30)

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
      const symbols = this.zondiconsSet.symbols.filter((symbol) => {
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
