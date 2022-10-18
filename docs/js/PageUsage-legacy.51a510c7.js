'use strict'
;(self['webpackChunk_yaohaixiao_svg_icon_vue'] =
  self['webpackChunk_yaohaixiao_svg_icon_vue'] || []).push([
  [353],
  {
    7746: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return ge
          }
        })
      var a = function () {
          var e = this,
            n = e._self._c
          return n(
            'base-container',
            [
              n(
                'base-header',
                { attrs: { flex: '', border: '', height: 'inner' } },
                [
                  n(
                    'breadcrumb-nav',
                    [
                      n(
                        'breadcrumb-nav-item',
                        { attrs: { to: '/', icon: 'circle-arrow-left' } },
                        [e._v('Home')]
                      ),
                      n('breadcrumb-nav-item', { attrs: { current: '' } }, [
                        e._v('Usage')
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              n('base-main', { attrs: { padding: 'outer' } }, [
                n(
                  'article',
                  { staticClass: 'article' },
                  [
                    n('h1', { staticClass: 'article__h1' }, [e._v('Usage')]),
                    n('h2', { staticClass: 'article__h2' }, [e._v('基础用法')]),
                    n('usage-case', {
                      scopedSlots: e._u([
                        {
                          key: 'case',
                          fn: function () {
                            return [
                              n(
                                'usage-case-item',
                                [
                                  n('svg-icon', { attrs: { name: 'plugins' } }),
                                  n('svg-icon', {
                                    attrs: { name: 'database-read', size: 24 }
                                  }),
                                  n('svg-icon', {
                                    attrs: { name: 'database-lock', size: 32 }
                                  })
                                ],
                                1
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'tips',
                          fn: function () {
                            return [
                              e._v(
                                ' size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size 大小。 '
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'code',
                          fn: function () {
                            return [
                              n('pre', { staticClass: 'article__pre' }, [
                                n('code', { staticClass: 'article__code' }, [
                                  e._v(
                                    '<template>\n  <svg-icon name="plugins" />\n  <svg-icon name="database-read" :size="24" />\n  <svg-icon name="database-lock" :size="32" />\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n</script>'
                                  )
                                ])
                              ])
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    }),
                    n('h2', { staticClass: 'article__h2' }, [e._v('设置颜色')]),
                    n('p', [
                      e._v(
                        'SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。'
                      )
                    ]),
                    n('h3', { staticClass: 'article__h3' }, [
                      e._v('通过 CSS 设置颜色')
                    ]),
                    n('usage-case', {
                      scopedSlots: e._u([
                        {
                          key: 'case',
                          fn: function () {
                            return [
                              n('usage-case-item', [
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'database-read', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'database-lock', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'plugins', size: 24 }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'tips',
                          fn: function () {
                            return [
                              e._v(
                                ' 通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。 '
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'code',
                          fn: function () {
                            return [
                              n('pre', { staticClass: 'article__pre' }, [
                                n('code', { staticClass: 'article__code' }, [
                                  e._v(
                                    '<template>\n  <span class="case-icon">\n    <svg-icon name="database-read" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="database-lock" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="plugins" :size="24" />\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n</script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>'
                                  )
                                ])
                              ])
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    }),
                    n('h3', { staticClass: 'article__h3' }, [
                      e._v('通过 color 属性设置颜色')
                    ]),
                    n('usage-case', {
                      scopedSlots: e._u([
                        {
                          key: 'case',
                          fn: function () {
                            return [
                              n('usage-case-item', [
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: {
                                        name: 'aside-environment',
                                        size: 24,
                                        color: '#07B759'
                                      }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: {
                                        name: 'aside-branch',
                                        size: 24,
                                        color: '#507AFE'
                                      }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: {
                                        name: 'aside-pc',
                                        size: 24,
                                        color: '#FF9901'
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'tips',
                          fn: function () {
                            return [
                              e._v(
                                ' 设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。 '
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'code',
                          fn: function () {
                            return [
                              n('pre', { staticClass: 'article__pre' }, [
                                n('code', { staticClass: 'article__code' }, [
                                  e._v(
                                    '<template>\n  <span class="case-icon">\n    <svg-icon name="aside-environment" :size="24" color="#07B759"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-branch" :size="24" color="#507AFE"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-pc" :size="24" color="#FF9901"/>\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n</script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>'
                                  )
                                ])
                              ])
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    }),
                    n('h2', { staticClass: 'article__h2' }, [e._v('高级用法')]),
                    n('p', [
                      e._v(
                        '如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。'
                      )
                    ]),
                    n('h3', { staticClass: 'article__h3' }, [
                      e._v('导入外部文件中的图标集')
                    ]),
                    n('usage-case', {
                      scopedSlots: e._u([
                        {
                          key: 'case',
                          fn: function () {
                            return [
                              n('usage-case-item', [
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'fa-asterisk', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'fa-plus', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'fa-glass', size: 24 }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'tips',
                          fn: function () {
                            return [
                              e._v(
                                ' 使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render() 方法绘制图标集。 '
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'code',
                          fn: function () {
                            return [
                              n('pre', { staticClass: 'article__pre' }, [
                                n('code', { staticClass: 'article__code' }, [
                                  e._v(
                                    '<template>\n  <span class="case-icon">\n    <svg-icon name="fa-asterisk" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-plus" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-glass" :size="24" />\n  </span>\n</template>\n\n<script>\nimport SvgIcon from \'svg-icon.vue\'\n\nimport { render } from \'svg-icon.vue/utils/utils\'\n// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集\nimport fontAwesomeSet from \'svg-icon.vue/assets/font-awesome\'\n\nrender(fontAwesomeSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n</script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>'
                                  )
                                ])
                              ])
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    }),
                    n('h3', { staticClass: 'article__h3' }, [
                      e._v('导入对象中的图标集')
                    ]),
                    n('usage-case', {
                      scopedSlots: e._u([
                        {
                          key: 'case',
                          fn: function () {
                            return [
                              n('usage-case-item', [
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'moon-home', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'moon-home2', size: 24 }
                                    })
                                  ],
                                  1
                                ),
                                n(
                                  'span',
                                  { staticClass: 'case-icon' },
                                  [
                                    n('svg-icon', {
                                      attrs: { name: 'moon-home3', size: 24 }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'tips',
                          fn: function () {
                            return [
                              e._v(
                                ' render() 可以直接绘制 JavaScript 对象数据中的图标集。 '
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'code',
                          fn: function () {
                            return [
                              n('pre', { staticClass: 'article__pre' }, [
                                n('code', { staticClass: 'article__code' }, [
                                  e._v(
                                    '<template>\n  <span class="case-icon">\n    <svg-icon name="moon-home" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home2" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home3" :size="24" />\n  </span>\n</template>\n\n<script>\n<script>\nimport SvgIcon from \'svg-icon.vue\'\nimport { render } from \'svg-icon.vue/utils/utils\'\n\nconst icoMoonSet = {\n  title: \'icoMoon 图标集\',\n  symbols: [\n    \'<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>\',\n    \'<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>\',\n    \'<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>\'\n  ]\n}\n\n// 绘制自定义图标集\nrender(icoMoonSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n</script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>'
                                  )
                                ])
                              ])
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        },
        o = [],
        t = s(90),
        c = s(7534),
        i = s(6635),
        r = s(9852),
        l = s(5098),
        p =
          (s(8309),
          function () {
            var e = this,
              n = e._self._c
            return n(
              'div',
              { staticClass: 'usage-case' },
              [
                n('usage-case-header', { ref: 'header' }, [e._t('case')], 2),
                n(
                  'usage-case-main',
                  { attrs: { expanded: e.folded } },
                  [
                    e.$slots.tips
                      ? n('usage-case-tips', { ref: 'tips' }, [e._t('tips')], 2)
                      : e._e(),
                    n('usage-case-code', { ref: 'code' }, [e._t('code')], 2)
                  ],
                  1
                ),
                n('usage-case-footer', {
                  ref: 'footer',
                  attrs: { folded: e.folded },
                  on: { toggle: e.onToggle }
                })
              ],
              1
            )
          }),
        d = [],
        u = function () {
          var e = this,
            n = e._self._c
          return n(
            'header',
            { staticClass: 'usage-case__header' },
            [e._t('default')],
            2
          )
        },
        m = [],
        v = { name: 'UsageCaseHeader', componentName: 'UsageCaseHeader' },
        g = v,
        f = s(1001),
        h = (0, f.Z)(g, u, m, !1, null, '7b5f0971', null),
        _ = h.exports
      _.install = function (e) {
        e.component(_.name, _)
      }
      var y = _,
        C = function () {
          var e = this,
            n = e._self._c
          return n(
            'div',
            { ref: 'main', class: e.className, style: e.cssRules },
            [e._t('default')],
            2
          )
        },
        x = [],
        b = {
          name: 'UsageCaseMain',
          componentName: 'UsageCaseMain',
          props: { expanded: { type: Boolean, default: !0 } },
          data: function () {
            return { folded: !1, defaultHeight: 'auto', codeHeight: 'auto' }
          },
          computed: {
            className: function () {
              return [
                'usage-case-main',
                { 'usage-case-main--folded': this.folded }
              ]
            },
            cssRules: function () {
              var e = this.codeHeight,
                n = 'auto' === e ? e : e + 'px'
              return { height: n }
            }
          },
          watch: {
            expanded: function () {
              this.update()
            },
            folded: function () {
              this.toggle()
            }
          },
          created: function () {
            this.update()
          },
          mounted: function () {
            var e = this.$refs.main,
              n = e.offsetHeight - 2
            n > 36 && ((this.codeHeight = n), (this.defaultHeight = n)),
              this.folded && (this.codeHeight = 0)
          },
          methods: {
            update: function () {
              this.folded = !this.expanded
            },
            expand: function () {
              this.codeHeight = this.defaultHeight
            },
            fold: function () {
              this.codeHeight = 0
            },
            toggle: function () {
              this.folded ? this.expand() : this.fold()
            }
          }
        },
        z = b,
        S = (0, f.Z)(z, C, x, !1, null, '6a1aa37f', null),
        k = S.exports
      k.install = function (e) {
        e.component(k.name, k)
      }
      var U = k,
        I = function () {
          var e = this,
            n = e._self._c
          return n(
            'div',
            { ref: 'code', staticClass: 'usage-case-code' },
            [
              n(
                'span',
                {
                  staticClass: 'usage-case-code__copy',
                  on: { click: e.onCopy }
                },
                [
                  n('svg-icon', { attrs: { name: 'copy' } }),
                  e._v(' 复制代码 ')
                ],
                1
              ),
              e._t('default')
            ],
            2
          )
        },
        w = [],
        M = s(9467),
        B = s(8249),
        Z = {
          name: 'UsageCaseCode',
          componentName: 'UsageCaseCode',
          components: { SvgIcon: M.Z },
          methods: {
            copy: function () {
              var e = this.$refs.code,
                n = e.querySelector('.article__code').innerHTML
              ;(0, B.vQ)((0, B.p1)(n))
            },
            onCopy: function () {
              this.copy(),
                this.$message.success({
                  round: !0,
                  message: '代码已复制到粘贴板！'
                })
            }
          }
        },
        H = Z,
        N = (0, f.Z)(H, I, w, !1, null, 'a8f7fe88', null),
        F = N.exports
      F.install = function (e) {
        e.component(F.name, F)
      }
      var T = F,
        A = function () {
          var e = this,
            n = e._self._c
          return n('div', { staticClass: 'usage-case-tips' }, [
            n(
              'div',
              { staticClass: 'usage-case-tips__inner' },
              [e._t('default')],
              2
            )
          ])
        },
        $ = [],
        E = { name: 'UsageCaseTips', componentName: 'UsageCaseTips' },
        P = E,
        R = (0, f.Z)(P, A, $, !1, null, '1f74b9bd', null),
        j = R.exports
      j.install = function (e) {
        e.component(j.name, j)
      }
      var q = j,
        J = function () {
          var e = this,
            n = e._self._c
          return n(
            'footer',
            {
              ref: 'footer',
              staticClass: 'usage-case-footer',
              on: { click: e.onToggle }
            },
            [
              n(
                'span',
                { staticClass: 'usage-case-footer__icon' },
                [n('svg-icon', { attrs: { name: e.icon } })],
                1
              ),
              n('span', { staticClass: 'usage-case-footer__text' }, [
                e._v(e._s(e.text))
              ])
            ]
          )
        },
        L = [],
        Q = {
          name: 'UsageCaseFooter',
          componentName: 'UsageCaseFooter',
          components: { SvgIcon: M.Z },
          props: { folded: { type: Boolean, default: !1 } },
          computed: {
            icon: function () {
              return this.folded ? 'arrow-down' : 'arrow-up'
            },
            text: function () {
              return this.folded ? '显示代码' : '隐藏代码'
            }
          },
          methods: {
            onToggle: function () {
              this.$emit('toggle')
            }
          }
        },
        D = Q,
        G = (0, f.Z)(D, J, L, !1, null, '4e9da936', null),
        K = G.exports
      K.install = function (e) {
        e.component(K.name, K)
      }
      var O = K,
        V = {
          name: 'UsageCase',
          componentName: 'UsageCase',
          components: {
            UsageCaseHeader: y,
            UsageCaseMain: U,
            UsageCaseCode: T,
            UsageCaseTips: q,
            UsageCaseFooter: O
          },
          props: { expanded: { type: Boolean, default: !0 } },
          data: function () {
            return { folded: !0 }
          },
          watch: {
            expanded: function () {
              this.update()
            }
          },
          created: function () {
            this.update()
          },
          methods: {
            update: function () {
              this.folded = !this.expanded
            },
            onToggle: function () {
              this.folded = !this.folded
            }
          }
        },
        W = V,
        X = (0, f.Z)(W, p, d, !1, null, null, null),
        Y = X.exports
      Y.install = function (e) {
        e.component(Y.name, Y)
      }
      var ee = Y,
        ne = function () {
          var e = this,
            n = e._self._c
          return n('div', { class: e.className }, [e._t('default')], 2)
        },
        se = [],
        ae = {
          name: 'UsageCaseItem',
          componentName: 'UsageCaseItem',
          props: {
            flex: { type: Boolean, default: !1 },
            align: { type: String, default: 'left' }
          },
          computed: {
            className: function () {
              return [
                'usage-case-item',
                'util-align-'.concat(this.align),
                { 'usage-case-item--flex': this.flex }
              ]
            }
          }
        },
        oe = ae,
        te = (0, f.Z)(oe, ne, se, !1, null, '30b85dfa', null),
        ce = te.exports
      ce.install = function (e) {
        e.component(ce.name, ce)
      }
      var ie = ce,
        re = s(7970),
        le = {
          title: 'icoMoon 图标集',
          symbols: [
            '<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>',
            '<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>',
            '<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>'
          ]
        },
        pe = le,
        de = s(8638)
      ;(0, de.s)(re.Z), (0, de.s)(pe)
      var ue = {
          name: 'PageUsage',
          componentName: 'PageUsage',
          components: {
            BaseContainer: t.Z,
            BaseHeader: c.Z,
            BaseMain: i.Z,
            BreadcrumbNav: r.Z,
            BreadcrumbNavItem: l.Z,
            UsageCase: ee,
            UsageCaseItem: ie,
            SvgIcon: M.Z
          }
        },
        me = ue,
        ve = (0, f.Z)(me, a, o, !1, null, '119b23da', null),
        ge = ve.exports
    }
  }
])
