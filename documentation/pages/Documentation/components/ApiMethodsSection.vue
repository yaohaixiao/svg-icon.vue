<template>
  <section
    class="article__section"
    v-once>
    <h2 class="article__h2">Methods</h2>
    <p>
      svg-icon.vue 的 API 对外提供了 render() 和 getSymbols()
      两个方法，以下是这两个方法的具体使用细节。
    </p>
    <h2 class="article__h3">render() 方法</h2>
    <p>
      SvgIcon 组件至 2.0.0 版本开始，不再直接绘制 default 图标集。需要手动导入
      render() 方法。
    </p>
    <pre
      class="article__pre"><code class="article__code">import { render } from 'svg-icon.vue/utils/utils'</code></pre>
    <h3 class="article__h4">调用语法</h3>
    <pre
      class="article__pre"><code class="article__code">render(iconSet)</code></pre>
    <h3 class="article__h4">参数说明</h3>
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
          <td>Object | Array</td>
          <td>--</td>
          <td>--</td>
          <td>可选，图标集数据对象或者图标集对象数组。</td>
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
    <pre
      class="article__pre"><code class="article__code">import { render } from 'svg-icon.vue/utils/utils'
// 不传递 iconSet 参数则绘制 default 图标集
render()</code></pre>
    <p>绘制自定义的图标集：</p>
    <pre
      class="article__pre"><code class="article__code">import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'
import defaultSet from 'svg-icon.vue/assets/default'
import { render } from 'svg-icon.vue/utils/utils'

// 绘制单个（Font Awesome 免费版）图标集
render(fontAwesomeSet)

// 绘制多个图标集
render([default, fontAwesomeSet])</code></pre>
    <base-tips
      type="info"
      effect="plain">
      说明：如果你只想使用内置图标集中特定的几个图标，你可以在 API 文档的
      <a href="https://yaohaixiao.github.io/svg-icon.vue/#/icons">icons</a>
      相关页面选中需要的图标，然后点击图标购物车，我们会自动为你生成自定义图标集。并且提供下载
      SVG 图标集和 JS 源代码复制功能。
      如果你仅仅想使用某个图标，我们也同时提供单独下载 SVG 图标的功能。
    </base-tips>
    <p>以下是 svg-icon.vue 内置的所有图标集：</p>
    <ol>
      <li>
        <a href="http://brankic1979.com/icons/">Brankic 1979</a>
        ：svg-icon.vue/assets/brankic-1979
      </li>
      <li>
        <a
          href="http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons">
          Broccolidry
        </a>
        ：svg-icon.vue/assets/broccolidry
      </li>
      <li>
        <a href="https://github.com/yaohaixiao/svg-icon.vue">Default</a>
        ：svg-icon.vue/assets/default
      </li>
      <li>
        <a href="http://dribbble.com/shots/928458-80-Shades-of-White-Icons">
          Eighty Shades
        </a>
        ：svg-icon.vue/assets/eighty-shades
      </li>
      <li>
        <a href="http://www.entypo.com/">Entypo+</a>
        ：svg-icon.vue/assets/entypo
      </li>
      <li>
        <a href="https://feathericons.com/">Feather</a>
        ：svg-icon.vue/assets/feather
      </li>
      <li>
        <a href="https://github.com/FortAwesome/Font-Awesome">Font Awesome</a>
        ：svg-icon.vue/assets/font-awesome
      </li>
      <li>
        <a href="http://hawcons.com/">Hawcons</a>
        ：svg-icon.vue/assets/hawcons
      </li>
      <li>
        <a href="https://github.com/somerandomdude/Iconic">Iconic</a>
        ：svg-icon.vue/assets/iconic
      </li>
      <li>
        <a href="https://designmodo.com/linecons-free/">Linecons</a>
        ：svg-icon.vue/assets/linecons
      </li>
      <li>
        <a href="https://material.io/resources/icons">Material</a>
        ：svg-icon.vue/assets/material
      </li>
      <li>
        <a href="http://www.alessioatzeni.com/meteocons/">Meteocons</a>
        ：svg-icon.vue/assets/meteocons
      </li>
      <li>
        <a href="http://dribbble.com/shots/929153-Steady-set-of-icons">
          Steadysets
        </a>
        ：svg-icon.vue/assets/steadysets
      </li>
      <li>
        <a href="http://typicons.com/">Typicons</a>
        ：svg-icon.vue/assets/typicons
      </li>
      <li>
        <a href="https://designmodo.com/linecons-free/">Vicons</a>
        ：svg-icon.vue/assets/vicons
      </li>
      <li>
        <a
          href="http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/">
          wpzoom
        </a>
        ：svg-icon.vue/assets/wpzoom
      </li>
      <li>
        <a href="http://www.zondicons.com/">Zondicons</a>
        ：svg-icon.vue/assets/zondicons
      </li>
    </ol>
    <base-tips
      type="warning"
      effect="plain">
      说明：以上图标集除 Google 的 Material 图标集采用 Apache License 2.0
      协议，其余的图标库基本都可以直接用于商业用途。使用时请根据需要选择使用。
    </base-tips>
    <h2 class="article__h3">getSymbols() 方法</h2>
    <p>
      getSymbols() 方法返回使用 render() 方法绘制的图标集中所有 symbols
      （数组）数据。
    </p>
    <pre
      class="article__pre"><code class="article__code">import { render, getSymbols } from 'svg-icon.vue/utils/utils'

// 绘制 default 图标集
render()

// => 返回 default 图标集中的 symbols （数组）数据
const symbols = getSymbols()</code></pre>
  </section>
</template>

<script>
/**
 * ApiMethodsSection.vue - API Docs - Methods Section
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
const BaseTips = () =>
  import(/* webpackChunkName: "BaseTips" */ '$components/BaseTips')

export default {
  name: 'ApiMethodsSection',
  componentName: 'ApiMethodsSection',
  components: {
    BaseTips
  }
}
</script>
