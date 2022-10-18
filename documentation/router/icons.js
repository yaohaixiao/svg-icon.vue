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
    },
    {
      text: 'Eighty Shades',
      name: 'PageEightyShadesIcons',
      path: 'eighty-shades',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageEightyShadesIcons" */ '../pages/Icons/PageEightyShadesIcons')
    },
    {
      text: 'Entypo+',
      name: 'PageEntypoPlusIcons',
      path: 'entypo-plus',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageEntypoPlusIcons" */ '../pages/Icons/PageEntypoPlusIcons')
    },
    {
      text: 'Feather',
      name: 'PageFeatherIcons',
      path: 'feather',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageFeatherIcons" */ '../pages/Icons/PageFeatherIcons')
    },
    {
      text: 'Font Awesome',
      name: 'PageFontAwesomeIcons',
      path: 'font-awesome',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageFontAwesomeIcons" */ '../pages/Icons/PageFontAwesomeIcons')
    },
    {
      text: 'Hawcons',
      name: 'PageHawconsIcons',
      path: 'hawcons',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageHawconsIcons" */ '../pages/Icons/PageHawconsIcons')
    },
    {
      text: 'Iconic',
      name: 'PageIconicIcons',
      path: 'iconic',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageIconicIcons" */ '../pages/Icons/PageIconicIcons')
    },
    {
      text: 'Linecons',
      name: 'PageLineconsIcons',
      path: 'linecons',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageLineconsIcons" */ '../pages/Icons/PageLineconsIcons')
    },
    {
      text: 'Material',
      name: 'PageMaterialIcons',
      path: 'material',
      meta: {
        hide: false
      },
      component: () =>
        import(/* webpackChunkName: "PageMaterialIcons" */ '../pages/Icons/PageMaterialIcons')
    }
  ]
}
