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
        <h2 class="article__h2">调用语法</h2>
        <p>
          SvgIcon 组件使用起来十分简单，调用语法如下：
        </p>
        <pre class="article__pre"><code class="article__code">&lt;svg-icon :name="iconName" :size="iconSize" :color="iconColor" /&gt;</code></pre>
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
        <p>SvgIcon 组件即可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color属性设置颜色。</p>
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
