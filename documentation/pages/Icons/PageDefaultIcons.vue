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
        <base-breadcrumb-item current>Default</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Default 图标库</h1>
        <template v-for="(iconSet, i) in defaultSets">
          <h2
            :key="`title-${i}`"
            class="article__h2">
            {{ `${iconSet.title}（${iconSet.symbols.length}）` }}
          </h2>
          <base-grid
            :key="`grid-${i}`"
            :columns="6"
            :gap="10"
            class="article__grid">
            <icon-cell
              v-for="(symbol, j) in iconSet.symbols"
              :key="`generic-${j}`"
              :symbol="symbol" />
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
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseGrid from '$components/BaseGrid'

import IconCell from './components/IconCell'

// 粗线条图标
import boldSet from '@/assets/default/bold'
// 实心图标
import solidSet from '@/assets/default/solid'
// 功能性图标
import stateSet from '@/assets/default/state'
// 文件类图标
import fileSet from '@/assets/default/file'
// 开发语言类图标
import languageSet from '@/assets/default/language'
// 箭头类图标
import arrowSet from '@/assets/default/arrow'
// 成对的图标
import pairedSet from '@/assets/default/paired'
// 通用类图标
import genericSet from '@/assets/default/generic'

export default {
  name: 'PageDefaultIcons',
  componentName: 'PageDefaultIcons',
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
      defaultSets: [
        boldSet,
        solidSet,
        stateSet,
        fileSet,
        languageSet,
        arrowSet,
        pairedSet,
        genericSet
      ]
    }
  }
}
</script>
