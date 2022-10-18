'use strict'
;(self['webpackChunk_yaohaixiao_svg_icon_vue'] =
  self['webpackChunk_yaohaixiao_svg_icon_vue'] || []).push([
  [287],
  {
    5752: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return le
          }
        })
      var n = function () {
          var e = this,
            t = e._self._c
          return t(
            'base-container',
            [
              t('app-header'),
              t(
                'base-main',
                { attrs: { 'use-main-tag': '', flex: '', overflow: 'hidden' } },
                [
                  t('app-aside'),
                  t(
                    'base-main',
                    { attrs: { overflow: 'hidden' } },
                    [t('router-view')],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        },
        o = [],
        i = a(90),
        s = a(6635),
        l = function () {
          var e = this,
            t = e._self._c
          return t(
            'base-header',
            { attrs: { flex: '', padding: 'inner', height: 'outer' } },
            [t('app-logo'), t('app-nav')],
            1
          )
        },
        r = [],
        c = a(7534),
        u = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'app-logo', on: { click: e.toHome } },
            [
              t(
                'span',
                { staticClass: 'app-logo__icon' },
                [t('svg-icon', { attrs: { name: 'card-deploy', size: 22 } })],
                1
              ),
              e._m(0)
            ]
          )
        },
        p = [
          function () {
            var e = this,
              t = e._self._c
            return t('h1', { staticClass: 'app-logo__title' }, [
              t('em', { staticClass: 'app-logo__key' }, [e._v('svg-icon')]),
              e._v('.vue')
            ])
          }
        ],
        d = (a(8309), a(7658), a(9467)),
        f = {
          name: 'AppLogo',
          componentName: 'AppLogo',
          components: { SvgIcon: d.Z },
          computed: {
            isHome: function () {
              return 'PageDocumentation' === this.$route.name
            }
          },
          methods: {
            toHome: function () {
              if (this.isHome) return !1
              this.$router.push({ path: '/docs' })
            }
          }
        },
        m = f,
        h = a(1001),
        g = (0, h.Z)(m, u, p, !1, null, '00f9ded0', null),
        _ = g.exports,
        v = function () {
          var e = this,
            t = e._self._c
          return t(
            'ul',
            { staticClass: 'app-nav' },
            e._l(e.navs, function (e, a) {
              return t(
                'li',
                { key: 'nav-'.concat(a), staticClass: 'app-nav__item' },
                [
                  t('base-link', {
                    staticClass: 'app-nav__link',
                    attrs: {
                      route: e.route,
                      role: e.role,
                      href: e.href,
                      icon: e.icon,
                      'icon-size': e.iconSize,
                      target: e.target,
                      download: e.download
                    }
                  })
                ],
                1
              )
            }),
            0
          )
        },
        b = [],
        y = a(4277),
        x = {
          name: 'AppNav',
          componentName: 'AppNav',
          components: { BaseLink: y.Z },
          data: function () {
            return {
              navs: [
                {
                  route: !1,
                  role: 'link',
                  href: 'https://github.com/yaohaixiao/svg-icon.vue',
                  icon: 'card-branch',
                  iconSize: 16
                },
                {
                  route: !1,
                  role: 'link',
                  href: 'https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip',
                  icon: 'card-download',
                  iconSize: 20,
                  download: 'svg-icon.vue-main.zip',
                  target: '_blank'
                },
                {
                  route: !1,
                  role: 'link',
                  href: 'https://github.com/yaohaixiao/svg-icon.vue/issues',
                  icon: 'card-help',
                  iconSize: 20
                }
              ]
            }
          }
        },
        k = x,
        B = (0, h.Z)(k, v, b, !1, null, '708558d3', null),
        N = B.exports,
        S = {
          name: 'AppHeader',
          componentName: 'AppHeader',
          components: { BaseHeader: c.Z, AppLogo: _, AppNav: N }
        },
        Z = S,
        C = (0, h.Z)(Z, l, r, !1, null, '92d43496', null),
        A = C.exports,
        w = function () {
          var e = this,
            t = e._self._c
          return t(
            'base-aside',
            {
              attrs: {
                background: '',
                flex: '',
                padding: 'none',
                collapsed: e.collapsed
              }
            },
            [
              t('base-main', { staticClass: 'aside-main' }, [t('app-menu')], 1),
              t(
                'base-footer',
                { attrs: { border: '', aling: 'right', height: 'inner' } },
                [
                  t(
                    'div',
                    {
                      staticClass: 'aside-collapse',
                      on: { click: e.onToggle }
                    },
                    [
                      t('svg-icon', {
                        attrs: { name: 'aside-collapse', size: 20 }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        },
        z = [],
        H = function () {
          var e = this,
            t = e._self._c
          return t('footer', { class: e.className }, [e._t('default')], 2)
        },
        M = [],
        L = {
          name: 'BaseFooter',
          componentName: 'BaseFooter',
          props: {
            flex: { type: Boolean, default: !1 },
            border: { type: Boolean, default: !0 },
            padding: { type: String, default: 'outer' },
            height: { type: String, default: 'auto' },
            align: { type: String, default: 'left' }
          },
          computed: {
            className: function () {
              var e = this.align,
                t = this.flex,
                a = this.height,
                n = this.padding,
                o = this.border
              return [
                'base-footer',
                { 'base-footer--flex': t, 'util-border-top': o },
                'util-height-'.concat(a),
                'util-padding-'.concat(n),
                'util-align-'.concat(e)
              ]
            }
          }
        },
        I = L,
        T = (0, h.Z)(I, H, M, !1, null, null, null),
        F = T.exports
      F.install = function (e) {
        e.component(F.name, F)
      }
      var D = F,
        $ = function () {
          var e = this,
            t = e._self._c
          return t('aside', { class: e.className }, [e._t('default')], 2)
        },
        P = [],
        j = {
          name: 'BaseAside',
          componentName: 'BaseAside',
          props: {
            width: { type: String, default: 'regular' },
            padding: { type: String, default: 'inner' },
            border: { type: String, default: 'right' },
            flex: { type: Boolean, default: !1 },
            background: { type: Boolean, default: !1 },
            collapsed: { type: Boolean, default: !1 }
          },
          computed: {
            className: function () {
              return [
                'base-aside',
                'base-aside_'.concat(this.width),
                'util-border-'.concat(this.border),
                'util-padding-'.concat(this.padding),
                {
                  'base-aside--flex': this.flex,
                  'base-aside--background': this.background,
                  'base-aside--collapsed': this.collapsed
                }
              ]
            }
          }
        },
        q = j,
        E = (0, h.Z)(q, $, P, !1, null, null, null),
        G = E.exports
      G.install = function (e) {
        e.component(G.name, G)
      }
      var J = G,
        K = function () {
          var e = this,
            t = e._self._c
          return t('nav', { staticClass: 'app-menu' }, [
            t(
              'ul',
              { staticClass: 'app-menu__list' },
              e._l(e.routes, function (a, n) {
                return t(
                  'li',
                  { key: 'menu-'.concat(n), staticClass: 'app-menu__item' },
                  [
                    t(
                      'router-link',
                      {
                        staticClass: 'app-menu__link',
                        attrs: { to: '/'.concat(a.path) }
                      },
                      [
                        t('svg-icon', { attrs: { name: a.icon, size: 16 } }),
                        t('span', { staticClass: 'app-menu__text' }, [
                          e._v(e._s(a.text))
                        ])
                      ],
                      1
                    ),
                    a.children && !a.meta.hide
                      ? t(
                          'ul',
                          { staticClass: 'app-submenu__list' },
                          e._l(a.children, function (a, n) {
                            return t(
                              'li',
                              {
                                key: 'child-'.concat(n),
                                staticClass: 'app-submenu__item'
                              },
                              [
                                t(
                                  'router-link',
                                  {
                                    staticClass: 'app-menu__link',
                                    attrs: { to: { name: a.name } }
                                  },
                                  [
                                    t(
                                      'span',
                                      { staticClass: 'app-submenu__text' },
                                      [e._v(e._s(a.text))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      : e._e()
                  ],
                  1
                )
              }),
              0
            )
          ])
        },
        O = [],
        Q = a(254),
        R = a(7712),
        U = a(6366),
        V = {
          name: 'AppMenu',
          componentName: 'AppMenu',
          components: { SvgIcon: d.Z },
          data: function () {
            return { routes: [Q.Z, R.Z, U.Z] }
          }
        },
        W = V,
        X = (0, h.Z)(W, K, O, !1, null, '7775a5de', null),
        Y = X.exports,
        ee = {
          name: 'AppAside',
          componentName: 'AppAside',
          components: {
            BaseAside: J,
            BaseMain: s.Z,
            BaseFooter: D,
            AppMenu: Y,
            SvgIcon: d.Z
          },
          data: function () {
            return { collapsed: !1 }
          },
          methods: {
            onToggle: function () {
              this.collapsed = !this.collapsed
            }
          }
        },
        te = ee,
        ae = (0, h.Z)(te, w, z, !1, null, '5a43bb51', null),
        ne = ae.exports,
        oe = {
          name: 'AppLayout',
          componentName: 'AppLayout',
          components: {
            BaseContainer: i.Z,
            BaseMain: s.Z,
            AppHeader: A,
            AppAside: ne
          }
        },
        ie = oe,
        se = (0, h.Z)(ie, n, o, !1, null, 'eaf74a1c', null),
        le = se.exports
    },
    90: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u
        }
      })
      a(8309)
      var n = function () {
          var e = this,
            t = e._self._c
          return t('div', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        i = {
          name: 'BaseContainer',
          componentName: 'BaseContainer',
          props: {
            direction: { type: String, default: 'column' },
            isAutoHeight: { type: Boolean, default: !1 }
          },
          computed: {
            className: function () {
              return [
                'base-container',
                'util-direction-'.concat(this.direction),
                { 'util-overflow-auto': this.isAutoHeight }
              ]
            }
          }
        },
        s = i,
        l = a(1001),
        r = (0, l.Z)(s, n, o, !1, null, null, null),
        c = r.exports
      c.install = function (e) {
        e.component(c.name, c)
      }
      var u = c
    },
    7534: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u
        }
      })
      a(8309)
      var n = function () {
          var e = this,
            t = e._self._c
          return t('header', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        i = {
          name: 'BaseHeader',
          componentName: 'BaseHeader',
          props: {
            flex: { type: Boolean, default: !1 },
            border: { type: Boolean, default: !0 },
            padding: { type: String, default: 'outer' },
            height: { type: String, default: 'auto' },
            align: { type: String, default: 'left' }
          },
          computed: {
            className: function () {
              return [
                'base-header',
                {
                  'base-header--flex': this.flex,
                  'util-border-bottom': this.border
                },
                'util-height-'.concat(this.height),
                'util-padding-'.concat(this.padding),
                'util-align-'.concat(this.align)
              ]
            }
          }
        },
        s = i,
        l = a(1001),
        r = (0, l.Z)(s, n, o, !1, null, null, null),
        c = r.exports
      c.install = function (e) {
        e.component(c.name, c)
      }
      var u = c
    },
    4277: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return p
        }
      })
      a(8309)
      var n = function () {
          var e = this,
            t = e._self._c
          return e.route
            ? t(
                'router-link',
                {
                  class: e.className,
                  attrs: { to: e.disabled ? null : e.href, target: e.target }
                },
                [
                  e.icon
                    ? t('svg-icon', {
                        staticClass: 'base-link__icon',
                        attrs: { name: e.icon, size: e.iconSize }
                      })
                    : e._e(),
                  t(
                    'span',
                    { staticClass: 'base-link__inner' },
                    [e._t('default')],
                    2
                  )
                ],
                1
              )
            : t(
                'a',
                {
                  class: e.className,
                  attrs: {
                    href: e.disabled ? null : e.href,
                    target: e.target,
                    download: e.download
                  }
                },
                [
                  e.icon
                    ? t('svg-icon', {
                        staticClass: 'base-link__icon',
                        attrs: { name: e.icon, size: e.iconSize }
                      })
                    : e._e(),
                  t(
                    'span',
                    { staticClass: 'base-link__inner' },
                    [e._t('default')],
                    2
                  )
                ],
                1
              )
        },
        o = [],
        i = (a(9653), a(9467)),
        s = {
          name: 'BaseLink',
          componentName: 'BaseLink',
          components: { SvgIcon: i.Z },
          props: {
            type: { type: String, default: 'default' },
            href: { type: String, default: '' },
            target: { type: String, default: '_self' },
            route: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            download: { type: [Boolean, String], default: null },
            underline: { type: Boolean, default: !1 },
            icon: { type: String, default: '' },
            iconSize: { type: Number, default: 16 }
          },
          computed: {
            className: function () {
              var e = this.disabled
                ? 'util-anchor-'.concat(this.type, '--disabled')
                : ''
              return [
                'base-link',
                'util-anchor-'.concat(this.type),
                { 'util-anchor-underline': this.underline, clsDisabled: e }
              ]
            }
          }
        },
        l = s,
        r = a(1001),
        c = (0, r.Z)(l, n, o, !1, null, null, null),
        u = c.exports
      u.install = function (e) {
        e.component(u.name, u)
      }
      var p = u
    },
    6635: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u
        }
      })
      a(8309)
      var n = function () {
          var e = this,
            t = e._self._c
          return e.useMainTag
            ? t('main', { class: e.className }, [e._t('default')], 2)
            : t('div', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        i = {
          name: 'BaseMain',
          componentName: 'BaseMain',
          props: {
            flex: { type: Boolean, default: !1 },
            useMainTag: { type: Boolean, default: !1 },
            padding: { type: String, default: 'none' },
            overflow: { type: String, default: 'auto' },
            direction: { type: String, default: 'row' }
          },
          computed: {
            className: function () {
              var e = this.flex,
                t = e ? 'util-direction-'.concat(this.direction) : ''
              return [
                'base-main',
                'util-padding-'.concat(this.padding),
                'util-overflow-'.concat(this.overflow),
                { 'base-main--flex': e },
                t
              ]
            }
          }
        },
        s = i,
        l = a(1001),
        r = (0, l.Z)(s, n, o, !1, null, null, null),
        c = r.exports
      c.install = function (e) {
        e.component(c.name, c)
      }
      var u = c
    }
  }
])
