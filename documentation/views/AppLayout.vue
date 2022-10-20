<template>
  <base-container>
    <app-header />
    <base-main
      use-main-tag
      flex
      overflow="hidden">
      <app-aside />
      <base-main overflow="hidden">
        <router-view />
      </base-main>
    </base-main>
  </base-container>
</template>

<script>
/**
 * AppLayout.vue - 主题框架页
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseContainer from '../components/BaseContainer'
import BaseMain from '../components/BaseMain'

import AppHeader from './AppHeader'
import AppAside from './AppAside'

export default {
  name: 'AppLayout',
  componentName: 'AppLayout',
  components: {
    BaseContainer,
    BaseMain,
    AppHeader,
    AppAside
  }
}
</script>

<style scoped></style>
