<template>
  <base-container>
    <base-header
      flex
      border
      height="inner">
      <breadcrumb-nav>
        <breadcrumb-nav-item
          to="/"
          icon="circle-arrow-left"
          >Home</breadcrumb-nav-item
        >
        <breadcrumb-nav-item to="/icons">Icons</breadcrumb-nav-item>
        <breadcrumb-nav-item current>Eighty Shades</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Eighty Shades</h1>
        <h2 class="article__h2">{{ eightyShadesSet.title }}</h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="icons-grid">
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
            <a href="http://dribbble.com/shots/928458-80-Shades-of-White-Icons"
              >http://dribbble.com/shots/928458-80-Shades-of-White-Icons</a
            >
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
import BaseContainer from 'components/BaseContainer'
import BaseHeader from 'components/BaseHeader'
import BaseMain from 'components/BaseMain'
import BreadcrumbNav from 'components/BreadcrumbNav'
import BreadcrumbNavItem from 'components/BreadcrumbNavItem'
import BaseGrid from 'components/BaseGrid'

import IconCell from './components/IconCell'

import { render } from '@/utils/utils'
import eightyShadesSet from '@/assets/eighty-shades'

render(eightyShadesSet)

export default {
  name: 'PageEightyShadesIcons',
  componentName: 'PageEightyShadesIcons',
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
      eightyShadesSet
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
