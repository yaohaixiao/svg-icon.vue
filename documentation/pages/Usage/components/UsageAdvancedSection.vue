<template>
  <section
    class="article__section"
    v-once>
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
              name="fa-question"
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
    &lt;svg-icon name="fa-question" :size="24" /&gt;
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
import BaseUsage from '$components/BaseUsage'
import BaseUsageCase from '$components/BaseUsage/Case'

import SvgIcon from '@/SvgIcon'

import iconSet from '$assets/ico-moon'
import { render } from '@/utils/utils'

const fontAwesomeSet = {
  title: 'FontAwesome 图标集',
  symbols: [
    '<symbol id="icon-fa-asterisk" viewBox="0 0 26 28">' +
      '<path d="M23.156 16.406c0.953 0.547 1.281 1.781 0.734 2.734l-1 1.719c-0.547 0.953-1.781 1.281-2.734 0.734l-4.156-2.391v4.797c0 1.094-0.906 2-2 2h-2c-1.094 0-2-0.906-2-2v-4.797l-4.156 2.391c-0.953 0.547-2.187 0.219-2.734-0.734l-1-1.719c-0.547-0.953-0.219-2.188 0.734-2.734l4.156-2.406-4.156-2.406c-0.953-0.547-1.281-1.781-0.734-2.734l1-1.719c0.547-0.953 1.781-1.281 2.734-0.734l4.156 2.391v-4.797c0-1.094 0.906-2 2-2h2c1.094 0 2 0.906 2 2v4.797l4.156-2.391c0.953-0.547 2.188-0.219 2.734 0.734l1 1.719c0.547 0.953 0.219 2.188-0.734 2.734l-4.156 2.406z"></path>' +
      '</symbol>',
    '<symbol id="icon-fa-plus" viewBox="0 0 22 28">' +
      '<path d="M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"></path>' +
      '</symbol>',
    '<symbol id="icon-fa-question" viewBox="0 0 17 28">' +
      '<path d="M11 19.625v3.75c0 0.344-0.281 0.625-0.625 0.625h-3.75c-0.344 0-0.625-0.281-0.625-0.625v-3.75c0-0.344 0.281-0.625 0.625-0.625h3.75c0.344 0 0.625 0.281 0.625 0.625zM15.937 10.25c0 2.969-2.016 4.109-3.5 4.937-0.922 0.531-1.5 1.609-1.5 2.063v0c0 0.344-0.266 0.75-0.625 0.75h-3.75c-0.344 0-0.562-0.531-0.562-0.875v-0.703c0-1.891 1.875-3.516 3.25-4.141 1.203-0.547 1.703-1.062 1.703-2.063 0-0.875-1.141-1.656-2.406-1.656-0.703 0-1.344 0.219-1.687 0.453-0.375 0.266-0.75 0.641-1.672 1.797-0.125 0.156-0.313 0.25-0.484 0.25-0.141 0-0.266-0.047-0.391-0.125l-2.562-1.953c-0.266-0.203-0.328-0.547-0.156-0.828 1.687-2.797 4.062-4.156 7.25-4.156 3.344 0 7.094 2.672 7.094 6.25z"></path>' +
      '</symbol>'
  ]
}

render(fontAwesomeSet)
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
