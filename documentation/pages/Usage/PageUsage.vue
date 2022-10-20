<template>
  <base-container>
    <base-header
      flex
      border
      height="inner">
      <breadcrumb-nav>
        <breadcrumb-nav-item
          to="/"
          icon="circle-arrow-left">
          Home
        </breadcrumb-nav-item>
        <breadcrumb-nav-item current>Usage</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h1 class="article__h1">Usage</h1>
        <h2 class="article__h2">基础用法</h2>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <svg-icon name="plugins" />
              <svg-icon
                name="database-read"
                :size="24" />
              <svg-icon
                name="database-lock"
                :size="32" />
            </usage-case-item>
          </template>
          <template v-slot:tips>
            size 和 color 参数是可选的，只用设置 name 属性（ icon
            的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size
            大小。
          </template>
          <template v-slot:code>
            <pre
              class="article__pre"><code class="article__code">&lt;template&gt;
  &lt;svg-icon name="plugins" /&gt;
  &lt;svg-icon name="database-read" :size="24" /&gt;
  &lt;svg-icon name="database-lock" :size="32" /&gt;
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
&lt;/script&gt;</code></pre>
          </template>
        </usage-case>
        <h2 class="article__h2">设置颜色</h2>
        <p>
          SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS
          样式控制图标颜色，也可以直接设置 color 属性设置颜色。
        </p>
        <h3 class="article__h3">通过 CSS 设置颜色</h3>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon
                  name="database-read"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="database-lock"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="plugins"
                  :size="24" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素
            case-icon 的 color 值一致。
          </template>
          <template v-slot:code>
            <pre
              class="article__pre"><code class="article__code">&lt;template&gt;
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
        </usage-case>
        <h3 class="article__h3">通过 color 属性设置颜色</h3>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon
                  name="aside-environment"
                  :size="24"
                  color="#07B759" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="aside-branch"
                  :size="24"
                  color="#507AFE" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="aside-pc"
                  :size="24"
                  color="#FF9901" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color
            样式将不再起作用。
          </template>
          <template v-slot:code>
            <pre
              class="article__pre"><code class="article__code">&lt;template&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-environment" :size="24" color="#07B759"/&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-branch" :size="24" color="#507AFE"/&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-pc" :size="24" color="#FF9901"/&gt;
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
        </usage-case>
        <h2 class="article__h2">高级用法</h2>
        <p>
          如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用
          render() 方法添加自定义的图标集，方法如下。
        </p>
        <h3 class="article__h3">导入外部文件中的图标集</h3>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon
                  name="fa-asterisk"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="fa-plus"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="fa-glass"
                  :size="24" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render()
            方法绘制图标集。
          </template>
          <template v-slot:code>
            <pre
              class="article__pre"><code class="article__code">&lt;template&gt;
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
        </usage-case>
        <h3 class="article__h3">导入对象中的图标集</h3>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon
                  name="moon-home"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="moon-home2"
                  :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon
                  name="moon-home3"
                  :size="24" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            render() 可以直接绘制 JavaScript 对象数据中的图标集。
          </template>
          <template v-slot:code>
            <pre
              class="article__pre"><code class="article__code">&lt;template&gt;
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
        </usage-case>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageUsage.vue - Usage 说明页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import BaseContainer from 'components/BaseContainer'
import BaseHeader from 'components/BaseHeader'
import BaseMain from 'components/BaseMain'
import BreadcrumbNav from 'components/BreadcrumbNav'
import BreadcrumbNavItem from 'components/BreadcrumbNavItem'

import UsageCase from 'components/UsageCase/Case'
import UsageCaseItem from 'components/UsageCase/Item'
import SvgIcon from '@/SvgIcon'

import fontAwesomeSet from '@/assets/font-awesome'
import iconSet from '$assets/ico-moon'
import { render } from '@/utils/utils'

render(fontAwesomeSet)
render(iconSet)

export default {
  name: 'PageUsage',
  componentName: 'PageUsage',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BreadcrumbNav,
    BreadcrumbNavItem,
    UsageCase,
    UsageCaseItem,
    SvgIcon
  }
}
</script>

<style scoped lang="less">
.case-icon {
  display: inline-block;
  margin: 0 8px;
  color: @third_text_color;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    color: @primary_color;
  }
}
</style>
