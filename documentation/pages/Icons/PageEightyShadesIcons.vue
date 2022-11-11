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
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Eighty Shades</h1>
        <h2 class="article__h2">
          {{ `${eightyShadesSet.title}（${count}）` }}
        </h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="article__grid">
          <icon-cell
            v-for="(symbol, j) in eightyShadesSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
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
  </base-container>
</template>

<script>
/**
 * PageEightyShadesIcons.vue - Eighty Shades Icons 示例页面
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
import eightyShadesSet from '@/assets/eighty-shades'

export default {
  name: 'PageEightyShadesIcons',
  componentName: 'PageEightyShadesIcons',
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
      eightyShadesSet
    }
  },
  computed: {
    count() {
      return this.eightyShadesSet.symbols.length
    }
  }
}
</script>

<style scoped></style>
