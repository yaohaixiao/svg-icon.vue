<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/**
 * App.vue - 应用根节点
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
export default {
  name: 'App',
  componentName: 'App'
}
</script>

<style lang="less">
html,
body,
#app {
  .font_text_family();
  .font_size_regular();
  .line_height_regular();
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: @white;
  color: @primary_text_color;
  overflow: hidden;
}
</style>
