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
        <base-breadcrumb-item current>Eighty Shades</base-breadcrumb-item>
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
        <h1 class="article__h1">Eighty Shades</h1>
        <h2 class="article__h2">
          {{ `${eightyShadesSet.title}（${count}）` }}
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
            <a href="http://dribbble.com/shots/928458-80-Shades-of-White-Icons">
              http://dribbble.com/shots/928458-80-Shades-of-White-Icons
            </a>
          </li>
          <li>License：Custom (free to use)</li>
        </ul>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/broccolidry">Broccolidry 图标库</router-link>
      </div>
      <div class="util-align-center base-footer__navigation"></div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/entypo-plus">Entypo+ 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageEightyShadesIcons.vue - Eighty Shades Icons 示例页面
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

import eightyShadesSet from '@/assets/eighty-shades'
import { cloneDeep } from '$utils/utils'
import TimeSlice from './mixins/time-slice'
import SharedUtils from './mixins/shared-utils'

export default {
  name: 'PageEightyShadesIcons',
  componentName: 'PageEightyShadesIcons',
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
  mixins: [TimeSlice(eightyShadesSet), SharedUtils(eightyShadesSet)],
  data() {
    return {
      eightyShadesSet,
      keyword: '',
      symbols: [],
      count: 0
    }
  },
  created() {
    const symbols = this.eightyShadesSet.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, 30)
  }
}
</script>
