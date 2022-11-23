"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[523],{5062:function(s,n,e){e.r(n),e.d(n,{default:function(){return d}});var o=function(){var s=this,n=s._self._c;return n("section",{staticClass:"article__section"},[n("h2",{staticClass:"article__h2"},[s._v("高级用法")]),n("p",[s._v(" 如果 SvgIcon 组件自带的图标没有您需要的，SvgIcon 组件还支持使用 render() 方法添加自定义的图标集，方法如下。 ")]),n("h3",{staticClass:"article__h3"},[s._v("导入外部文件中的图标集")]),n("base-usage",{scopedSlots:s._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-asterisk",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-plus",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"fa-glass",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[s._v(" 使用 import 导入外部 .js 文件中的自定义的组件集，然后使用 render() 方法绘制图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[s._v('<template>\n  <span class="case-icon">\n    <svg-icon name="fa-asterisk" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-plus" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="fa-glass" :size="24" />\n  </span>\n</template>\n\n<script>\nimport SvgIcon from \'svg-icon.vue\'\n\nimport { render } from \'svg-icon.vue/utils/utils\'\n// 导入自带的 Font Awesome 图标集，当然也可以导入任何你拥有的图标集\nimport fontAwesomeSet from \'svg-icon.vue/assets/font-awesome\'\n\nrender(fontAwesomeSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),n("h3",{staticClass:"article__h3"},[s._v("导入对象中的图标集")]),n("base-usage",{scopedSlots:s._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home2",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"moon-home3",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[s._v(" render() 可以直接绘制 JavaScript 对象数据中的图标集。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[s._v('<template>\n  <span class="case-icon">\n    <svg-icon name="moon-home" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home2" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="moon-home3" :size="24" />\n  </span>\n</template>\n\n<script>\n<script>\nimport SvgIcon from \'svg-icon.vue\'\nimport { render } from \'svg-icon.vue/utils/utils\'\n\nconst icoMoonSet = {\n  title: \'icoMoon 图标集\',\n  symbols: [\n    \'<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>\',\n    \'<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>\',\n    \'<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>\'\n  ]\n}\n\n// 绘制自定义图标集\nrender(icoMoonSet)\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)},a=[],t=e(7515),c=e(8134);const i={title:"icoMoon 图标集",symbols:['<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>','<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>','<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>']};var r=i,l=e(8638);const p=()=>e.e(27).then(e.bind(e,6105));(0,l.s)(r);var v={name:"UsageAdvancedSection",componentName:"UsageAdvancedSection",components:{BaseUsage:t.Z,BaseUsageCase:c.Z,SvgIcon:p}},m=v,u=e(1001),h=(0,u.Z)(m,o,a,!1,null,"020c7d22",null),d=h.exports},5068:function(s,n,e){e.d(n,{hc:function(){return o},p1:function(){return a}});const o=s=>s.replace(/<script[^>]*>.*?<\/script>/gi,""),a=s=>{const n={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return s.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(s=>n[s]||s)).replace(/\{\s+\{/g,"{{")}},8638:function(s,n,e){e.d(n,{x:function(){return d},s:function(){return h}});e(7658);var o=e(8236),a=e(8820),t=e(1505),c=e(5681),i=e(8868),r=e(1471),l=e(329),p=e(2919);const v=[];v.push(...o.Z.symbols),v.push(...a.Z.symbols),v.push(...t.Z.symbols),v.push(...c.Z.symbols),v.push(...i.Z.symbols),v.push(...r.Z.symbols),v.push(...l.Z.symbols),v.push(...p.Z.symbols);var m={title:"Default",code:"default",symbols:v};const u=[],h=s=>{const n=document.body,e=document.createElement("div"),o=document.querySelector("#svg-icons");let a;s?Array.isArray(s)?s.forEach((s=>{u.push(...s.symbols)})):u.push(...s.symbols):u.push(...m.symbols),a=u.join(""),o?o.innerHTML+=a:(e.innerHTML=`<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">${a}</svg>`,n.insertBefore(e.firstChild,n.firstChild))},d=()=>u}}]);