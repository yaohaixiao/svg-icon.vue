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
        <base-breadcrumb-item current>Brankic 1979</base-breadcrumb-item>
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
        <h1 class="article__h1">Brankic 1979</h1>
        <h2 class="article__h2">
          {{ `${brankic1979Set.title} （${count}）` }}
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
      </article>
      <h2 class="article__h2">Copyright</h2>
      <ul>
        <li>Designer：Brankic1979</li>
        <li>
          Homepage:
          <a
            href="http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons">
            http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons
          </a>
        </li>
        <li>License：Custom (free to use)</li>
      </ul>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/icons/default">Default 图标库</router-link>
      </div>
      <div class="util-align-center base-footer__navigation">
        <base-pagination
          :page="page"
          :page-size="size"
          :total-count="count"
          :layout="['prev', 'pager', 'next']"
          prev-text=""
          next-text=""
          @page-change="onPageChange" />
      </div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons/broccolidry">Broccolidry 图标库</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageBrankicIcons.vue - Brankic 1979 Icons 示例页面
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
import BasePagination from '$components/BasePagination'

import brankic1979Set from '@/assets/brankic-1979'
import { cloneDeep } from '$utils/utils'
import SharedUtils from './mixins/shared-utils'

export default {
  name: 'PageBrankicIcons',
  componentName: 'PageBrankicIcons',
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
    BasePagination
  },
  mixins: [SharedUtils(brankic1979Set)],
  data() {
    return {
      brankic1979Set,
      keyword: '',
      symbols: [],
      count: 0,
      page: 1,
      size: 60
    }
  },
  created() {
    const symbols = this.brankic1979Set.symbols
    const icons = cloneDeep(symbols)

    this.count = symbols.length
    this.symbols = icons.splice(0, this.size)
  }
}
</script>
