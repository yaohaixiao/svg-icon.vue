/**
 * documentation.js - API 文档路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import ModuleDocumentation from '$pages/Documentation/ModuleDocumentation'
import PageDocumentation from '$pages/Documentation/PageDocumentation'

export default {
  text: 'API Documentation',
  path: 'docs',
  icon: 'bold-document',
  component: ModuleDocumentation,
  // component: () =>
  //   import(
  //     /* webpackChunkName: "ModuleDocumentation" */ '../pages/Documentation/ModuleDocumentation'
  //   ),
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
      component: PageDocumentation
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageDocumentation" */ '../pages/Documentation/PageDocumentation'
      //   )
    }
  ]
}
