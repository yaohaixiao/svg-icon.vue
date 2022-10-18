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
        <h1 class="article__h1">API Documentation</h1>
        <p>
          svg-icon.vue 为开发者提供了用来在 VUE 项目中显示 SVG 图标的工具。
        </p>
        <h2 class="article__h2">安装</h2>
        <p>svg-icon.vue 的安装十分简单，可以直接在命令行中运行 npm install 命令安装，也可以直接在项目的 package.json 中配置依赖：</p>
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

export default {
  name: 'PageDocumentation',
  componentName: 'PageDocumentation',
  components: {
    BaseContainer,
    BaseHeader,
    BaseMain,
    BreadcrumbNav,
    BreadcrumbNavItem
  }
}
</script>

<style scoped></style>
