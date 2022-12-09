<template>
  <section
    class="article__section"
    v-once>
    <h2 class="article__h2">设置颜色</h2>
    <p>
      SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS
      样式控制图标颜色，也可以直接设置 color 属性设置颜色。
    </p>
    <h3 class="article__h3">通过 CSS 设置颜色</h3>
    <base-usage>
      <template v-slot:case>
        <base-usage-case>
          <span class="base-usage-case__icon">
            <svg-icon
              name="database-read"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="database-lock"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="plugins"
              :size="24" />
          </span>
        </base-usage-case>
      </template>
      <template v-slot:tips>
        通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素
        case-icon 的 color 值一致。
      </template>
      <template v-slot:code>
        <pre
          class="base-usage-code__pre"><code class="base-usage-code__code">&lt;template&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="database-read" :size="24" /&gt;
    &lt;/span&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="database-lock" :size="24" /&gt;
    &lt;/span&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="plugins" :size="24" /&gt;
    &lt;/span&gt;
  &lt;/template&gt;

  &lt;script&gt;
  import { render } from 'svg-icon.vue/utils/utils'
  import SvgIcon from 'svg-icon.vue'

  render()

  export default {
    components: {
      SvgIcon
    }
  }
  &lt;/script&gt;

  &lt;style scoped lang="less"&gt;
    .case-icon {
      display: inline-block;
      margin: 0 8px;
      color: @third_text_color;
      vertical-align: middle;
      cursor:pointer;
      overflow: hidden;

      &amp;:hover {
        color: @primary_color;
      }
    }
  &lt;/style&gt;</code></pre>
      </template>
    </base-usage>
    <h3 class="article__h3">通过 color 属性设置颜色</h3>
    <base-usage>
      <template v-slot:case>
        <base-usage-case>
          <span class="base-usage-case__cell">
            <svg-icon
              name="bold-environment"
              :size="24"
              color="#07B759" />
          </span>
          <span class="base-usage-case__cell">
            <svg-icon
              name="bold-branch"
              :size="24"
              color="#507AFE" />
          </span>
          <span class="base-usage-case__cell">
            <svg-icon
              name="bold-pc"
              :size="24"
              color="#FF9901" />
          </span>
        </base-usage-case>
      </template>
      <template v-slot:tips>
        设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color
        样式将不再起作用。
      </template>
      <template v-slot:code>
        <pre
          class="base-usage-code__pre"><code class="base-usage-code__code">&lt;template&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="bold-environment" :size="24" color="#07B759"/&gt;
    &lt;/span&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="bold-branch" :size="24" color="#507AFE"/&gt;
    &lt;/span&gt;
    &lt;span class="case-icon"&gt;
      &lt;svg-icon name="bold-pc" :size="24" color="#FF9901"/&gt;
    &lt;/span&gt;
  &lt;/template&gt;

  &lt;script&gt;
  import { render } from 'svg-icon.vue/utils/utils'
  import SvgIcon from 'svg-icon.vue'

  render()

  export default {
    components: {
      SvgIcon
    }
  }
  &lt;/script&gt;

  &lt;style scoped lang="less"&gt;
    .case-icon {
      display: inline-block;
      margin: 0 8px;
      color: @third_text_color;
      vertical-align: middle;
      cursor:pointer;
      overflow: hidden;

      &amp;:hover {
        color: @primary_color;
      }
    }
  &lt;/style&gt;</code></pre>
      </template>
    </base-usage>
  </section>
</template>

<script>
/**
 * UsageSetColorSection.vue - Usage - Set Color Section
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import BaseUsage from '$components/BaseUsage/Usage'
import BaseUsageCase from '$components/BaseUsage/Case'

import SvgIcon from '@/SvgIcon'

export default {
  name: 'UsageSetColorSection',
  componentName: 'UsageSetColorSection',
  components: {
    BaseUsage,
    BaseUsageCase,
    SvgIcon
  }
}
</script>
