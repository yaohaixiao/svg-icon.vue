/**
 * index.js - Icons 示例路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
import ModuleIcons from '$pages/Icons/ModuleIcons'
import PageDefaultIcons from '$pages/Icons/PageDefaultIcons'
import PageBrankicIcons from '$pages/Icons/PageBrankicIcons'
import PageBroccolidryIcons from '$pages/Icons/PageBroccolidryIcons'
import PageEightyShadesIcons from '$pages/Icons/PageEightyShadesIcons'
import PageEntypoPlusIcons from '$pages/Icons/PageEntypoPlusIcons'
import PageEverIcons from '$pages/Icons/PageEverIcons'
import PageFeatherIcons from '$pages/Icons/PageFeatherIcons'
import PageFontAwesomeIcons from '$pages/Icons/PageFontAwesomeIcons'
import PageHawconsIcons from '$pages/Icons/PageHawconsIcons'
import PageIconicIcons from '$pages/Icons/PageIconicIcons'
import PageLineconsIcons from '$pages/Icons/PageLineconsIcons'
import PageMaterialIcons from '$pages/Icons/PageMaterialIcons'
import PageMeteoconsIcons from '$pages/Icons/PageMeteoconsIcons'
import PageSteadysetsIcons from '$pages/Icons/PageSteadysetsIcons'
import PageTypiconsIcons from '$pages/Icons/PageTypiconsIcons'
import PageViconsIcons from '$pages/Icons/PageViconsIcons'
import PageWpzoomIcons from '$pages/Icons/PageWpzoomIcons'
import PageZondiconsIcons from '$pages/Icons/PageZondiconsIcons'

export default {
  text: 'Icons',
  name: 'ModuleIcons',
  path: 'icons',
  icon: 'bold-app-store',
  component: ModuleIcons,
  // component: () =>
  //   import(/* webpackChunkName: "ModuleIcons" */ '../pages/Icons/ModuleIcons'),
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
      component: PageDefaultIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageDefaultIcons" */ '../pages/Icons/PageDefaultIcons'
      //   )
    },
    {
      text: 'Brankic 1979',
      name: 'PageBrankicIcons',
      path: 'brankic-1979',
      meta: {
        hide: false
      },
      component: PageBrankicIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageBrankicIcons" */ '../pages/Icons/PageBrankicIcons'
      //   )
    },
    {
      text: 'Broccolidry',
      name: 'PagePageBroccolidryIconsIcons',
      path: 'broccolidry',
      meta: {
        hide: false
      },
      component: PageBroccolidryIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageBroccolidryIcons" */ '../pages/Icons/PageBroccolidryIcons'
      //   )
    },
    {
      text: 'Eighty Shades',
      name: 'PageEightyShadesIcons',
      path: 'eighty-shades',
      meta: {
        hide: false
      },
      component: PageEightyShadesIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageEightyShadesIcons" */ '../pages/Icons/PageEightyShadesIcons'
      //   )
    },
    {
      text: 'Entypo+',
      name: 'PageEntypoPlusIcons',
      path: 'entypo-plus',
      meta: {
        hide: false
      },
      component: PageEntypoPlusIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageEntypoPlusIcons" */ '../pages/Icons/PageEntypoPlusIcons'
      //   )
    },
    {
      text: 'EverIcons',
      name: 'PageEverIcons',
      path: 'ever-icons',
      meta: {
        hide: false
      },
      component: PageEverIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageEverIcons" */ '../pages/Icons/PageEverIcons'
      //   )
    },
    {
      text: 'Feather',
      name: 'PageFeatherIcons',
      path: 'feather',
      meta: {
        hide: false
      },
      component: PageFeatherIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageFeatherIcons" */ '../pages/Icons/PageFeatherIcons'
      //   )
    },
    {
      text: 'Font Awesome',
      name: 'PageFontAwesomeIcons',
      path: 'font-awesome',
      meta: {
        hide: false
      },
      component: PageFontAwesomeIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageFontAwesomeIcons" */ '../pages/Icons/PageFontAwesomeIcons'
      //   )
    },
    {
      text: 'Hawcons',
      name: 'PageHawconsIcons',
      path: 'hawcons',
      meta: {
        hide: false
      },
      component: PageHawconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageHawconsIcons" */ '../pages/Icons/PageHawconsIcons'
      //   )
    },
    {
      text: 'Iconic',
      name: 'PageIconicIcons',
      path: 'iconic',
      meta: {
        hide: false
      },
      component: PageIconicIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageIconicIcons" */ '../pages/Icons/PageIconicIcons'
      //   )
    },
    {
      text: 'Linecons',
      name: 'PageLineconsIcons',
      path: 'linecons',
      meta: {
        hide: false
      },
      component: PageLineconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageLineconsIcons" */ '../pages/Icons/PageLineconsIcons'
      //   )
    },
    {
      text: 'Material',
      name: 'PageMaterialIcons',
      path: 'material',
      meta: {
        hide: false
      },
      component: PageMaterialIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageMaterialIcons" */ '../pages/Icons/PageMaterialIcons'
      //   )
    },
    {
      text: 'Meteocons',
      name: 'PageMeteoconsIcons',
      path: 'meteocons',
      meta: {
        hide: false
      },
      component: PageMeteoconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageMeteoconsIcons" */ '../pages/Icons/PageMeteoconsIcons'
      //   )
    },
    {
      text: 'Steadysets',
      name: 'PageSteadysetsIcons',
      path: 'steadysets',
      meta: {
        hide: false
      },
      component: PageSteadysetsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageSteadysetsIcons" */ '../pages/Icons/PageSteadysetsIcons'
      //   )
    },
    {
      text: 'Typicons',
      name: 'PageTypiconsIcons',
      path: 'typicons',
      meta: {
        hide: false
      },
      component: PageTypiconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageTypiconsIcons" */ '../pages/Icons/PageTypiconsIcons'
      //   )
    },
    {
      text: 'Vicons',
      name: 'PageViconsIcons',
      path: 'Vicons',
      meta: {
        hide: false
      },
      component: PageViconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageViconsIcons" */ '../pages/Icons/PageViconsIcons'
      //   )
    },
    {
      text: 'Wpzoom',
      name: 'PageWpzoomIcons',
      path: 'wpzoom',
      meta: {
        hide: false
      },
      component: PageWpzoomIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageWpzoomIcons" */ '../pages/Icons/PageWpzoomIcons'
      //   )
    },
    {
      text: 'Zondicons',
      name: 'PageZondiconsIcons',
      path: 'zondicons',
      meta: {
        hide: false
      },
      component: PageZondiconsIcons
      // component: () =>
      //   import(
      //     /* webpackChunkName: "PageZondiconsIcons" */ '../pages/Icons/PageZondiconsIcons'
      //   )
    }
  ]
}
