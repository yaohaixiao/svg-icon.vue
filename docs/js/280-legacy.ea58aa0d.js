"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[280],{5878:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=function(){var e=this,n=e._self._c;return n("section",{staticClass:"article__section"},[n("h2",{staticClass:"article__h2"},[e._v("基础用法")]),n("base-usage",{scopedSlots:e._u([{key:"case",fn:function(){return[n("base-usage-case",[n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"plugins"}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"database-read",size:24}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"database-lock",size:32}})],1),n("span",{staticClass:"base-usage-case__cell"},[n("svg-icon",{attrs:{name:"deploy",size:[44,44]}})],1)])]},proxy:!0},{key:"tips",fn:function(){return[e._v(" size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size 大小。 ")]},proxy:!0},{key:"code",fn:function(){return[n("pre",{staticClass:"base-usage-code__pre"},[n("code",{staticClass:"base-usage-code__code"},[e._v('<template> <svg-icon name="plugins" /> <svg-icon\n          name="database-read" size="24" /> <svg-icon name="database-lock"\n          :size="32" /> <svg-icon name="deploy" :size="[44, 44]" />\n</template>\n\n<script>\nimport { render } from \'svg-icon.vue/utils/utils\'\nimport SvgIcon from \'svg-icon.vue\'\n\nrender()\n\nexport default {\n  components: {\n    SvgIcon\n  }\n}\n<\/script>')])])]},proxy:!0}])})],1)},s=[],c=t(5083),o=t(8134),r=t(9126),i={name:"UsageBasicSection",componentName:"UsageBasicSection",components:{BaseUsage:c.Z,BaseUsageCase:o.Z,SvgIcon:r["default"]}},u=i,l=t(1001),g=(0,l.Z)(u,a,s,!1,null,"287c07f6",null),p=g.exports},5068:function(e,n,t){t.d(n,{hc:function(){return a},p1:function(){return s}});t(4916),t(5306);var a=function(e){return e.replace(/<script[^>]*>.*?<\/script>/gi,"")},s=function(e){var n={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(e){return n[e]||e})).replace(/\{\s+\{/g,"{{")}},8249:function(e,n,t){t.d(n,{Ds:function(){return o},Xh:function(){return r},dX:function(){return c},vQ:function(){return s}});var a=t(3336),s=(t(1539),t(8783),t(3948),t(285),t(1637),t(4747),t(7941),t(1038),function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}),c=function(e,n){var t=new Blob([n]),a=document.createElement("a");a.download=e,a.href=URL.createObjectURL(t),a.click(),URL.revokeObjectURL(t)},o=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=this,s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){return e.apply(a,c)}),t)}},r=function e(n){if(null===n)return null;var t=Object.assign({},n);return Object.keys(t).forEach((function(s){return t[s]="object"===(0,a.Z)(n[s])?e(n[s]):n[s]})),Array.isArray(n)?(t.length=n.length,Array.from(t)):t}}}]);