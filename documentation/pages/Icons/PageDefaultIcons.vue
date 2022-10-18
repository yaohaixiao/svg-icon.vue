<template>
  <base-container>
    <base-header flex border height="inner">
      <breadcrumb-nav>
        <breadcrumb-nav-item to="/" icon="circle-arrow-left">Home</breadcrumb-nav-item>
        <breadcrumb-nav-item to="/icons">Icons</breadcrumb-nav-item>
        <breadcrumb-nav-item current>Default</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Default 图标库</h1>
        <template v-for="(svg, i) in icons">
          <h2 :key="`title-${i}`" class="article__h2">{{ svg.title }}</h2>
          <base-grid
            :key="`grid-${i}`"
            :columns="6"
            :gap="10"
            class="icons-grid">
            <icon-cell
              v-for="(symbol, j) in svg.symbols"
              :key="`cell-${j}`"
              :symbol="symbol"
            />
          </base-grid>
        </template>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageDefaultIcons.vue - Default Icons 示例页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import BaseContainer from 'components/BaseContainer'
import BaseHeader from 'components/BaseHeader'
import BaseMain from 'components/BaseMain'
import BreadcrumbNav from 'components/BreadcrumbNav'
import BreadcrumbNavItem from 'components/BreadcrumbNavItem'
import BaseGrid from 'components/BaseGrid'

import IconCell from './components/IconCell'

import icons from '@/assets/default'

export default {
  name: 'PageDefaultIcons',
  componentName: 'PageDefaultIcons',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BreadcrumbNav,
    BreadcrumbNavItem,
    BaseGrid,
    IconCell
  },
  data() {
    return {
      icons
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
