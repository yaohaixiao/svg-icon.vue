'use strict'
;(self['webpackChunk_yaohaixiao_svg_icon_vue'] =
  self['webpackChunk_yaohaixiao_svg_icon_vue'] || []).push([
  [853],
  {
    9988: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return p
          }
        })
      var a = function () {
          var t = this,
            e = t._self._c
          return e(
            'base-container',
            [
              e(
                'base-header',
                { attrs: { flex: '', border: '', height: 'inner' } },
                [
                  e(
                    'breadcrumb-nav',
                    [
                      e(
                        'breadcrumb-nav-item',
                        { attrs: { to: '/', icon: 'circle-arrow-left' } },
                        [t._v('Home')]
                      ),
                      e('breadcrumb-nav-item', { attrs: { current: '' } }, [
                        t._v('API Documentation')
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              e('base-main', { attrs: { padding: 'outer' } }, [
                e('article', { staticClass: 'article' }, [
                  e('h1', { staticClass: 'article__h1' }, [
                    t._v('API Documentation')
                  ]),
                  e('p', [
                    t._v(
                      ' svg-icon.vue 为开发者提供了用来在 VUE 项目中显示 SVG 图标的工具。 '
                    )
                  ]),
                  e('h2', { staticClass: 'article__h2' }, [t._v('安装')]),
                  e('p', [
                    t._v(
                      'svg-icon.vue 的安装十分简单，可以直接在命令行中运行 npm install 命令安装，也可以直接在项目的 package.json 中配置依赖：'
                    )
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [
                    t._v('在命令行中安装')
                  ]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v('npm i @yaohaixiao/svg-icon.vue')
                    ])
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [
                    t._v('在 package.js 文件中添加依赖')
                  ]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v('"@yaohaixiao/svg-icon.vue": "1.x.x"')
                    ])
                  ]),
                  e('h2', { staticClass: 'article__h2' }, [
                    t._v('render() 方法')
                  ]),
                  e('p', [
                    t._v(
                      'SvgIcon 组件至 2.0.0 版本开始，不再直接绘制 default 图标集。需要手动导入 render() 方法。'
                    )
                  ]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v("import { render } from 'svg-icon.vue/utils/utils'")
                    ])
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [t._v('调用语法')]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v('render(iconSet)')
                    ])
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [t._v('参数说明')]),
                  e('table', { staticClass: 'article__table' }, [
                    e('thead', [
                      e('tr', [
                        e('th', [t._v('参数')]),
                        e('th', [t._v('类型')]),
                        e('th', [t._v('可选值')]),
                        e('th', [t._v('默认值')]),
                        e('th', [t._v('说明')])
                      ])
                    ]),
                    e('tbody', [
                      e('tr', [
                        e('td', [t._v('iconSet')]),
                        e('td', [t._v('Object')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('可选，图标集数据对象。')])
                      ]),
                      e('tr', [
                        e('td', [t._v('iconSet.title')]),
                        e('td', [t._v('String')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('必选，图标集名称。')])
                      ]),
                      e('tr', [
                        e('td', [t._v('iconSet.symbols')]),
                        e('td', [t._v('Array')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('--')]),
                        e('td', [
                          t._v('必选，存储 svg 图标的 symbols 数组 图标集。')
                        ])
                      ])
                    ])
                  ]),
                  e('p', [t._v('绘制 default 图标集：')]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v(
                        "import { render } from 'svg-icon.vue/utils/utils'\n// 不传递 iconSet 参数则绘制 default 图标集\nrender()"
                      )
                    ])
                  ]),
                  e('p', [t._v('绘制自定义的图标集：')]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v(
                        "import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'\nimport { render } from 'svg-icon.vue/utils/utils'\n\n// 绘制 Font Awesome 免费版图标集\nrender(fontAwesomeSet)"
                      )
                    ])
                  ]),
                  e('p', [t._v('以下是 svg-icon.vue 内置的所有图标集：')]),
                  e('ol', [
                    e('li', [
                      e(
                        'a',
                        { attrs: { href: 'http://brankic1979.com/icons/' } },
                        [t._v('Brankic 1979')]
                      ),
                      t._v('：svg-icon.vue/assets/brankic-1979')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons'
                          }
                        },
                        [t._v('Broccolidry')]
                      ),
                      t._v('：svg-icon.vue/assets/broccolidry')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://github.com/yaohaixiao/svg-icon.vue'
                          }
                        },
                        [t._v('Default')]
                      ),
                      t._v('：svg-icon.vue/assets/default')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'http://dribbble.com/shots/928458-80-Shades-of-White-Icons'
                          }
                        },
                        [t._v('Eighty Shades')]
                      ),
                      t._v('：svg-icon.vue/assets/eighty-shades')
                    ]),
                    e('li', [
                      e('a', { attrs: { href: 'http://www.entypo.com/' } }, [
                        t._v('Entypo+')
                      ]),
                      t._v('：svg-icon.vue/assets/entypo')
                    ]),
                    e('li', [
                      e('a', { attrs: { href: 'https://feathericons.com/' } }, [
                        t._v('Feather')
                      ]),
                      t._v('：svg-icon.vue/assets/feather')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://github.com/FortAwesome/Font-Awesome'
                          }
                        },
                        [t._v('Font Awesome')]
                      ),
                      t._v('：svg-icon.vue/assets/font-awesome')
                    ]),
                    e('li', [
                      e('a', { attrs: { href: 'http://hawcons.com/' } }, [
                        t._v('Hawcons')
                      ]),
                      t._v('：svg-icon.vue/assets/hawcons')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://github.com/somerandomdude/Iconic'
                          }
                        },
                        [t._v('Iconic')]
                      ),
                      t._v('：svg-icon.vue/assets/iconic')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://designmodo.com/linecons-free/'
                          }
                        },
                        [t._v('Linecons')]
                      ),
                      t._v('：svg-icon.vue/assets/linecons')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: { href: 'https://material.io/resources/icons' }
                        },
                        [t._v('Material')]
                      ),
                      t._v('：svg-icon.vue/assets/material')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'http://www.alessioatzeni.com/meteocons/'
                          }
                        },
                        [t._v('Meteocons')]
                      ),
                      t._v('：svg-icon.vue/assets/meteocons')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'http://dribbble.com/shots/929153-Steady-set-of-icons'
                          }
                        },
                        [t._v('Steadysets')]
                      ),
                      t._v('：svg-icon.vue/assets/steadysets')
                    ]),
                    e('li', [
                      e('a', { attrs: { href: 'http://typicons.com/' } }, [
                        t._v('Typicons')
                      ]),
                      t._v('：svg-icon.vue/assets/typicons')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'https://designmodo.com/linecons-free/'
                          }
                        },
                        [t._v('Vicons')]
                      ),
                      t._v('：svg-icon.vue/assets/vicons')
                    ]),
                    e('li', [
                      e(
                        'a',
                        {
                          attrs: {
                            href: 'http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/'
                          }
                        },
                        [t._v('wpzoom')]
                      ),
                      t._v('：svg-icon.vue/assets/wpzoom')
                    ]),
                    e('li', [
                      e('a', { attrs: { href: 'http://www.zondicons.com/' } }, [
                        t._v('Zondicons')
                      ]),
                      t._v('：svg-icon.vue/assets/zondicons')
                    ])
                  ]),
                  e('p', [
                    t._v(
                      '以上图标集除 Google 的 Material 图标集采用 Apache License 2.0 协议，其余的图标库基本都可以直接用于商业用途。使用时请根据需要选择使用。'
                    )
                  ]),
                  e('h2', { staticClass: 'article__h2' }, [
                    t._v('导入 SvgIcon 组件')
                  ]),
                  e('p', [
                    t._v(
                      '使用 render() 方法绘制 svg 图标集后，就可以调用 SvgIcon 组件显示图标了。'
                    )
                  ]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v(
                        "import SvgIcon from 'svg-icon.vue'\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}"
                      )
                    ])
                  ]),
                  e('h2', { staticClass: 'article__h2' }, [
                    t._v('SvgIcon 组件')
                  ]),
                  e('p', [
                    t._v(
                      'SvgIcon.vue 是 svg-icon.vue 的核心组件，用来显示 render() 方法绘制的 svg 图标集中的图标。'
                    )
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [t._v('调用语法')]),
                  e('p', [
                    t._v(' SvgIcon 组件使用起来十分简单，调用语法如下： ')
                  ]),
                  e('pre', { staticClass: 'article__pre' }, [
                    e('code', { staticClass: 'article__code' }, [
                      t._v(
                        '<svg-icon :name="iconName" :size="iconSize" :color="iconColor" />'
                      )
                    ])
                  ]),
                  e('h3', { staticClass: 'article__h3' }, [t._v('参数说明')]),
                  e('table', { staticClass: 'article__table' }, [
                    e('thead', [
                      e('tr', [
                        e('th', [t._v('参数')]),
                        e('th', [t._v('类型')]),
                        e('th', [t._v('可选值')]),
                        e('th', [t._v('默认值')]),
                        e('th', [t._v('说明')])
                      ])
                    ]),
                    e('tbody', [
                      e('tr', [
                        e('td', [t._v('name')]),
                        e('td', [t._v('string')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('tips')]),
                        e('td', [
                          t._v('图标名称：图标库中所有图标icon-后的名称。')
                        ])
                      ]),
                      e('tr', [
                        e('td', [t._v('size')]),
                        e('td', [t._v('number')]),
                        e('td', [t._v('0以上的整数')]),
                        e('td', [t._v('16')]),
                        e('td', [t._v('图标大小')])
                      ]),
                      e('tr', [
                        e('td', [t._v('color')]),
                        e('td', [t._v('string')]),
                        e('td', [t._v('表示色值的字符串')]),
                        e('td', [t._v('--')]),
                        e('td', [t._v('图标颜色色值：16进制色值或者RGB设置')])
                      ])
                    ])
                  ])
                ])
              ])
            ],
            1
          )
        },
        o = [],
        i = s(90),
        c = s(7534),
        r = s(6635),
        v = s(9852),
        n = s(5098),
        _ = {
          name: 'PageDocumentation',
          componentName: 'PageDocumentation',
          components: {
            BaseContainer: i.Z,
            BaseHeader: c.Z,
            BaseMain: r.Z,
            BreadcrumbNav: v.Z,
            BreadcrumbNavItem: n.Z
          }
        },
        l = _,
        d = s(1001),
        h = (0, d.Z)(l, a, o, !1, null, '61dad40b', null),
        p = h.exports
    }
  }
])
