/**
 * documentation.js - API 文档路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
export default {
  text: 'API Documentation',
  path: 'docs',
  icon: 'aside-pc',
  component: () => import(/* webpackChunkName: "ModuleDocumentation" */ '../pages/Documentation/ModuleDocumentation'),
  meta: {
    hide: true
  },
  children: [
    {
      text: 'API Documentation',
      name: 'PageDocumentation',
      path: '',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageDocumentation" */ '../pages/Documentation/PageDocumentation')
    }
  ]
}
