"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[8494],{2980:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(8309);var o=function(){var e=this,n=e._self._c;return n("div",{ref:"code",staticClass:"base-usage-code"},[n("span",{staticClass:"base-usage-code__copy",on:{click:e.onCopy}},[n("svg-icon",{attrs:{name:"copy"}}),e._v(" 复制代码 ")],1),e._t("default")],2)},c=[],r=t(9126),a=t(8249),u=t(5068),i={name:"BaseUsageCode",componentName:"BaseUsageCode",components:{SvgIcon:r.Z},methods:{copy:function(){var e=this.$refs.code,n=e.querySelector(".article__code").innerHTML;(0,a.vQ)((0,u.p1)(n))},onCopy:function(){this.copy(),this.$message.success({round:!0,message:"代码已复制到粘贴板！"})}}},s=i,l=t(1001),d=(0,l.Z)(s,o,c,!1,null,"c3c6dcb4",null),f=d.exports;f.install=function(e){e.component(f.name,f)};var m=f},5068:function(e,n,t){t.d(n,{hc:function(){return o},p1:function(){return c}});t(4916),t(5306),t(3210);var o=function(e){return e.replace(/<script[^>]*>.*?<\/script>/gi,"")},c=function(e){var n={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(e){return n[e]||e})).replace(/\{\s+\{/g,"{{")}},8249:function(e,n,t){t.d(n,{Ds:function(){return a},Xh:function(){return u},dX:function(){return r},vQ:function(){return c}});var o=t(3336),c=(t(1539),t(8783),t(3948),t(285),t(1637),t(4747),t(7941),t(1038),function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}),r=function(e,n){var t=new Blob([n]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(t),o.click(),URL.revokeObjectURL(t)},a=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=this,c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){return e.apply(o,r)}),t)}},u=function e(n){if(null===n)return null;var t=Object.assign({},n);return Object.keys(t).forEach((function(c){return t[c]="object"===(0,o.Z)(n[c])?e(n[c]):n[c]})),Array.isArray(n)?(t.length=n.length,Array.from(t)):t}}}]);