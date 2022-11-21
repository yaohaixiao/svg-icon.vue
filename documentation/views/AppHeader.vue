<template>
  <base-header
    flex
    padding="inner"
    height="outer">
    <app-logo />
    <app-nav />
  </base-header>
</template>

<script>
/**
 * AppHeader.vue - 应用页头区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import BaseHeader from '$components/BaseHeader'

const AppLogo = () => import('./AppLogo')
const AppNav = () => import('./AppNav')

export default {
  name: 'AppHeader',
  componentName: 'AppHeader',
  components: {
    BaseHeader,
    AppLogo,
    AppNav
  }
}
</script>

<style scoped></style>
