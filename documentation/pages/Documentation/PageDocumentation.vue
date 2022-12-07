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
    <base-footer
      flex
      height="inner"
      text-align="right">
      <div class="base-footer__navigation">
        Next Page：
        <router-link to="/usage">Usage</router-link>
      </div>
    </base-footer>
  </base-container>
</template>

<script>
/**
 * PageDocumentation.vue - API 文档页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
// 公共组件
import BaseContainer from '$components/BaseContainer'
import BaseHeader from '$components/BaseHeader'
import BaseMain from '$components/BaseMain'
import BaseBreadcrumb from '$components/BaseBreadcrumb'
import BaseBreadcrumbItem from '$components/BaseBreadcrumbItem'
import BaseFooter from '$components/BaseFooter'

// 文档组件
const ApiInstallSection = () =>
  import(
    /* webpackChunkName: "ApiInstallSection" */ './components/ApiInstallSection'
  )
const ApiMethodsSection = () =>
  import(
    /* webpackChunkName: "ApiMethodsSection" */ './components/ApiMethodsSection'
  )
const ApiComponentSection = () =>
  import(
    /* webpackChunkName: "ApiComponentSection" */ './components/ApiComponentSection'
  )

export default {
  name: 'PageDocumentation',
  componentName: 'PageDocumentation',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BaseBreadcrumb,
    BaseBreadcrumbItem,
    BaseFooter,
    ApiInstallSection,
    ApiMethodsSection,
    ApiComponentSection
  }
}
</script>
