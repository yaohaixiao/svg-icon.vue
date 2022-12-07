<template>
  <ul class="app-nav">
    <li
      v-for="(nav, i) in navs"
      :key="`nav-${i}`"
      class="app-nav__item">
      <base-link
        :route="nav.route"
        :role="nav.role"
        :href="nav.href"
        :icon="nav.icon"
        :icon-size="nav.iconSize"
        :target="nav.target"
        :download="nav.download"
        class="app-nav__link" />
    </li>
  </ul>
</template>

<script>
/**
 * AppNav.vue - 应用顶部导航区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
const BaseLink = () =>
  import(/* webpackChunkName: "BaseLink" */ '$components/BaseLink')

export default {
  name: 'AppNav',
  componentName: 'AppNav',
  components: {
    BaseLink
  },
  data() {
    return {
      navs: [
        {
          route: false,
          role: 'link',
          href: 'http://www.yaohaixiao.com/',
          icon: 'bold-home',
          iconSize: 18
        },
        {
          route: false,
          role: 'link',
          href: 'https://github.com/yaohaixiao/svg-icon.vue',
          icon: 'bold-branch',
          iconSize: 16
        },
        {
          route: false,
          role: 'link',
          href: 'https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip',
          icon: 'bold-download',
          iconSize: 20,
          download: 'svg-icon.vue-main.zip',
          target: '_blank'
        },
        {
          route: false,
          role: 'link',
          href: 'https://github.com/yaohaixiao/svg-icon.vue/issues',
          icon: 'bold-help',
          iconSize: 20
        }
      ]
    }
  }
}
</script>

<style lang="less">
.app-nav,
.app-nav__item {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.app-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: auto;

  &__item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-self: auto;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
    margin: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    overflow: hidden;

    + .app-nav__item {
      margin-left: 10px;
    }
  }

  &__item,
  &__link {
    color: @default_icon_color;

    &:hover {
      color: @primary_color;
    }
  }

  &__link {
    &.util-anchor-default {
      .anchor(@fourth_text_color);
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-self: auto;
      align-items: center;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
