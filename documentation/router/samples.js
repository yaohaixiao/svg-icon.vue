/**
 * samples.js - ICON 示例路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
export default {
  text: 'Icon Samples',
  path: 'samples',
  icon: 'aside-modeling',
  component: () =>
    import(/* webpackChunkName: "ModuleSamples" */ '../pages/Samples/ModuleSamples'),
  children: [
    {
      text: 'Samples',
      name: 'PageSamples',
      path: '',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageSamples" */ '../pages/Samples/PageSamples')
    }
  ]
}
