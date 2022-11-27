"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[523],{5038:function(n,s,e){e.r(s),e.d(s,{default:function(){return d}});var o=function(){var n=this;n._self._c;return n._m(0)},a=[function(){var n=this,s=n._self._c;return s("section",{staticClass:"article__section"},[s("h2",{staticClass:"article__h2"},[n._v("高级用法")]),s("p",[n._v(" 如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。 ")]),s("h3",{staticClass:"article__h3"},[n._v("导入外部文件中的图标集")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-asterisk",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-plus",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-glass",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" 使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render() 方法绘制图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="fa-asterisk" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-plus" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-glass" :size="24" />\n  </span>\n</template>\n\n<script>\nimport SvgIcon from \'svg-icon.vue\'\n\nimport { render } from \'svg-icon.vue/utils/utils\'\n// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集\nimport fontAwesomeSet from \'svg-icon.vue/assets/font-awesome\'\n\nrender(fontAwesomeSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),s("h3",{staticClass:"article__h3"},[n._v("导入对象中的图标集")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home2",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home3",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" render() 可以直接绘制 JavaScript 对象数据中的图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="moon-home" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home2" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home3" :size="24" />\n  </span>\n</template>\n\n<script>\n<script>\nimport SvgIcon from \'svg-icon.vue\'\nimport { render } from \'svg-icon.vue/utils/utils\'\n\nconst icoMoonSet = {\n  title: \'icoMoon 图标集\',\n  symbols: [\n    \'<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>\',\n    \'<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>\',\n    \'<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>\'\n  ]\n}\n\n// 绘制自定义图标集\nrender(icoMoonSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)}],t=e(5083),c=e(8134),i=e(9126),r={title:"icoMoon 图标集",symbols:['<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>','<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>','<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>']},l=r,p=e(8638);(0,p.s)(l);var v={name:"UsageAdvancedSection",componentName:"UsageAdvancedSection",components:{BaseUsage:t.Z,BaseUsageCase:c.Z,SvgIcon:i["default"]}},u=v,m=e(1001),h=(0,m.Z)(u,o,a,!1,null,"61cd70d4",null),d=h.exports},5068:function(n,s,e){e.d(s,{hc:function(){return o},p1:function(){return a}});e(4916),e(5306),e(3210);var o=function(n){return n.replace(/<script[^>]*>.*?<\/script>/gi,"")},a=function(n){var s={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return n.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(n){return s[n]||n})).replace(/\{\s+\{/g,"{{")}},8638:function(n,s,e){e.d(s,{x:function(){return y},s:function(){return d}});var o=e(5957),a=(e(7658),e(1539),e(4747),e(9600),e(8236)),t=e(8820),c=e(1505),i=e(5681),r=e(8868),l=e(1471),p=e(329),v=e(2919),u=[];u.push.apply(u,(0,o.Z)(a.Z.symbols)),u.push.apply(u,(0,o.Z)(t.Z.symbols)),u.push.apply(u,(0,o.Z)(c.Z.symbols)),u.push.apply(u,(0,o.Z)(i.Z.symbols)),u.push.apply(u,(0,o.Z)(r.Z.symbols)),u.push.apply(u,(0,o.Z)(l.Z.symbols)),u.push.apply(u,(0,o.Z)(p.Z.symbols)),u.push.apply(u,(0,o.Z)(v.Z.symbols));var m={title:"Default",code:"default",symbols:u},h=[],d=function(n){var s,e=document.body,a=document.createElement("div"),t=document.querySelector("#svg-icons");n?Array.isArray(n)?n.forEach((function(n){h.push.apply(h,(0,o.Z)(n.symbols))})):h.push.apply(h,(0,o.Z)(n.symbols)):h.push.apply(h,(0,o.Z)(m.symbols)),s=h.join(""),t?t.innerHTML+=s:(a.innerHTML='<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">'.concat(s,"</svg>"),e.insertBefore(a.firstChild,e.firstChild))},y=function(){return h}}}]);