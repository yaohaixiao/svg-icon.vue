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
        class="app-nav__link"></base-link>
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
import BaseLink from 'components/BaseLink'

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
          href: 'https://github.com/yaohaixiao/svg-icon.vue',
          icon: 'card-branch',
          iconSize: 16
        },
        {
          route: false,
          role: 'link',
          href: 'https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip',
          icon: 'card-download',
          iconSize: 20,
          download: 'svg-icon.vue-main.zip',
          target: '_blank'
        },
        {
          route: false,
          role: 'link',
          href: 'https://github.com/yaohaixiao/svg-icon.vue/issues',
          icon: 'card-help',
          iconSize: 20
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.app-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.app-nav,
.app-nav__item {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.app-nav {
  margin-left: auto;
}

.app-nav__item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-self: auto;
  align-items: center;
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

.app-nav__item,
.app-nav__link {
  color: @gray;

  &:hover {
    color: @primary_color;
  }
}

.app-nav__link {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-self: auto;
  align-items: center;
  width: 24px;
  height: 24px;
  .anchor(@fourth_text_color);
}
</style>
