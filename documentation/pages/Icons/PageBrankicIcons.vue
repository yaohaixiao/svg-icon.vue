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
            :symbol="symbol" />
        </base-grid>
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
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseGrid from '$components/BaseGrid'

import IconCell from './components/IconCell'
import brankic1979Set from '@/assets/brankic-1979'

export default {
  name: 'PageBrankicIcons',
  componentName: 'PageBrankicIcons',
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
