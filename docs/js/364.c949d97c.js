'use strict'
;(self['webpackChunk_yaohaixiao_svg_icon_vue'] =
  self['webpackChunk_yaohaixiao_svg_icon_vue'] || []).push([
  [364],
  {
    90: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c
        }
      })
      var a = function () {
          var e = this,
            t = e._self._c
          return t('div', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        r = {
          name: 'BaseContainer',
          componentName: 'BaseContainer',
          props: {
            direction: { type: String, default: 'column' },
            isAutoHeight: { type: Boolean, default: !1 }
          },
          computed: {
            className() {
              return [
                'base-container',
                `util-direction-${this.direction}`,
                { 'util-overflow-auto': this.isAutoHeight }
              ]
            }
          }
        },
        i = r,
        l = n(1001),
        s = (0, l.Z)(i, a, o, !1, null, null, null),
        u = s.exports
      u.install = function (e) {
        e.component(u.name, u)
      }
      var c = u
    },
    7534: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c
        }
      })
      var a = function () {
          var e = this,
            t = e._self._c
          return t('header', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        r = {
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
            className() {
              return [
                'base-header',
                {
                  'base-header--flex': this.flex,
                  'util-border-bottom': this.border
                },
                `util-height-${this.height}`,
                `util-padding-${this.padding}`,
                `util-align-${this.align}`
              ]
            }
          }
        },
        i = r,
        l = n(1001),
        s = (0, l.Z)(i, a, o, !1, null, null, null),
        u = s.exports
      u.install = function (e) {
        e.component(u.name, u)
      }
      var c = u
    },
    4277: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d
        }
      })
      var a = function () {
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
        r = n(5505),
        i = {
          name: 'BaseLink',
          componentName: 'BaseLink',
          components: { SvgIcon: r.Z },
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
            className() {
              const e = this.disabled
                ? `util-anchor-${this.type}--disabled`
                : ''
              return [
                'base-link',
                `util-anchor-${this.type}`,
                { 'util-anchor-underline': this.underline, clsDisabled: e }
              ]
            }
          }
        },
        l = i,
        s = n(1001),
        u = (0, s.Z)(l, a, o, !1, null, null, null),
        c = u.exports
      c.install = function (e) {
        e.component(c.name, c)
      }
      var d = c
    },
    6635: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c
        }
      })
      var a = function () {
          var e = this,
            t = e._self._c
          return e.useMainTag
            ? t('main', { class: e.className }, [e._t('default')], 2)
            : t('div', { class: e.className }, [e._t('default')], 2)
        },
        o = [],
        r = {
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
            className() {
              const e = this.flex,
                t = e ? `util-direction-${this.direction}` : ''
              return [
                'base-main',
                `util-padding-${this.padding}`,
                `util-overflow-${this.overflow}`,
                { 'base-main--flex': e },
                t
              ]
            }
          }
        },
        i = r,
        l = n(1001),
        s = (0, l.Z)(i, a, o, !1, null, null, null),
        u = s.exports
      u.install = function (e) {
        e.component(u.name, u)
      }
      var c = u
    },
    5098: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p
        }
      })
      var a = function () {
          var e = this,
            t = e._self._c
          return t(
            'span',
            { ref: 'root', staticClass: 'breadcrumb-nav-item' },
            [
              e.to
                ? t(
                    'base-link',
                    {
                      attrs: {
                        route: '',
                        icon: e.icon,
                        href: e.to,
                        target: '_self',
                        role: 'link'
                      }
                    },
                    [e._t('default')],
                    2
                  )
                : [
                    e.icon
                      ? t('svg-icon', {
                          staticClass: 'breadcrumb-nav-item__icon',
                          attrs: { name: e.icon, size: 16 }
                        })
                      : e._e(),
                    t(
                      'span',
                      { staticClass: 'breadcrumb-nav-item__text' },
                      [e._t('default')],
                      2
                    )
                  ],
              e.current
                ? e._e()
                : t(
                    'span',
                    {
                      staticClass: 'breadcrumb-nav-item__separator',
                      attrs: { role: 'presentation' }
                    },
                    [
                      e.separatorIcon
                        ? t('svg-icon', {
                            attrs: { name: e.separatorIcon, size: 16 }
                          })
                        : [e._v(' ' + e._s(e.separator) + ' ')]
                    ],
                    2
                  )
            ],
            2
          )
        },
        o = [],
        r = n(4277),
        i = n(5505),
        l = {
          name: 'BreadcrumbNavItem',
          componentName: 'BreadcrumbNavItem',
          components: { BaseLink: r.Z, SvgIcon: i.Z },
          props: {
            icon: { type: String, default: '' },
            current: { type: Boolean, default: !1 },
            to: { type: [String, Object], default: '' }
          },
          data() {
            return { separator: '', separatorIcon: '' }
          },
          inject: ['BreadcrumbNav'],
          mounted() {
            const e = this.BreadcrumbNav
            ;(this.separator = e.separator),
              (this.separatorIcon = e.separatorIcon),
              this.current && this.$el.setAttribute('aria-current', '')
          }
        },
        s = l,
        u = n(1001),
        c = (0, u.Z)(s, a, o, !1, null, null, null),
        d = c.exports
      d.install = function (e) {
        e.component(d.name, d)
      }
      var p = d
    },
    9852: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c
        }
      })
      var a = function () {
          var e = this,
            t = e._self._c
          return t(
            'div',
            {
              staticClass: 'breadcrumb-nav',
              attrs: { 'aria-label': 'breadcrumb', role: 'navigation' }
            },
            [e._t('default')],
            2
          )
        },
        o = [],
        r = {
          name: 'BreadcrumbNav',
          componentName: 'BreadcrumbNav',
          props: {
            separator: { type: String, default: '/' },
            separatorIcon: { type: String, default: '' }
          },
          provide() {
            return { BreadcrumbNav: this }
          }
        },
        i = r,
        l = n(1001),
        s = (0, l.Z)(i, a, o, !1, null, null, null),
        u = s.exports
      u.install = function (e) {
        e.component(u.name, u)
      }
      var c = u
    },
    8249: function (e, t, n) {
      n.d(t, {
        p1: function () {
          return o
        },
        vQ: function () {
          return a
        }
      })
      const a = (e) => {
          const t = document.createElement('textarea')
          ;(t.value = e),
            t.setAttribute('readonly', ''),
            (t.style.position = 'absolute'),
            (t.style.left = '-9999px'),
            document.body.appendChild(t)
          const n =
            document.getSelection().rangeCount > 0 &&
            document.getSelection().getRangeAt(0)
          t.select(),
            document.execCommand('copy'),
            document.body.removeChild(t),
            n &&
              (document.getSelection().removeAllRanges(),
              document.getSelection().addRange(n))
        },
        o = (e) => {
          const t = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
          }
          return e
            .replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (e) => t[e] || e)
            .replace(/\{\s+\{/g, '{{')
        }
    }
  }
])
