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
        <base-breadcrumb-item current>Iconic</base-breadcrumb-item>
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
        <h1 class="article__h1">Iconic</h1>
        <h2 class="article__h2">
          {{ `${iconicSet.title}（${count}）` }}
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
          <li>Designer：P.J. Onori</li>
          <li>
            Homepage:
            <a href="https://github.com/somerandomdude/Iconic">
              https://github.com/somerandomdude/Iconic
            </a>
          </li>
          <li>License：CC BY-SA 3.0</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/hawcons">Hawcons 图标库</router-link>
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/linecons">Linecons 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageIconicIcons.vue - Iconic Icons 示例页面
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

import iconicSet from '@/assets/iconic'
import { cloneDeep } from '$utils/utils'
import TimeSlice from './mixins/time-slice'

export default {
  name: 'PageIconicIcons',
  componentName: 'PageIconicIcons',
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
  mixins: [TimeSlice(iconicSet)],
  data() {
    return {
      iconicSet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.iconicSet.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, 30)
  }
}
</script>
