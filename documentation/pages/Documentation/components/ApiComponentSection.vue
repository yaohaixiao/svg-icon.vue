<template>
  <section
    class="article__section"
    v-once>
    <h2 class="article__h2">Component</h2>
    <p>
      svg-icon.vue 为开发者提供了 SvgIcon 组件，使用它来显示 render() 方法绘制的
      svg 图标库中某个图标。
    </p>
    <h2 class="article__h3">导入 SvgIcon 组件</h2>
    <p>
      使用 render() 方法绘制 svg 图标集后，就可以调用 SvgIcon 组件显示图标了。
    </p>
    <pre
      class="article__pre"><code class="article__code">import SvgIcon from 'svg-icon.vue'

export default {
  components: {
    SvgIcon
  }
}</code></pre>
    <h2 class="article__h3">SvgIcon 组件</h2>
    <p>
      SvgIcon.vue 是 svg-icon.vue 的核心组件，用来显示 render() 方法绘制的 svg
      svg 图标集中的图标。
    </p>
    <h3 class="article__h4">调用语法</h3>
    <p>SvgIcon 组件使用起来十分简单，调用语法如下：</p>
    <pre
      class="article__pre"><code class="article__code">&lt;svg-icon :name="iconName" :size="iconSize" :color="iconColor" /&gt;</code></pre>
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
          <td>name</td>
          <td>string</td>
          <td>--</td>
          <td>tips</td>
          <td>图标名称：图标库中所有图标icon-后的名称。</td>
        </tr>
        <tr>
          <td>size</td>
          <td>number | string | array</td>
          <td>
            number 和 string 类型时，可选值为 0 以上的整数，此时宽度和高度相等；
            <br />
            array 类型时数组长度为 2，分别代表宽度和高度；
          </td>
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
  </section>
</template>

<script>
/**
 * ApiComponentSection.vue - API Docs - Component Section
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
export default {
  name: 'ApiComponentSection',
  componentName: 'ApiComponentSection'
}
</script>
