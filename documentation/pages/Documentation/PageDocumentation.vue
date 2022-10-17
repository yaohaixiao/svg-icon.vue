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
        <p>svg-icon.vue 的安装十分简单，可以直接在命令行中运行 npm install 命令安装，也可以直接在项目的 package.js 中配置依赖：</p>
        <h3 class="article__h3">在命令行中安装</h3>
        <pre class="article__pre"><code class="article__code">npm i @yaohaixiao/svg-icon.vue</code></pre>
        <h3 class="article__h3">在 package.js 文件中添加依赖</h3>
        <pre class="article__pre"><code class="article__code">"@yaohaixiao/svg-icon.vue": "1.x.x"</code></pre>
        <h2 class="article__h2">render() 方法</h2>
        <p>SvgIcon 组件至 2.0.0 版本开始，不再直接绘制 default 图标集。需要手动导入 render() 方法。</p>
        <pre class="article__pre"><code class="article__code">import { render } from 'svg-icon.vue/utils/utils'</code></pre>
        <h3 class="article__h3">调用语法</h3>
        <pre class="article__pre"><code class="article__code">render(iconSet)</code></pre>
        <h3 class="article__h3">参数说明</h3>
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
            <td>iconSet</td>
            <td>Object</td>
            <td>--</td>
            <td>--</td>
            <td>可选，图标集数据对象。</td>
          </tr>
          <tr>
            <td>iconSet.title</td>
            <td>String</td>
            <td>--</td>
            <td>--</td>
            <td>必选，图标集名称。</td>
          </tr>
          <tr>
            <td>iconSet.symbols</td>
            <td>Array</td>
            <td>--</td>
            <td>--</td>
            <td>必选，存储 svg 图标的 symbols 数组 图标集。</td>
          </tr>
          </tbody>
        </table>
        <p>绘制 default 图标集：</p>
        <pre class="article__pre"><code class="article__code">import { render } from 'svg-icon.vue/utils/utils'
// 不传递 iconSet 参数则绘制 default 图标集
render()</code></pre>
        <p>绘制自定义的图标集：</p>
        <pre class="article__pre"><code class="article__code">import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'
import { render } from 'svg-icon.vue/utils/utils'

// 绘制 Font Awesome 免费版图标集
render(fontAwesomeSet)</code></pre>
        <p>以下是 svg-icon.vue 内置的所有图标集：</p>
        <ol>
          <li><a href="http://brankic1979.com/icons/">Brankic 1979</a>：svg-icon.vue/assets/brankic-1979</li>
          <li><a href="http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons">Broccolidry</a>：svg-icon.vue/assets/broccolidry</li>
          <li><a href="https://github.com/yaohaixiao/svg-icon.vue">Default</a>：svg-icon.vue/assets/default</li>
          <li><a href="http://dribbble.com/shots/928458-80-Shades-of-White-Icons">Eighty Shades</a>：svg-icon.vue/assets/eighty-shades</li>
          <li><a href="http://www.entypo.com/">Entypo+</a>：svg-icon.vue/assets/entypo</li>
          <li><a href="https://feathericons.com/">Feather</a>：svg-icon.vue/assets/feather</li>
          <li><a href="https://github.com/FortAwesome/Font-Awesome">Font Awesome</a>：svg-icon.vue/assets/font-awesome</li>
          <li><a href="http://hawcons.com/">Hawcons</a>：svg-icon.vue/assets/hawcons</li>
          <li><a href="https://github.com/somerandomdude/Iconic">Iconic</a>：svg-icon.vue/assets/iconic</li>
          <li><a href="https://designmodo.com/linecons-free/">Linecons</a>：svg-icon.vue/assets/linecons</li>
          <li><a href="https://material.io/resources/icons">Material</a>：svg-icon.vue/assets/material</li>
          <li><a href="http://www.alessioatzeni.com/meteocons/">Meteocons</a>：svg-icon.vue/assets/meteocons</li>
          <li><a href="http://dribbble.com/shots/929153-Steady-set-of-icons">Steadysets</a>：svg-icon.vue/assets/steadysets</li>
          <li><a href="http://typicons.com/">Typicons</a>：svg-icon.vue/assets/typicons</li>
          <li><a href="https://designmodo.com/linecons-free/">Vicons</a>：svg-icon.vue/assets/vicons</li>
          <li><a href="http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/">wpzoom</a>：svg-icon.vue/assets/wpzoom</li>
          <li><a href="http://www.zondicons.com/">Zondicons</a>：svg-icon.vue/assets/zondicons</li>
        </ol>
        <p>以上图标集除 Google 的 Material 图标集采用 Apache License 2.0 协议，其余的图标库基本都可以直接用于商业用途。使用时请根据需要选择使用。</p>
        <h2 class="article__h2">导入 SvgIcon 组件</h2>
        <p>使用 render() 方法绘制 svg 图标集后，就可以调用 SvgIcon 组件显示图标了。</p>
        <pre class="article__pre"><code class="article__code">import SvgIcon from 'svg-icon.vue'

export default {
  components: {
    SvgIcon
  }
}</code></pre>
        <h2 class="article__h2">SvgIcon 组件</h2>
        <p>SvgIcon.vue 是 svg-icon.vue 的核心组件，用来显示 render() 方法绘制的 svg 图标集中的图标。</p>
        <h3 class="article__h3">调用语法</h3>
        <p>
          SvgIcon 组件使用起来十分简单，调用语法如下：
        </p>
        <pre class="article__pre"><code class="article__code">&lt;svg-icon :name="iconName" :size="iconSize" :color="iconColor" /&gt;</code></pre>
        <h3 class="article__h3">参数说明</h3>
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
        <h2 class="article__h2">调用用法</h2>
        <p>SvgIcon 组件的使用方法如下：</p>
        <h2 class="article__h3">基础用法</h2>
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
        <h3 class="article__h3">设置颜色</h3>
        <p>SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。</p>
        <h4 class="article__h4">通过 CSS 设置颜色</h4>
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
            通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。
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
        <h4 class="article__h4">通过 color 属性设置颜色</h4>
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
            设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。
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
// ico-moon.js - 图标集实例
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
