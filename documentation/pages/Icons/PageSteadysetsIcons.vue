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
        <base-breadcrumb-item current>Steadysets</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Steadysets</h1>
        <h2 class="article__h2">{{ steadysetsSet.title }}</h2>
        <base-grid
          :columns="6"
          :gap="10"
          class="icons-grid">
          <icon-cell
            v-for="(symbol, j) in steadysetsSet.symbols"
            :key="`cell-${j}`"
            :symbol="symbol" />
        </base-grid>
        <h2 class="article__h2">Copyright</h2>
        <ul>
          <li>Designer：Tommy Sähl</li>
          <li>
            Homepage:
            <a href="http://dribbble.com/shots/929153-Steady-set-of-icons">
              http://dribbble.com/shots/929153-Steady-set-of-icons
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
 * PageSteadysetsIcons.vue - Material Icons 示例页面
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
import steadysetsSet from '@/assets/steadysets'

export default {
  name: 'PageSteadysetsIcons',
  componentName: 'PageSteadysetsIcons',
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
      steadysetsSet
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
