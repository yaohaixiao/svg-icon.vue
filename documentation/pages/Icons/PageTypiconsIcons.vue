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
        <base-breadcrumb-item current>Typicons</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Typicons</h1>
        <h2 class="article__h2">
          {{ `${typiconsSet.title}（${count}）` }}
        </h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="article__grid">
          <icon-cell
            v-for="(symbol, j) in typiconsSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Stephen Hutchings</li>
          <li>
            Homepage:
            <a href="http://typicons.com/">http://typicons.com/</a>
          </li>
          <li>License：CC BY-SA 3.0</li>
        </ul>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageTypiconsIcons.vue - Typicons Icons 示例页面
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
import typiconsSet from '@/assets/typicons'

export default {
  name: 'PageTypiconsIcons',
  componentName: 'PageTypiconsIcons',
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
      typiconsSet
    }
  },
  computed: {
    count() {
      return this.typiconsSet.symbols.length
    }
  }
}
</script>

<style scoped></style>
