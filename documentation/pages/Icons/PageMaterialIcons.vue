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
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Material</h1>
        <h2 class="article__h2">{{ materialSet.title }}</h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="icons-grid">
          <icon-cell
            v-for="(symbol, j) in materialSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
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
import BaseGrid from '$components/BaseGrid'

import IconCell from './components/IconCell'
import materialSet from '@/assets/material'

export default {
  name: 'PageMaterialIcons',
  componentName: 'PageMaterialIcons',
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
      materialSet
    }
  }
}
</script>

<style scoped lang="less">
.icons-grid {
  .radius_regular();
  padding: 10px;
  border: 1px solid @primary_border_color;

  &:last-child {
    margin-bottom: 20px;
  }
}
</style>
