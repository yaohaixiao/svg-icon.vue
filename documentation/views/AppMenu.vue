<template>
  <nav class="app-menu">
    <ul class="app-menu__list">
      <li
        v-for="(route, i) in routes"
        :key="`menu-${i}`"
        class="app-menu__item">
        <div class="app-menu__title">
          <router-link
            :to="`/${route.path}`"
            class="app-menu__link">
            <svg-icon
              :name="route.icon"
              :size="16" />
            <span class="app-menu__text">{{ route.text }}</span>
          </router-link>
          <span
            v-if="hasChildren(route)"
            class="app-menu__arrow">
            <svg-icon
              name="arrow-down"
              :size="16" />
          </span>
        </div>
        <ul
          v-if="route.children && !route.meta.hide"
          class="app-submenu__list">
          <li
            v-for="(child, i) in route.children"
            :key="`child-${i}`"
            class="app-submenu__item">
            <router-link
              :to="{ name: child.name }"
              class="app-menu__link">
              <span class="app-submenu__text">{{ child.text }}</span>
            </router-link>
          </li>
        </ul>
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
import Usage from '../router/usage'
import Icons from 'router/icons'

export default {
  name: 'AppMenu',
  componentName: 'AppMenu',
  components: {
    SvgIcon
  },
  data() {
    return {
      routes: [Documentation, Usage, Icons]
    }
  },
  methods: {
    hasChildren(route) {
      const children = route.children
      return !route.meta.hide && children && children.length > 0
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
.app-menu__item,
.app-submenu__list,
.app-submenu__item {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.app-menu__item {
  min-height: 40px;
  line-height: 40px;

  + .app-menu__item {
    margin-top: 5px;
  }
}

.app-menu__title {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.app-menu__arrow {
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 10px;
  margin: 0;
  width: 16px;
  height: 16px;
  transform: translateY(-50%) rotate(180deg);
  cursor: pointer;
  overflow: hidden;

  .svg-icon {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  &.active {
    .anchor(@primary_color);
    background-color: @menu_bg_color;
  }

  &.checked {
    .anchor(@primary_color);
  }

  .svg-icon {
    padding-right: 10px;
  }
}

.app-submenu__item {
  .app-menu__link {
    padding-left: 42px;
  }
}

.base-aside--collapsed {
  .app-menu {
    width: 100%;
  }

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

    &.checked {
      background-color: @menu_bg_color;
    }
  }

  .app-menu__arrow,
  .app-submenu__list {
    display: none;
  }
}
</style>
