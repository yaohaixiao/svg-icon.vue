<template>
  <section
    class="article__section"
    v-once>
    <h2 class="article__h2">基础用法</h2>
    <base-usage>
      <template v-slot:case>
        <base-usage-case>
          <span class="base-usage-case__cell">
            <svg-icon name="plugins" />
          </span>
          <span class="base-usage-case__cell">
            <svg-icon
              name="database-read"
              :size="24" />
          </span>
          <span class="base-usage-case__cell">
            <svg-icon
              name="database-lock"
              :size="32" />
          </span>
          <span class="base-usage-case__cell">
            <svg-icon
              name="deploy"
              :size="[44, 44]" />
          </span>
        </base-usage-case>
      </template>
      <template v-slot:tips>
        size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认
        size 值为 16px 大小。当然，也可以自定义设置 size 大小。
      </template>
      <template v-slot:code>
        <pre
          class="base-usage-code__pre"><code class="base-usage-code__code">&lt;template&gt; &lt;svg-icon name="plugins" /&gt; &lt;svg-icon
          name="database-read" size="24" /&gt; &lt;svg-icon name="database-lock"
          :size="32" /&gt; &lt;svg-icon name="deploy" :size="[44, 44]" /&gt;
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
    </base-usage>
  </section>
</template>

<script>
/**
 * UsageBasicSection.vue - Usage - Basic Section
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import BaseUsage from '$components/BaseUsage/Usage'
import BaseUsageCase from '$components/BaseUsage/Case'

import SvgIcon from '@/SvgIcon'

export default {
  name: 'UsageBasicSection',
  componentName: 'UsageBasicSection',
  components: {
    BaseUsage,
    BaseUsageCase,
    SvgIcon
  }
}
</script>

<style scoped></style>
