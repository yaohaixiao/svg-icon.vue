/**
 * usage.js - Usage 文档路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
export default {
  text: 'Usage',
  path: 'usage',
  icon: 'card-logs',
  component: () => import(/* webpackChunkName: "ModuleUsage" */ '../pages/Usage/ModuleUsage'),
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
      component: () =>
        import(/* webpackChunkName: "PageUsage" */ '../pages/Usage/PageUsage')
    }
  ]
}
