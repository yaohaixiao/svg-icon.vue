"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[676],{7079:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(2222);var c=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"}},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Material")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Material")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.materialSet.title,"（").concat(e.count,"）"))+" ")]),t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.materialSet.symbols,(function(e,n){return t("icon-cell",{key:"cell-".concat(n),attrs:{symbol:e}})})),1),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Google")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://material.io/resources/icons"}},[e._v(" https://material.io/resources/icons ")])]),t("li",[e._v("License：Apache License 2.0")])])],1)])],1)},a=[],o=n(90),s=n(6924),i=n(6635),r=n(6212),l=n(3734),u=n(5868),d=n(4341),m=n(2905),h={name:"PageMaterialIcons",componentName:"PageMaterialIcons",components:{BaseContainer:o.Z,BaseHeader:s.Z,BaseMain:i.Z,BaseBreadcrumb:r.Z,BaseBreadcrumbItem:l.Z,BaseGrid:u.Z,IconCell:d.Z},data:function(){return{materialSet:m.Z}},computed:{count:function(){return this.materialSet.symbols.length}}},v=h,p=n(1001),g=(0,p.Z)(v,c,a,!1,null,"9f839772",null),f=g.exports},4341:function(e,t,n){n.d(t,{Z:function(){return h}});n(8309);var c=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},a=[],o=(n(4916),n(4723),n(2222),n(9126)),s=n(8249),i=n(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",checked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy:function(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update:function(){var e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked:function(){var e=(0,i.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add:function(e){this.$broadcast("add:icon",e)},remove:function(e){this.$broadcast("remove:icon",e)},check:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(e," 已").concat(t,"购物车！")})},copy:function(e){(0,s.vQ)(e),this.$message.success({round:!0,message:"图标名 ".concat(e," 已复制到粘贴板！")})},download:function(){var e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,n=t.match(e)[3],c=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),a=parseInt(c[0],10),o=parseInt(c[1],10),i=a>200?200:a,r=o>200?200:o,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+r+'" viewBox="0 0 '+a+" "+o+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,s.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.checked=!this.checked},onCheck:function(){var e="",t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=r,u=n(1001),d=(0,u.Z)(l,c,a,!1,null,null,null),m=d.exports;m.install=function(e){e.component(m.name,m)};var h=m},481:function(e,t,n){n.d(t,{B$:function(){return o},cF:function(){return a},po:function(){return c}});var c=function(e,t){localStorage.setItem(e,t)},a=function(e){return localStorage.getItem(e)},o=function(e){localStorage.removeItem(e)}},8249:function(e,t,n){n.d(t,{dX:function(){return o},p1:function(){return a},vQ:function(){return c}});n(4916),n(5306),n(1539),n(8783),n(3948),n(285),n(1637);var c=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},a=function(e){var t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(function(e){return t[e]||e})).replace(/\{\s+\{/g,"{{")},o=function(e,t){var n=new Blob([t]),c=document.createElement("a");c.download=e,c.href=URL.createObjectURL(n),c.click(),URL.revokeObjectURL(n)}}}]);