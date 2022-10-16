<template>
  <base-container>
    <base-header flex border height="inner">
      <breadcrumb-nav>
        <breadcrumb-nav-item to="/" icon="circle-arrow-left">Home</breadcrumb-nav-item>
        <breadcrumb-nav-item current>API Documentation</breadcrumb-nav-item>
      </breadcrumb-nav>
    </base-header>
    <base-main padding="outer">
      <article class="article">
        <h2 class="article__h1">svg-icon.vue API Documentation</h2>
        <p>
          svg-icon.vue 为开发者提供了用来在 VUE 项目中显示 SVG 图标的工具。
        </p>
        <h2 class="article__h2">安装</h2>
        <p>svg-icon.vue 的安装十分简单，可以直接在命令行运行 npm install 命令安装，也可以直接在项目的 package.js 中配置依赖：</p>
        <h3 class="article__h3">在命令行中安装</h3>
        <pre class="article__pre"><code class="article__code">npm i @yaohaixiao/svg-icon.vue</code></pre>
        <h3 class="article__h3">在 package.js 文件中添加依赖</h3>
        <pre class="article__pre"><code class="article__code">"@yaohaixiao/svg-icon.vue": "1.x.x"</code></pre>
        <h2 class="article__h2">调用语法</h2>
        <p>
          SvgIcon 组件使用起来十分简单，调用语法如下：
        </p>
        <pre class="article__pre"><code class="article__code">&lt;svg-icon :name="iconName" :size="iconSize" :color="iconColor" /&gt;</code></pre>

        <h2 class="article__h2">参数说明</h2>
        <table class="article__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>--</td>
            <td>tips</td>
            <td>图标名称：图标库中所有图标icon-后的名称。</td>
          </tr>
          <tr>
            <td>size</td>
            <td>number</td>
            <td>0以上的整数</td>
            <td>16</td>
            <td>图标大小</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>表示色值的字符串</td>
            <td>--</td>
            <td>图标颜色色值：16进制色值或者RGB设置</td>
          </tr>
          </tbody>
        </table>
        <h2 class="article__h2">基础用法</h2>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <svg-icon name="plugins" />
              <svg-icon name="database-read" :size="24" />
              <svg-icon name="database-lock" :size="32" />
            </usage-case-item>
          </template>
          <template v-slot:tips>
            size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size 大小。
          </template>
          <template v-slot:code>
            <pre class="article__pre"><code class="article__code">&lt;template&gt;
  &lt;svg-icon name="plugins" /&gt;
  &lt;svg-icon name="database-read" :size="24" /&gt;
  &lt;svg-icon name="database-lock" :size="32" /&gt;
&lt;/template&gt;</code></pre>
          </template>
        </usage-case>
        <h2 class="article__h2">设置颜色</h2>
        <p>SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color属性设置颜色。</p>
        <h3 class="article__h3">通过 CSS 设置颜色</h3>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon name="database-read" :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon name="database-lock" :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon name="plugins" :size="24" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            通过 CSS 设置颜色，图标的颜色与 case-icon 元素的 color 值一致。
          </template>
          <template v-slot:code>
            <pre class="article__pre"><code class="article__code">&lt;template&gt;
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

&lt;style lang="less"&gt;
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
                <svg-icon name="aside-environment" :size="24" color="#07B759" />
              </span>
              <span class="case-icon">
                <svg-icon name="aside-branch" :size="24" color="#507AFE" />
              </span>
              <span class="case-icon">
                <svg-icon name="aside-pc" :size="24" color="#FF9901" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            通过 color 属性设置颜色，此时父节点使用 CSS 设置了样式对 icon 的颜色控制失效。在图标颜色固定不变时，可直接使用 color 参数设置颜色。
          </template>
          <template v-slot:code>
            <pre class="article__pre"><code class="article__code">&lt;template&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-environment" :size="24" color="#07B759"/&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-branch" :size="24" color="#507AFE"/&gt;
  &lt;/span&gt;
  &lt;span class="case-icon"&gt;
    &lt;svg-icon name="aside-pc" :size="24" color="#FF9901"/&gt;
  &lt;/span&gt;
&lt;/template&gt;</code></pre>
          </template>
        </usage-case>
        <h2 class="article__h2">高级用法</h2>
        <p>如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。</p>
        <usage-case>
          <template v-slot:case>
            <usage-case-item>
              <span class="case-icon">
                <svg-icon name="moon-home" :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon name="moon-home2" :size="24" />
              </span>
              <span class="case-icon">
                <svg-icon name="moon-home3" :size="24" />
              </span>
            </usage-case-item>
          </template>
          <template v-slot:tips>
            SvgIcon 组件支持 import 导入自定义的组件集，然后使用 render() 方法导入自定义的图标集。
          </template>
          <template v-slot:code>
            <pre class="article__pre"><code class="article__code">&lt;template&gt;
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
// ico-moon.js
// =============================================================
// icoMoonSet(自定义图标集)的格式如下：
// const icoMoonSet = {
//   title: 'icoMoon 图标集',
//   symbols: [
//     '&lt;symbol id="icon-moon-home" viewBox="0 0 16 16"&gt;&lt;path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"&gt;&lt;/path&gt;&lt;/symbol&gt;',
//     '&lt;symbol id="icon-moon-home2" viewBox="0 0 16 16"&gt;&lt;path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"&gt;&lt;/path&gt;&lt;/symbol&gt;',
//     '&lt;symbol id="icon-moon-home3" viewBox="0 0 16 16"&gt;&lt;path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"&gt;&lt;/path&gt;&lt;/symbol&gt;'
//   ]
// }
//
// export default icoMoonSet

// 导入 icoMoonSet 图标集（图标集可以导入，也可以直接使用图标数据对象）
import icoMoonSet from '$assets/ico-moon'
// 导入 render 方法
import { render } from 'svg-icon.vue/utils/utils'

// 绘制自定义图标集
render(icoMoonSet)

// 在调用 SvgIcon 组件的 VUE 组件初始化前使用 render() 方法
export default {
  // 其他逻辑
}
&lt;/script&gt;</code></pre>
          </template>
        </usage-case>
      </article>
    </base-main>
  </base-container>
</template>

<script>
/**
 * PageDocumentation.vue - API 文档页面
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.08
 */
import BaseContainer from 'components/BaseContainer'
import BaseHeader from 'components/BaseHeader'
import BaseMain from 'components/BaseMain'
import BreadcrumbNav from 'components/BreadcrumbNav'
import BreadcrumbNavItem from 'components/BreadcrumbNavItem'

import UsageCase from 'components/UsageCase/Case'
import UsageCaseItem from 'components/UsageCase/Item'
import SvgIcon from '@/SvgIcon'

import iconSet from '$assets/ico-moon'
import { render } from '@/utils/utils'
render(iconSet)

export default {
  name: 'PageDocumentation',
  componentName: 'PageDocumentation',
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
  cursor:pointer;
  overflow: hidden;

  &:hover {
    color: @primary_color;
  }
}
</style>
