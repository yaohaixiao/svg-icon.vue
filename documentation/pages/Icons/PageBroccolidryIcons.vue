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
          :gap="10"
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
  </base-container>
</template>

<script>
/**
 * PageBroccolidryIcons.vue - Broccolidry Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseInput from '$components/BaseInput'
import BaseGrid from '$components/BaseGrid'
import BaseEmpty from '$components/BaseEmpty'

import IconCell from './components/IconCell'
import broccolidrySet from '@/assets/broccolidry'
import { debounce } from '$utils/utils'

export default {
  name: 'PageBroccolidryIcons',
  componentName: 'PageBroccolidryIcons',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseInput,
    BaseGrid,
    BaseEmpty,
    IconCell
  },
  data() {
    return {
      broccolidrySet,
      keyword: '',
      symbols: []
    }
  },
  computed: {
    count() {
      return this.symbols.length
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.symbols = this.broccolidrySet.symbols.filter((symbol) => {
        const name = this.getSymbolName(symbol).toLowerCase()

        return name.indexOf(this.keyword.toLowerCase()) > -1
      })
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

<style scoped></style>
