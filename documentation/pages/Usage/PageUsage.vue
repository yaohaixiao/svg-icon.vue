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
        <usage-basic-section />
        <usage-set-color-section />
        <usage-advanced-section />
      </article>
    </base-main>
    <base-footer
      flex
      height="inner">
      <div class="util-align-left base-footer__navigation">
        Prev Page：
        <router-link to="/docs">API Documentation</router-link>
      </div>
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
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseFooter from '$components/BaseFooter'

import UsageBasicSection from './components/UsageBasicSection'
import UsageSetColorSection from './components/UsageSetColorSection'
import UsageAdvancedSection from './components/UsageAdvancedSection'

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
  }
}
</script>

<style scoped></style>
