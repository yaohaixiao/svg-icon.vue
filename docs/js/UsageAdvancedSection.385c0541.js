"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[523],{4785:function(n,s,e){e.r(s),e.d(s,{default:function(){return _}});var o=function(){var n=this;n._self._c;return n._m(0)},a=[function(){var n=this,s=n._self._c;return s("section",{staticClass:"article__section"},[s("h2",{staticClass:"article__h2"},[n._v("高级用法")]),s("p",[n._v(" 如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。 ")]),s("h3",{staticClass:"article__h3"},[n._v("导入外部文件中的图标集")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-asterisk",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-plus",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"fa-question",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" 使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render() 方法绘制图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="fa-asterisk" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-plus" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-question" :size="24" />\n  </span>\n</template>\n\n<script>\nimport SvgIcon from \'svg-icon.vue\'\n\nimport { render } from \'svg-icon.vue/utils/utils\'\n// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集\nimport fontAwesomeSet from \'svg-icon.vue/assets/font-awesome\'\n\nrender(fontAwesomeSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),s("h3",{staticClass:"article__h3"},[n._v("导入对象中的图标集")]),s("base-usage",{scopedSlots:n._u([{key:"case",fn:function(){return[s("base-usage-case",[s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home2",size:24}})],1),s("span",{staticClass:"base-usage-case__icon"},[s("svg-icon",{attrs:{name:"moon-home3",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[n._v(" render() 可以直接绘制 JavaScript 对象数据中的图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[s("pre",{staticClass:"base-usage-code__pre"},[s("code",{staticClass:"base-usage-code__code"},[n._v('<template>\n  <span class="case-icon">\n    <svg-icon name="moon-home" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home2" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home3" :size="24" />\n  </span>\n</template>\n\n<script>\n<script>\nimport SvgIcon from \'svg-icon.vue\'\nimport { render } from \'svg-icon.vue/utils/utils\'\n\nconst icoMoonSet = {\n  title: \'icoMoon 图标集\',\n  symbols: [\n    \'<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>\',\n    \'<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>\',\n    \'<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>\'\n  ]\n}\n\n// 绘制自定义图标集\nrender(icoMoonSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)}],c=e(299),t=e(7744),i=e(6105);const l={title:"icoMoon 图标集",symbols:['<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>','<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>','<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>']};var r=l,v=e(2648);const p={title:"FontAwesome 图标集",symbols:['<symbol id="icon-fa-asterisk" viewBox="0 0 26 28"><path d="M23.156 16.406c0.953 0.547 1.281 1.781 0.734 2.734l-1 1.719c-0.547 0.953-1.781 1.281-2.734 0.734l-4.156-2.391v4.797c0 1.094-0.906 2-2 2h-2c-1.094 0-2-0.906-2-2v-4.797l-4.156 2.391c-0.953 0.547-2.187 0.219-2.734-0.734l-1-1.719c-0.547-0.953-0.219-2.188 0.734-2.734l4.156-2.406-4.156-2.406c-0.953-0.547-1.281-1.781-0.734-2.734l1-1.719c0.547-0.953 1.781-1.281 2.734-0.734l4.156 2.391v-4.797c0-1.094 0.906-2 2-2h2c1.094 0 2 0.906 2 2v4.797l4.156-2.391c0.953-0.547 2.188-0.219 2.734 0.734l1 1.719c0.547 0.953 0.219 2.188-0.734 2.734l-4.156 2.406z"></path></symbol>','<symbol id="icon-fa-plus" viewBox="0 0 22 28"><path d="M22 11.5v3c0 0.828-0.672 1.5-1.5 1.5h-6.5v6.5c0 0.828-0.672 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-3c0-0.828 0.672-1.5 1.5-1.5h6.5v-6.5c0-0.828 0.672-1.5 1.5-1.5h3c0.828 0 1.5 0.672 1.5 1.5v6.5h6.5c0.828 0 1.5 0.672 1.5 1.5z"></path></symbol>','<symbol id="icon-fa-question" viewBox="0 0 17 28"><path d="M11 19.625v3.75c0 0.344-0.281 0.625-0.625 0.625h-3.75c-0.344 0-0.625-0.281-0.625-0.625v-3.75c0-0.344 0.281-0.625 0.625-0.625h3.75c0.344 0 0.625 0.281 0.625 0.625zM15.937 10.25c0 2.969-2.016 4.109-3.5 4.937-0.922 0.531-1.5 1.609-1.5 2.063v0c0 0.344-0.266 0.75-0.625 0.75h-3.75c-0.344 0-0.562-0.531-0.562-0.875v-0.703c0-1.891 1.875-3.516 3.25-4.141 1.203-0.547 1.703-1.062 1.703-2.063 0-0.875-1.141-1.656-2.406-1.656-0.703 0-1.344 0.219-1.687 0.453-0.375 0.266-0.75 0.641-1.672 1.797-0.125 0.156-0.313 0.25-0.484 0.25-0.141 0-0.266-0.047-0.391-0.125l-2.562-1.953c-0.266-0.203-0.328-0.547-0.156-0.828 1.687-2.797 4.062-4.156 7.25-4.156 3.344 0 7.094 2.672 7.094 6.25z"></path></symbol>']};(0,v.s)(p),(0,v.s)(r);var m={name:"UsageAdvancedSection",componentName:"UsageAdvancedSection",components:{BaseUsage:c.Z,BaseUsageCase:t.Z,SvgIcon:i.Z}},h=m,u=e(1001),d=(0,u.Z)(h,o,a,!1,null,null,null),_=d.exports},5068:function(n,s,e){e.d(s,{hc:function(){return o},p1:function(){return a}});const o=n=>n.replace(/<script[^>]*>.*?<\/script>/gi,""),a=n=>{const s={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return n.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(n=>s[n]||n)).replace(/\{\s+\{/g,"{{")}}}]);