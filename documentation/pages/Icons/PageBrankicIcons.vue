<template>
  <base-container>
    <base-header flex border height="inner">
      <breadcrumb-nav>
        <breadcrumb-nav-item to="/" icon="circle-arrow-left">Home</breadcrumb-nav-item>
        <breadcrumb-nav-item to="/icons">Icons</breadcrumb-nav-item>
        <breadcrumb-nav-item current>Brankic 1979 Icons</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Brankic 1979</h1>
        <h2 class="article__h2">{{ brankic1979Set.title }}</h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="icons-grid">
          <icon-cell
            v-for="(symbol, j) in brankic1979Set.symbols"
            :key="`cell-${j}`"
            :symbol="symbol"
          />
        </base-grid>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageBrankicIcons.vue - Brankic 1979 Icons 示例页面
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
import brankic1979Set from '@/assets/brankic-1979'

render(brankic1979Set)

export default {
  name: 'PageBrankicIcons',
  componentName: 'PageBrankicIcons',
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
      brankic1979Set
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
