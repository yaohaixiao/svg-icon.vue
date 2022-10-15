<template>
  <nav class="app-menu">
    <ul class="app-menu__list">
      <li v-for="(route, i) in routes" :key="`menu-${i}`" class="app-menu__item">
        <router-link :to="route.path" class="app-menu__link">
          <svg-icon :name="route.icon" :size="16" />
          <span class="app-menu__text">{{ route.text }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
/**
 * AppMenu.vue - 侧边栏主导航菜单
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import SvgIcon from '@/SvgIcon'

import Documentation from '../router/documentation'
import Samples from '../router/samples'

export default {
  name: 'AppMenu',
  componentName: 'AppMenu',
  components: {
    SvgIcon
  },
  data() {
    return {
      routes: [
        Documentation,
        Samples
      ]
    }
  }
}
</script>

<style scoped lang="less">
.app-menu {
  margin: 0;
  padding: 10px 0;
  overflow: hidden;
}

.app-menu__list,
.app-menu__item{
  margin:0;
  padding:0;
  list-style-type: none;
  overflow:hidden;
}

.app-menu__item {
  height: 40px;
  line-height: 40px;

  + .app-menu__item{
    margin-top:5px;
  }
}

.app-menu__link {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: auto;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  .ellipsis(1);
  .anchor(@third_text_color);

  &.active{
    .anchor(@primary_color);
    background-color: @menu_bg_color;
  }

  .svg-icon {
    padding-right: 10px;
  }
}

.base-aside--collapsed {
  .app-menu__link {
    padding: 0;
    width: 100%;
    justify-content: center;

    .svg-icon {
      padding-right: 0;
    }

    .app-menu__text {
      display: none;
    }
  }
}
</style>
