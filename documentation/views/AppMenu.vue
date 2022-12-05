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
            :class="['app-menu__arrow', { 'is-folded': folded }]"
            @click="onFold">
            <svg-icon
              name="arrow-down"
              :size="16" />
          </span>
        </div>
        <transition name="fold">
          <ul
            v-if="route.children && !route.meta.hide && !folded"
            :id="`submenu-${i}`"
            class="app-submenu__list">
            <li
              v-for="(child, j) in route.children"
              :key="`child-${j}`"
              class="app-submenu__item">
              <router-link
                :to="{ name: child.name }"
                class="app-menu__link">
                <span class="app-submenu__text">{{ child.text }}</span>
              </router-link>
            </li>
          </ul>
        </transition>
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

import Documentation from '$router/documentation'
import Usage from '$router/usage'
import Icons from '$router/icons'

export default {
  name: 'AppMenu',
  componentName: 'AppMenu',
  components: {
    SvgIcon
  },
  data() {
    return {
      routes: [Documentation, Usage, Icons],
      folded: false
    }
  },
  methods: {
    hasChildren(route) {
      const children = route.children
      return !route.meta.hide && children && children.length > 0
    },
    onFold() {
      this.folded = !this.folded
    }
  }
}
</script>

<style lang="less">
.app-menu {
  margin: 0;
  padding: 10px 0;
  overflow: hidden;

  &__list,
  &__item {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: hidden;
  }

  &__item {
    min-height: 40px;
    line-height: 40px;

    + .app-menu__item {
      margin-top: 5px;
    }
  }

  &__title {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  &__arrow {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 10px;
    margin: 0;
    width: 16px;
    height: 16px;
    transform: translateY(-50%) rotate(-180deg);
    transition-duration: 0.3s;
    cursor: pointer;
    overflow: hidden;

    .svg-icon {
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &.is-folded {
      transform: translateY(-50%) rotate(0deg);
    }
  }

  &__link {
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
}

.app-submenu {
  &__list,
  &__item {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: hidden;
  }

  &__list {
    height: 680px;
    transition: 0.3s height linear;
  }

  &__item {
    .app-menu__link {
      padding-left: 42px;
    }
  }
}

.base-aside--collapsed {
  .app-menu {
    width: 100%;

    &__link {
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
  }

  .app-menu__arrow,
  .app-submenu__list {
    display: none;
  }
}

.fold-enter-active,
.fold-leave-to {
  height: 0;
}
</style>
