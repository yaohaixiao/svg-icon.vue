/**
 * usage.js - Usage 文档路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import ModuleUsage from '$pages/Usage/ModuleUsage'
import PageUsage from '$pages/Usage/PageUsage'

export default {
  text: 'Usage',
  path: 'usage',
  icon: 'bold-units',
  component: ModuleUsage,
  // component: () =>
  //   import(/* webpackChunkName: "ModuleUsage" */ '../pages/Usage/ModuleUsage'),
  meta: {
    hide: true
  },
  children: [
    {
      text: 'Usage',
      name: 'PageUsage',
      path: '',
      meta: {
        hide: false
      },
      component: PageUsage
      // component: () =>
      //   import(/* webpackChunkName: "PageUsage" */ '../pages/Usage/PageUsage')
    }
  ]
}
