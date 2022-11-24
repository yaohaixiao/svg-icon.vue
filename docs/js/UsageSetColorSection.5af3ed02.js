"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[420],{2059:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var t=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,n=e._self._c;return n("section",{staticClass:"article__section"},[n("h2",{staticClass:"article__h2"},[e._v("设置颜色")]),n("p",[e._v(" SvgIcon 组件既可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。 ")]),n("h3",{staticClass:"article__h3"},[e._v("通过 CSS 设置颜色")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"database-read",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"database-lock",size:24}})],1),n("span",{staticClass:"base-usage-case__icon"},[n("svg-icon",{attrs:{name:"plugins",size:24}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" 通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="database-read" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="database-lock" :size="24" />\n  </span>\n  <span class="case-icon">\n    <svg-icon name="plugins" :size="24" />\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])}),n("h3",{staticClass:"article__h3"},[e._v("通过 color 属性设置颜色")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-environment",size:24,color:"#07B759"}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-branch",size:24,color:"#507AFE"}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"aside-pc",size:24,color:"#FF9901"}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" 设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template>\n  <span class="case-icon">\n    <svg-icon name="aside-environment" :size="24" color="#07B759"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-branch" :size="24" color="#507AFE"/>\n  </span>\n  <span class="case-icon">\n    <svg-icon name="aside-pc" :size="24" color="#FF9901"/>\n  </span>\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>\n\n<style scoped lang="less">\n  .case-icon {\n    display: inline-block;\n    margin: 0 8px;\n    color: @third_text_color;\n    vertical-align: middle;\n    cursor:pointer;\n    overflow: hidden;\n\n    &:hover {\n      color: @primary_color;\n    }\n  }\n</style>')])])]},proxy:!0}])})],1)}],c=s(7515),o=s(8134);const r=()=>s.e(27).then(s.bind(s,6105));var i={name:"UsageSetColorSection",componentName:"UsageSetColorSection",components:{BaseUsage:c.Z,BaseUsageCase:o.Z,SvgIcon:r}},l=i,u=s(1001),p=(0,u.Z)(l,t,a,!1,null,"c855bdc0",null),d=p.exports},5068:function(e,n,s){s.d(n,{hc:function(){return t},p1:function(){return a}});const t=e=>e.replace(/<script[^>]*>.*?<\/script>/gi,""),a=e=>{const n={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>n[e]||e)).replace(/\{\s+\{/g,"{{")}},8249:function(e,n,s){s.d(n,{Ds:function(){return c},Xh:function(){return o},dX:function(){return a},vQ:function(){return t}});const t=e=>{const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))},a=(e,n)=>{const s=new Blob([n]),t=document.createElement("a");t.download=e,t.href=URL.createObjectURL(s),t.click(),URL.revokeObjectURL(s)},c=(e,n=300)=>{let s;return function(...t){clearTimeout(s),s=setTimeout((()=>e.apply(this,t)),n)}},o=e=>{if(null===e)return null;let n=Object.assign({},e);return Object.keys(n).forEach((s=>n[s]="object"===typeof e[s]?o(e[s]):e[s])),Array.isArray(e)?(n.length=e.length,Array.from(n)):n}}}]);