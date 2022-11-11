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
        <base-breadcrumb-item current>Linecons</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Linecons</h1>
        <h2 class="article__h2">
          {{ `${lineconsSet.title}（${count}）` }}
        </h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="article__grid">
          <icon-cell
            v-for="(symbol, j) in lineconsSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Sergey Shmidt</li>
          <li>
            Homepage:
            <a href="https://designmodo.com/linecons-free/">
              https://designmodo.com/linecons-free/
            </a>
          </li>
          <li>License：CC0 1.0 Universal</li>
        </ul>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageLineconsIcons.vue - Linecons Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseGrid from '$components/BaseGrid'

import IconCell from './components/IconCell'
import lineconsSet from '@/assets/linecons'

export default {
  name: 'PageLineconsIcons',
  componentName: 'PageLineconsIcons',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseGrid,
    IconCell
  },
  data() {
    return {
      lineconsSet
    }
  },
  computed: {
    count() {
      return this.lineconsSet.symbols.length
    }
  }
}
</script>

<style scoped></style>
