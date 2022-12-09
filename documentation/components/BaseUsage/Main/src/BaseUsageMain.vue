<template>
  <div
    ref="main"
    :class="className"
    :style="cssRules">
    <slot />
  </div>
</template>

<script>
/**
 * BaseUsageMain.vue - BaseUsageMain 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
export default {
  name: 'BaseUsageMain',
  componentName: 'BaseUsageMain',
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      folded: false,
      defaultHeight: 'auto',
      codeHeight: 'auto'
    }
  },
  computed: {
    className() {
      return [
        'base-usage-main',
        {
          'base-usage-main--folded': this.folded
        }
      ]
    },
    cssRules() {
      const codeHeight = this.codeHeight
      const height = codeHeight === 'auto' ? codeHeight : codeHeight + 'px'

      return {
        height: height
      }
    }
  },
  watch: {
    expanded() {
      this.update()
    },
    folded() {
      this.toggle()
    }
  },
  created() {
    this.update()
  },
  mounted() {
    const $main = this.$refs.main
    const height = $main.offsetHeight - 2

    if (height > 36) {
      this.codeHeight = height
      this.defaultHeight = height
    }

    if (this.folded) {
      this.codeHeight = 0
    }
  },
  methods: {
    update() {
      this.folded = !this.expanded
    },
    expand() {
      this.codeHeight = this.defaultHeight
    },
    fold() {
      this.codeHeight = 0
    },
    toggle() {
      if (this.folded) {
        this.expand()
      } else {
        this.fold()
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './base-usage-main';
</style>
