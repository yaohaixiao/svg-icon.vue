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
        <base-breadcrumb-item current>Vicons</base-breadcrumb-item>
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
        <h1 class="article__h1">Vicons</h1>
        <h2 class="article__h2">
          {{ `${viconsSet.title}（${count}）` }}
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
          <li>Designer：Victor Erixon</li>
          <li>
            Homepage:
            <a href="https://designmodo.com/linecons-free/">
              https://designmodo.com/linecons-free/
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
        <router-link to="/icons/typicons">Typicons 图标库</router-link>
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/wpzoom">wpzoom 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageViconsIcons.vue - Vicons Icons 示例页面
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

import viconsSet from '@/assets/vicons'
import { cloneDeep } from '$utils/utils'
import TimeSlice from './mixins/time-slice'

export default {
  name: 'PageViconsIcons',
  componentName: 'PageViconsIcons',
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
  mixins: [TimeSlice(viconsSet)],
  data() {
    return {
      viconsSet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.viconsSet.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, 30)
  },
  mounted() {
    const icons = cloneDeep(this.viconsSet.symbols)
    const add = () => {
      const appendIcons = icons.splice(0, 6)
      this.symbols = this.symbols.concat(appendIcons)
    }

    icons.splice(0, 30)

    this.$nextTick(() => {
      setTimeout(() => {
        while (icons.length > 0) {
          add()
        }
      }, 150)
    })
  }
}
</script>
