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
        <base-breadcrumb-item current>API Documentation</base-breadcrumb-item>
      </base-breadcrumb>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">API Documentation</h1>
        <p>svg-icon.vue 为开发者提供了用来在 VUE 项目中显示 SVG 图标的工具。</p>
        <api-install-section />
        <api-methods-section />
        <api-component-section />
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageDocumentation.vue - API 文档页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'

import ApiInstallSection from './components/ApiInstallSection'
import ApiMethodsSection from './components/ApiMethodsSection'
import ApiComponentSection from './components/ApiComponentSection'

export default {
  name: 'PageDocumentation',
  componentName: 'PageDocumentation',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    ApiInstallSection,
    ApiMethodsSection,
    ApiComponentSection
  }
}
</script>

<style scoped></style>
