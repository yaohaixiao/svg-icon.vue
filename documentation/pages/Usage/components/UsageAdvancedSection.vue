<template>
  <section class="article__section">
    <h2 class="article__h2">高级用法</h2>
    <p>
      如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render()
      方法添加自定义的图标集，方法如下。
    </p>
    <h3 class="article__h3">导入外部文件中的图标集</h3>
    <base-usage>
      <template v-slot:case>
        <base-usage-case>
          <span class="base-usage-case__icon">
            <svg-icon
              name="fa-asterisk"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="fa-plus"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="fa-glass"
              :size="24" />
          </span>
        </base-usage-case>
      </template>
      <template v-slot:tips>
        使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render()
        方法绘制图标集。
      </template>
      <template v-slot:code>
        <pre
          class="base-usage-code__pre"><code class="base-usage-code__code">&lt;template&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="fa-asterisk" :size="24" /&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="fa-plus" :size="24" /&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="fa-glass" :size="24" /&gt;
  &lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
import SvgIcon from 'svg-icon.vue'

import { render } from 'svg-icon.vue/utils/utils'
// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集
import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'

render(fontAwesomeSet)

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
    <h3 class="article__h3">导入对象中的图标集</h3>
    <base-usage>
      <template v-slot:case>
        <base-usage-case>
          <span class="base-usage-case__icon">
            <svg-icon
              name="moon-home"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="moon-home2"
              :size="24" />
          </span>
          <span class="base-usage-case__icon">
            <svg-icon
              name="moon-home3"
              :size="24" />
          </span>
        </base-usage-case>
      </template>
      <template v-slot:tips>
        render() 可以直接绘制 JavaScript 对象数据中的图标集。
      </template>
      <template v-slot:code>
        <pre
          class="base-usage-code__pre"><code class="base-usage-code__code">&lt;template&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="moon-home" :size="24" /&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="moon-home2" :size="24" /&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="moon-home3" :size="24" /&gt;
  &lt;/span&gt;
&lt;/template&gt;

&lt;script&gt;
&lt;script&gt;
import SvgIcon from 'svg-icon.vue'
import { render } from 'svg-icon.vue/utils/utils'

const icoMoonSet = {
  title: 'icoMoon 图标集',
  symbols: [
    '&lt;symbol id="icon-moon-home" viewBox="0 0 16 16"&gt;&lt;path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"&gt;&lt;/path&gt;&lt;/symbol&gt;',
    '&lt;symbol id="icon-moon-home2" viewBox="0 0 16 16"&gt;&lt;path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"&gt;&lt;/path&gt;&lt;/symbol&gt;',
    '&lt;symbol id="icon-moon-home3" viewBox="0 0 16 16"&gt;&lt;path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"&gt;&lt;/path&gt;&lt;/symbol&gt;'
  ]
}

// 绘制自定义图标集
render(icoMoonSet)

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
 * UsageAdvancedSection.vue - Usage - Advanced Section
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import BaseUsage from '$components/BaseUsage/Usage'
import BaseUsageCase from '$components/BaseUsage/Case'

import SvgIcon from '@/SvgIcon'

import iconSet from '$assets/ico-moon'
import { render } from '@/utils/utils'

render(iconSet)

export default {
  name: 'UsageAdvancedSection',
  componentName: 'UsageAdvancedSection',
  components: {
    BaseUsage,
    BaseUsageCase,
    SvgIcon
  }
}
</script>

<style scoped></style>
