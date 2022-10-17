/**
 * icons.js - Icons 示例路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
export default {
  text: 'Icons',
  name: 'ModuleIcons',
  path: 'icons',
  icon: 'aside-modeling',
  component: () =>
    import(/* webpackChunkName: "ModuleIcons" */ '../pages/Icons/ModuleIcons'),
  meta: {
    hide: false
  },
  redirect: 'icons/default',
  children: [
    {
      text: 'Default',
      name: 'PageDefaultIcons',
      path: 'default',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageDefaultIcons" */ '../pages/Icons/PageDefaultIcons')
    },
    {
      text: 'Brankic 1979',
      name: 'PageBrankicIcons',
      path: 'brankic-1979',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageBrankicIcons" */ '../pages/Icons/PageBrankicIcons')
    },
    {
      text: 'Broccolidry',
      name: 'PagePageBroccolidryIconsIcons',
      path: 'broccolidry',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageBroccolidryIcons" */ '../pages/Icons/PageBroccolidryIcons')
    }
  ]
}
