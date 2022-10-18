'use strict'
;(self['webpackChunk_yaohaixiao_svg_icon_vue'] =
  self['webpackChunk_yaohaixiao_svg_icon_vue'] || []).push([
  [63],
  {
    2052: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return g
          }
        })
      var a = function () {
          var e = this,
            t = e._self._c
          return t(
            'base-container',
            [
              t(
                'base-header',
                { attrs: { flex: '', border: '', height: 'inner' } },
                [
                  t(
                    'breadcrumb-nav',
                    [
                      t(
                        'breadcrumb-nav-item',
                        { attrs: { to: '/', icon: 'circle-arrow-left' } },
                        [e._v('Home')]
                      ),
                      t('breadcrumb-nav-item', { attrs: { to: '/icons' } }, [
                        e._v('Icons')
                      ]),
                      t('breadcrumb-nav-item', { attrs: { current: '' } }, [
                        e._v('Font Awesome')
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              t('base-main', { attrs: { padding: 'outer' } }, [
                t(
                  'article',
                  { staticClass: 'article' },
                  [
                    t('h1', { staticClass: 'article__h1' }, [
                      e._v('Font Awesome')
                    ]),
                    t('h2', { staticClass: 'article__h2' }, [
                      e._v(e._s(e.fontAwesomeSet.title))
                    ]),
                    t(
                      'base-grid',
                      {
                        staticClass: 'icons-grid',
                        attrs: { columns: 6, gap: 10 }
                      },
                      e._l(e.fontAwesomeSet.symbols, function (e, n) {
                        return t('icon-cell', {
                          key: 'cell-'.concat(n),
                          attrs: { symbol: e }
                        })
                      }),
                      1
                    ),
                    t('h2', { staticClass: 'article__h2' }, [
                      e._v('Copyright')
                    ]),
                    t('ul', [
                      t('li', [e._v('Designer：Dave Gandy')]),
                      t('li', [
                        e._v('Homepage: '),
                        t(
                          'a',
                          { attrs: { href: 'https://feathericons.com/' } },
                          [e._v('https://github.com/FortAwesome/Font-Awesome')]
                        )
                      ]),
                      t('li', [e._v('License：Custom (free to use)')])
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          )
        },
        s = [],
        o = n(90),
        c = n(7534),
        i = n(6635),
        r = n(9852),
        l = n(5098),
        u = n(5868),
        m = n(2429),
        d = n(8638),
        f = n(7970)
      ;(0, d.s)(f.Z)
      var p = {
          name: 'PageFontAwesomeIcons',
          componentName: 'PageFontAwesomeIcons',
          components: {
            BaseContainer: o.Z,
            BaseHeader: c.Z,
            BaseMain: i.Z,
            BreadcrumbNav: r.Z,
            BreadcrumbNavItem: l.Z,
            BaseGrid: u.Z,
            IconCell: m.Z
          },
          data: function () {
            return { fontAwesomeSet: f.Z }
          }
        },
        v = p,
        _ = n(1001),
        h = (0, _.Z)(v, a, s, !1, null, '3cf7de00', null),
        g = h.exports
    },
    5868: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u
        }
      })
      n(8309)
      var a = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'base-grid', style: e.cssRules },
            [e._t('default')],
            2
          )
        },
        s = [],
        o =
          (n(9653),
          {
            name: 'BaseGrid',
            componentName: 'BaseGrid',
            props: {
              padding: { type: String, default: 'none' },
              columns: { type: Number, default: 4 },
              gap: { type: Number, default: 20 },
              overflow: { type: String, default: 'hidden' }
            },
            computed: {
              cssRules: function () {
                var e = this.columns,
                  t = this.gap
                return (
                  'grid-template-columns:repeat(' + e + ', 1fr);gap:' + t + 'px'
                )
              }
            }
          }),
        c = o,
        i = n(1001),
        r = (0, i.Z)(c, a, s, !1, null, null, null),
        l = r.exports
      l.install = function (e) {
        e.component(l.name, l)
      }
      var u = l
    },
    2429: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d
        }
      })
      n(8309)
      var a = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'icon-cell', on: { click: e.onCopy } },
            [
              t(
                'div',
                { staticClass: 'icon-cell__svg' },
                [t('svg-icon', { attrs: { name: e.name, size: 32 } })],
                1
              ),
              t('p', { staticClass: 'icon-cell__name' }, [
                e._v(' ' + e._s(e.name) + ' ')
              ])
            ]
          )
        },
        s = [],
        o = (n(4916), n(4723), n(9467)),
        c = n(8249),
        i = {
          name: 'IconCell',
          componentName: 'IconCell',
          components: { SvgIcon: o.Z },
          props: { symbol: { type: String, default: '' } },
          data: function () {
            return { name: '' }
          },
          watch: {
            symbol: function () {
              this.update()
            }
          },
          mounted: function () {
            this.update()
          },
          methods: {
            update: function () {
              var e = this.symbol.match(/icon-(\w+(-\w+)*)+/)
              this.name = e[1]
            },
            onCopy: function () {
              ;(0, c.vQ)(this.name),
                this.$message.success({
                  round: !0,
                  message: '图标名称“'.concat(this.name, '”已复制到粘贴板中')
                })
            }
          }
        },
        r = i,
        l = n(1001),
        u = (0, l.Z)(r, a, s, !1, null, null, null),
        m = u.exports
      m.install = function (e) {
        e.component(m.name, m)
      }
      var d = m
    }
  }
])
