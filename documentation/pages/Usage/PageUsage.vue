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
        <base-breadcrumb-item current>Usage</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Usage</h1>
        <template v-if="defer(1)">
          <usage-basic-section />
        </template>
        <template v-if="defer(2)">
          <usage-set-color-section />
        </template>
        <template v-if="defer(3)">
          <usage-advanced-section />
        </template>
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/docs">API Documentation</router-link>
      </div>
      <div class="util-align-center base-footer__navigation"></div>
      <div class="util-align-right base-footer__navigation">
        Next Page：
        <router-link to="/icons">Icons</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageUsage.vue - Usage 说明页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
// 公共组件
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseFooter from '$components/BaseFooter'

// 示例组件
const UsageBasicSection = () =>
  import(
    /* webpackChunkName: "UsageBasicSection" */ './components/UsageBasicSection'
  )
const UsageSetColorSection = () =>
  import(
    /* webpackChunkName: "UsageSetColorSection" */ './components/UsageSetColorSection'
  )
const UsageAdvancedSection = () =>
  import(
    /* webpackChunkName: "UsageAdvancedSection" */ './components/UsageAdvancedSection'
  )

import Defer from '$mixins/defer'

export default {
  name: 'PageUsage',
  componentName: 'PageUsage',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseFooter,
    UsageBasicSection,
    UsageSetColorSection,
    UsageAdvancedSection
  },
  mixins: [Defer(3)]
}
</script>
