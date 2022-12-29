"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[853],{4212:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var n=function(){var t=this,e=t._self._c;return e("base-container",[e("base-header",{attrs:{flex:"",border:"",height:"inner"}},[e("base-breadcrumb",[e("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),e("base-breadcrumb-item",{attrs:{current:""}},[t._v("API Documentation")])],1)],1),e("base-main",{attrs:{padding:"outer"}},[e("article",{staticClass:"article"},[e("h1",{staticClass:"article__h1"},[t._v("API Documentation")]),e("p",[t._v("svg-icon.vue 为开发者提供了用来在 VUE 项目中显示 SVG 图标的工具。")]),e("api-install-section"),e("api-methods-section"),e("api-component-section")],1)]),e("base-footer",{attrs:{flex:"",height:"inner","text-align":"right"}},[e("div",{staticClass:"base-footer__navigation"},[t._v(" Next Page： "),e("router-link",{attrs:{to:"/usage"}},[t._v("Usage")])],1)])],1)},a=[],i=s(90),o=s(3197),c=s(3839),r=s(6212),_=s(3734),v=s(7371),l=function(t,e){return e._m(2)},u=[function(t,e){return t("pre",{staticClass:"article__pre"},[t("code",{staticClass:"article__code"},[e._v("npm i @yaohaixiao/svg-icon.vue")])])},function(t,e){return t("pre",{staticClass:"article__pre"},[t("code",{staticClass:"article__code"},[e._v('"@yaohaixiao/svg-icon.vue": "2.x.x"')])])},function(t,e){return t("section",{staticClass:"article__section"},[t("h2",{staticClass:"article__h2"},[e._v("Install")]),t("p",[e._v(" svg-icon.vue 的安装十分简单，可以直接在命令行中运行 npm install 命令安装，也可以直接在项目的 package.json 中配置依赖： ")]),t("h3",{staticClass:"article__h3"},[e._v("在命令行中安装")]),e._m(0),t("h3",{staticClass:"article__h3"},[e._v("在 package.js 文件中添加依赖")]),e._m(1)])}],h={name:"ApiInstallSection",componentName:"ApiInstallSection"},p=h,m=s(1001),d=(0,m.Z)(p,l,u,!0,null,null,null),f=d.exports,g=function(){var t=this;t._self._c;return t._m(7)},b=[function(){var t=this,e=t._self._c;return e("pre",{staticClass:"article__pre"},[e("code",{staticClass:"article__code"},[t._v("import { render } from 'svg-icon.vue/utils/utils'")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"article__pre"},[e("code",{staticClass:"article__code"},[t._v("render(iconSet)")])])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"article__table"},[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("iconSet")]),e("td",[t._v("Object | Array")]),e("td",[t._v("--")]),e("td",[t._v("--")]),e("td",[t._v("可选，图标集数据对象或者图标集对象数组。")])]),e("tr",[e("td",[t._v("iconSet.title")]),e("td",[t._v("String")]),e("td",[t._v("--")]),e("td",[t._v("--")]),e("td",[t._v("必选，图标集名称。")])]),e("tr",[e("td",[t._v("iconSet.symbols")]),e("td",[t._v("Array")]),e("td",[t._v("--")]),e("td",[t._v("--")]),e("td",[t._v("必选，存储 svg 图标的 symbols 数组 图标集。")])])])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"article__pre"},[e("code",{staticClass:"article__code"},[t._v("import { render } from 'svg-icon.vue/utils/utils'\n// 不传递 iconSet 参数则绘制 default 图标集\nrender()")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"article__pre"},[e("code",{staticClass:"article__code"},[t._v("import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'\nimport defaultSet from 'svg-icon.vue/assets/default'\nimport { render } from 'svg-icon.vue/utils/utils'\n\n// 绘制单个（Font Awesome 免费版）图标集\nrender(fontAwesomeSet)\n\n// 绘制多个图标集\nrender([default, fontAwesomeSet])")])])},function(){var t=this,e=t._self._c;return e("ol",[e("li",[e("a",{attrs:{href:"http://brankic1979.com/icons/"}},[t._v("Brankic 1979")]),t._v(" ：svg-icon.vue/assets/brankic-1979 ")]),e("li",[e("a",{attrs:{href:"http://dribbble.com/shots/587469-Free-16px-Broccolidryiconsaniconsetitisfullof-icons"}},[t._v(" Broccolidry ")]),t._v(" ：svg-icon.vue/assets/broccolidry ")]),e("li",[e("a",{attrs:{href:"https://github.com/yaohaixiao/svg-icon.vue"}},[t._v("Default")]),t._v(" ：svg-icon.vue/assets/default ")]),e("li",[e("a",{attrs:{href:"http://dribbble.com/shots/928458-80-Shades-of-White-Icons"}},[t._v(" Eighty Shades ")]),t._v(" ：svg-icon.vue/assets/eighty-shades ")]),e("li",[e("a",{attrs:{href:"http://www.entypo.com/"}},[t._v("Entypo+")]),t._v(" ：svg-icon.vue/assets/entypo ")]),e("li",[e("a",{attrs:{href:"https://feathericons.com/"}},[t._v("Feather")]),t._v(" ：svg-icon.vue/assets/feather ")]),e("li",[e("a",{attrs:{href:"https://github.com/FortAwesome/Font-Awesome"}},[t._v("Font Awesome")]),t._v(" ：svg-icon.vue/assets/font-awesome ")]),e("li",[e("a",{attrs:{href:"http://hawcons.com/"}},[t._v("Hawcons")]),t._v(" ：svg-icon.vue/assets/hawcons ")]),e("li",[e("a",{attrs:{href:"https://github.com/somerandomdude/Iconic"}},[t._v("Iconic")]),t._v(" ：svg-icon.vue/assets/iconic ")]),e("li",[e("a",{attrs:{href:"https://designmodo.com/linecons-free/"}},[t._v("Linecons")]),t._v(" ：svg-icon.vue/assets/linecons ")]),e("li",[e("a",{attrs:{href:"https://material.io/resources/icons"}},[t._v("Material")]),t._v(" ：svg-icon.vue/assets/material ")]),e("li",[e("a",{attrs:{href:"http://www.alessioatzeni.com/meteocons/"}},[t._v("Meteocons")]),t._v(" ：svg-icon.vue/assets/meteocons ")]),e("li",[e("a",{attrs:{href:"http://dribbble.com/shots/929153-Steady-set-of-icons"}},[t._v(" Steadysets ")]),t._v(" ：svg-icon.vue/assets/steadysets ")]),e("li",[e("a",{attrs:{href:"http://typicons.com/"}},[t._v("Typicons")]),t._v(" ：svg-icon.vue/assets/typicons ")]),e("li",[e("a",{attrs:{href:"https://designmodo.com/linecons-free/"}},[t._v("Vicons")]),t._v(" ：svg-icon.vue/assets/vicons ")]),e("li",[e("a",{attrs:{href:"http://www.wpzoom.com/wpzoom/new-freebie-wpzoom-developer-icon-set-154-free-icons/"}},[t._v(" wpzoom ")]),t._v(" ：svg-icon.vue/assets/wpzoom ")]),e("li",[e("a",{attrs:{href:"http://www.zondicons.com/"}},[t._v("Zondicons")]),t._v(" ：svg-icon.vue/assets/zondicons ")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"article__pre"},[e("code",{staticClass:"article__code"},[t._v("import { render, getSymbols } from 'svg-icon.vue/utils/utils'\n\n// 绘制 default 图标集\nrender()\n\n// => 返回 default 图标集中的 symbols （数组）数据\nconst symbols = getSymbols()")])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"article__section"},[e("h2",{staticClass:"article__h2"},[t._v("Methods")]),e("p",[t._v(" svg-icon.vue 的 API 对外提供了 render() 和 getSymbols() 两个方法，以下是这两个方法的具体使用细节。 ")]),e("h2",{staticClass:"article__h3"},[t._v("render() 方法")]),e("p",[t._v(" SvgIcon 组件至 2.0.0 版本开始，不再直接绘制 default 图标集。需要手动导入 render() 方法。 ")]),t._m(0),e("h3",{staticClass:"article__h4"},[t._v("调用语法")]),t._m(1),e("h3",{staticClass:"article__h4"},[t._v("参数说明")]),t._m(2),e("p",[t._v("绘制 default 图标集：")]),t._m(3),e("p",[t._v("绘制自定义的图标集：")]),t._m(4),e("base-tips",{attrs:{type:"info",effect:"plain"}},[t._v(" 说明：如果你只想使用内置图标集中特定的几个图标，你可以在 API 文档的 "),e("a",{attrs:{href:"https://yaohaixiao.github.io/svg-icon.vue/#/icons"}},[t._v("icons")]),t._v(" 相关页面选中需要的图标，然后点击图标购物车，我们会自动为你生成自定义图标集。并且提供下载 SVG 图标集和 JS 源代码复制功能。 如果你仅仅想使用某个图标，我们也同时提供单独下载 SVG 图标的功能。 ")]),e("p",[t._v("以下是 svg-icon.vue 内置的所有图标集：")]),t._m(5),e("base-tips",{attrs:{type:"warning",effect:"plain"}},[t._v(" 说明：以上图标集除 Google 的 Material 图标集采用 Apache License 2.0 协议，其余的图标库基本都可以直接用于商业用途。使用时请根据需要选择使用。 ")]),e("h2",{staticClass:"article__h3"},[t._v("getSymbols() 方法")]),e("p",[t._v(" getSymbols() 方法返回使用 render() 方法绘制的图标集中所有 symbols （数组）数据。 ")]),t._m(6)],1)}],C=s(4327),S={name:"ApiMethodsSection",componentName:"ApiMethodsSection",components:{BaseTips:C.Z}},y=S,w=(0,m.Z)(y,g,b,!1,null,null,null),A=w.exports,I=function(t,e){return e._m(3)},x=[function(t,e){return t("pre",{staticClass:"article__pre"},[t("code",{staticClass:"article__code"},[e._v("import SvgIcon from 'svg-icon.vue'\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}")])])},function(t,e){return t("pre",{staticClass:"article__pre"},[t("code",{staticClass:"article__code"},[e._v('<svg-icon :name="iconName" :size="iconSize" :color="iconColor" />')])])},function(t,e){return t("table",{staticClass:"article__table"},[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("name")]),t("td",[e._v("string")]),t("td",[e._v("--")]),t("td",[e._v("tips")]),t("td",[e._v("图标名称：图标库中所有图标icon-后的名称。")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("number | string | array")]),t("td",[e._v(" number 和 string 类型时，可选值为 0 以上的整数，此时宽度和高度相等； "),t("br"),e._v(" array 类型时数组长度为 2，分别代表宽度和高度； ")]),t("td",[e._v("16")]),t("td",[e._v("图标大小")])]),t("tr",[t("td",[e._v("color")]),t("td",[e._v("string")]),t("td",[e._v("表示色值的字符串")]),t("td",[e._v("--")]),t("td",[e._v("图标颜色色值：16进制色值或者RGB设置")])])])])},function(t,e){return t("section",{staticClass:"article__section"},[t("h2",{staticClass:"article__h2"},[e._v("Component")]),t("p",[e._v(" svg-icon.vue 为开发者提供了 SvgIcon 组件，使用它来显示 render() 方法绘制的 svg 图标库中某个图标。 ")]),t("h2",{staticClass:"article__h3"},[e._v("导入 SvgIcon 组件")]),t("p",[e._v(" 使用 render() 方法绘制 svg 图标集后，就可以调用 SvgIcon 组件显示图标了。 ")]),e._m(0),t("h2",{staticClass:"article__h3"},[e._v("SvgIcon 组件")]),t("p",[e._v(" SvgIcon.vue 是 svg-icon.vue 的核心组件，用来显示 render() 方法绘制的 svg svg 图标集中的图标。 ")]),t("h3",{staticClass:"article__h4"},[e._v("调用语法")]),t("p",[e._v("SvgIcon 组件使用起来十分简单，调用语法如下：")]),e._m(1),t("h3",{staticClass:"article__h4"},[e._v("参数说明")]),e._m(2)])}],B={name:"ApiComponentSection",componentName:"ApiComponentSection"},Z=B,z=(0,m.Z)(Z,I,x,!0,null,null,null),k=z.exports,M={name:"PageDocumentation",componentName:"PageDocumentation",components:{BaseContainer:i.Z,BaseHeader:o.Z,BaseMain:c.Z,BaseBreadcrumb:r.Z,BaseBreadcrumbItem:_.Z,BaseFooter:v.Z,ApiInstallSection:f,ApiMethodsSection:A,ApiComponentSection:k}},F=M,P=(0,m.Z)(F,n,a,!1,null,null,null),N=P.exports},5068:function(t,e,s){s.d(e,{hc:function(){return n},p1:function(){return a}});s(4916),s(5306),s(3210);var n=function(t){return t.replace(/<script[^>]*>.*?<\/script>/gi,"")},a=function(t){var e={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(t){return e[t]||t})).replace(/\{\s+\{/g,"{{")}}}]);