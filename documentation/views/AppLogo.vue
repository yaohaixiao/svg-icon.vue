<template>
  <div
    class="app-logo"
    @click="toHome">
    <span class="app-logo__icon">
      <svg-icon
        name="card-deploy"
        :size="22" />
    </span>
    <h1 class="app-logo__title">
      <em class="app-logo__key">svg-icon</em>
      .vue
    </h1>
  </div>
</template>

<script>
/**
 * AppLogo.vue - 应用 LOGO 区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import SvgIcon from '@/SvgIcon'

export default {
  name: 'AppLogo',
  componentName: 'AppLogo',
  components: {
    SvgIcon
  },
  computed: {
    isHome() {
      return this.$route.name === 'PageDocumentation'
    }
  },
  methods: {
    toHome() {
      if (this.isHome) {
        return false
      }

      this.$router.push({
        path: '/docs'
      })
    }
  }
}
</script>

<style scoped lang="less">
.app-logo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: auto;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    .app-logo__icon {
      background-color: @primary_color;
    }
  }
}

.app-logo__icon {
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 32px;
  height: 32px;
  .radius(16px);
  background-color: @third_text_color;
  color: @white;
  text-align: center;
  overflow: hidden;

  .svg-icon {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.app-logo__title {
  padding-left: 10px;
  color: @dark_green;
  font-family: Georgia, 'Courier New', Consolas, Arial, sans-serif;
}

.app-logo__key {
  color: @primary_color;
}
</style>
