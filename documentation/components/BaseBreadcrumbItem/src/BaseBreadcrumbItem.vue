<template>
  <span
    ref="root"
    class="base-breadcrumb-item">
    <base-link
      v-if="to"
      route
      :icon="icon"
      :href="to"
      target="_self"
      role="link">
      <slot />
    </base-link>
    <template v-else>
      <svg-icon
        v-if="icon"
        :name="icon"
        :size="16"
        class="base-breadcrumb-item__icon" />
      <span class="base-breadcrumb-item__text">
        <slot />
      </span>
    </template>
    <span
      v-if="!current"
      role="presentation"
      class="base-breadcrumb-item__separator">
      <svg-icon
        v-if="separatorIcon"
        :name="separatorIcon"
        :size="16" />
      <template v-else>
        {{ separator }}
      </template>
    </span>
  </span>
</template>

<script>
/**
 * BaseBreadcrumbItem.vue - 面包屑导航项组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseLink from '$components/BaseLink'

const SvgIcon = () => import('@/SvgIcon')

export default {
  name: 'BaseBreadcrumbItem',
  componentName: 'BaseBreadcrumbItem',
  components: {
    BaseLink,
    SvgIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    current: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: ''
    }
  },
  data() {
    return {
      separator: '',
      separatorIcon: ''
    }
  },
  inject: ['BaseBreadcrumb'],
  mounted() {
    const devBreadcrumb = this.BaseBreadcrumb

    this.separator = devBreadcrumb.separator
    this.separatorIcon = devBreadcrumb.separatorIcon

    if (this.current) {
      this.$el.setAttribute('aria-current', '')
    }
  }
}
</script>

<style lang="less">
@import './base-breadcrumb-item';
</style>
