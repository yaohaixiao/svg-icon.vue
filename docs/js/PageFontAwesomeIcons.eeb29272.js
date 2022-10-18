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
      var s = function () {
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
                          key: `cell-${n}`,
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
        a = [],
        o = n(90),
        r = n(7534),
        i = n(6635),
        c = n(9852),
        l = n(5098),
        u = n(5868),
        m = n(1072),
        d = n(8638),
        p = n(7970)
      ;(0, d.s)(p.Z)
      var v = {
          name: 'PageFontAwesomeIcons',
          componentName: 'PageFontAwesomeIcons',
          components: {
            BaseContainer: o.Z,
            BaseHeader: r.Z,
            BaseMain: i.Z,
            BreadcrumbNav: c.Z,
            BreadcrumbNavItem: l.Z,
            BaseGrid: u.Z,
            IconCell: m.Z
          },
          data() {
            return { fontAwesomeSet: p.Z }
          }
        },
        _ = v,
        h = n(1001),
        f = (0, h.Z)(_, s, a, !1, null, '3cf7de00', null),
        g = f.exports
    },
    5868: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u
        }
      })
      var s = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            { staticClass: 'base-grid', style: e.cssRules },
            [e._t('default')],
            2
          )
        },
        a = [],
        o = {
          name: 'BaseGrid',
          componentName: 'BaseGrid',
          props: {
            padding: { type: String, default: 'none' },
            columns: { type: Number, default: 4 },
            gap: { type: Number, default: 20 },
            overflow: { type: String, default: 'hidden' }
          },
          computed: {
            cssRules() {
              const e = this.columns,
                t = this.gap
              return (
                'grid-template-columns:repeat(' + e + ', 1fr);gap:' + t + 'px'
              )
            }
          }
        },
        r = o,
        i = n(1001),
        c = (0, i.Z)(r, s, a, !1, null, null, null),
        l = c.exports
      l.install = function (e) {
        e.component(l.name, l)
      }
      var u = l
    },
    1072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d
        }
      })
      var s = function () {
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
        a = [],
        o = n(5505),
        r = n(8249),
        i = {
          name: 'IconCell',
          componentName: 'IconCell',
          components: { SvgIcon: o.Z },
          props: { symbol: { type: String, default: '' } },
          data() {
            return { name: '' }
          },
          watch: {
            symbol() {
              this.update()
            }
          },
          mounted() {
            this.update()
          },
          methods: {
            update() {
              const e = this.symbol.match(/icon-(\w+(-\w+)*)+/)
              this.name = e[1]
            },
            onCopy() {
              ;(0, r.vQ)(this.name),
                this.$message.success({
                  round: !0,
                  message: `图标名称“${this.name}”已复制到粘贴板中`
                })
            }
          }
        },
        c = i,
        l = n(1001),
        u = (0, l.Z)(c, s, a, !1, null, null, null),
        m = u.exports
      m.install = function (e) {
        e.component(m.name, m)
      }
      var d = m
    }
  }
])
