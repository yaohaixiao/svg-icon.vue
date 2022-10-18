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
        <breadcrumb-nav-item current>Hawcons</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Hawcons</h1>
        <h2 class="article__h2">{{ hawconsSet.title }}</h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="icons-grid">
          <icon-cell
            v-for="(symbol, j) in hawconsSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Yannick</li>
          <li>
            Homepage: <a href="http://hawcons.com/">http://hawcons.com/</a>
          </li>
          <li>License：Custom (free to use)</li>
        </ul>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageHawconsIcons.vue - Hawcons Icons 示例页面
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
import hawconsSet from '@/assets/hawcons'

render(hawconsSet)

export default {
  name: 'PageHawconsIcons',
  componentName: 'PageHawconsIcons',
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
      hawconsSet
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
