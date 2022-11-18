"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[442],{7832:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});n(2222);var o=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"},scopedSlots:e._u([{key:"filter",fn:function(){return[t("div",{staticClass:"page__filter"},[t("base-input",{attrs:{autosize:"",autofocus:"",clearable:"",size:"small","suffix-icon":"search",placeholder:"请输入图标名称"},on:{change:e.onQuery},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]},proxy:!0}])},[t("base-breadcrumb",[t("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("base-breadcrumb-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("base-breadcrumb-item",{attrs:{current:""}},[e._v("Zondicons")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Zondicons")]),t("h2",{staticClass:"article__h2"},[e._v(" "+e._s("".concat(e.zondiconsSet.title,"（").concat(e.count,"）"))+" ")]),e.count>0?t("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},e._l(e.symbols,(function(e,n){return t("icon-cell",{key:"cell-".concat(n),attrs:{symbol:e}})})),1):t("base-empty"),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Steve Schoger")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"http://www.zondicons.com/"}},[e._v("http://www.zondicons.com/")])]),t("li",[e._v("License：CC BY 4.0")])])],1)]),t("base-footer",{attrs:{flex:"",height:"inner"}},[t("div",{staticClass:"util-align-left base-footer__navigation"},[e._v(" Prev Page： "),t("router-link",{attrs:{to:"/icons/wpzoom"}},[e._v("wpzoom 图标库")])],1)])],1)},c=[],s=(n(7327),n(1539),n(4916),n(4723),n(90)),a=n(4516),i=n(2935),r=n(6212),l=n(3734),u=n(7371),d=n(4485),h=n(5868),m=n(4693),f=n(4341),v=n(4182),p=n(8249),b={name:"PageZondiconsIcons",componentName:"PageZondiconsIcons",components:{BaseContainer:s.Z,BaseHeader:a.Z,BaseMain:i.Z,BaseBreadcrumb:r.Z,BaseBreadcrumbItem:l.Z,BaseFooter:u.Z,BaseInput:d.Z,BaseGrid:h.Z,BaseEmpty:m.Z,IconCell:f.Z},data:function(){return{zondiconsSet:v.Z,keyword:"",symbols:[]}},computed:{count:function(){return this.symbols.length}},created:function(){this.update()},methods:{update:function(){var e=this;this.symbols=this.zondiconsSet.symbols.filter((function(t){var n=e.getSymbolName(t).toLowerCase();return n.indexOf(e.keyword.toLowerCase())>-1}))},getSymbolName:function(e){var t=e.match(/icon-(\w+(-\w+)*)+/);return t[1]||""},onQuery:(0,p.Ds)((function(){this.update()}),300)}},g=b,_=n(1001),y=(0,_.Z)(g,o,c,!1,null,"22c17083",null),w=y.exports},4341:function(e,t,n){n.d(t,{Z:function(){return m}});n(8309);var o=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},c=[],s=(n(4916),n(4723),n(2222),n(9126)),a=n(8249),i=n(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:s.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",checked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy:function(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update:function(){var e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked:function(){var e=(0,i.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add:function(e){this.$broadcast("add:icon",e)},remove:function(e){this.$broadcast("remove:icon",e)},check:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(e," 已").concat(t,"购物车！")})},copy:function(e){(0,a.vQ)(e),this.$message.success({round:!0,message:"图标名 ".concat(e," 已复制到粘贴板！")})},download:function(){var e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,n=t.match(e)[3],o=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),c=parseInt(o[0],10),s=parseInt(o[1],10),i=c>200?200:c,r=s>200?200:s,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+r+'" viewBox="0 0 '+c+" "+s+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,a.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.checked=!this.checked},onCheck:function(){var e="",t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=r,u=n(1001),d=(0,u.Z)(l,o,c,!1,null,null,null),h=d.exports;h.install=function(e){e.component(h.name,h)};var m=h},481:function(e,t,n){n.d(t,{B$:function(){return s},cF:function(){return c},po:function(){return o}});var o=function(e,t){localStorage.setItem(e,t)},c=function(e){return localStorage.getItem(e)},s=function(e){localStorage.removeItem(e)}},8249:function(e,t,n){n.d(t,{Ds:function(){return a},Xh:function(){return i},dX:function(){return s},vQ:function(){return c}});var o=n(3336),c=(n(1539),n(8783),n(3948),n(285),n(1637),n(4747),n(7941),n(1038),function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}),s=function(e,t){var n=new Blob([t]),o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(n),o.click(),URL.revokeObjectURL(n)},a=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=this,c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){return e.apply(o,s)}),n)}},i=function e(t){if(null===t)return null;var n=Object.assign({},t);return Object.keys(n).forEach((function(c){return n[c]="object"===(0,o.Z)(t[c])?e(t[c]):t[c]})),Array.isArray(t)?(n.length=t.length,Array.from(n)):n}}}]);