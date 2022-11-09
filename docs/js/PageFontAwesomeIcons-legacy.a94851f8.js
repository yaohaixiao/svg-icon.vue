"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[63],{8959:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("base-container",[e("base-header",{attrs:{flex:"",border:"",height:"inner"}},[e("breadcrumb-nav",[e("breadcrumb-nav-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),e("breadcrumb-nav-item",{attrs:{to:"/icons"}},[t._v("Icons")]),e("breadcrumb-nav-item",{attrs:{current:""}},[t._v("Font Awesome")])],1)],1),e("base-main",{attrs:{padding:"outer"}},[e("article",{staticClass:"article"},[e("h1",{staticClass:"article__h1"},[t._v("Font Awesome")]),e("h2",{staticClass:"article__h2"},[t._v(t._s(t.fontAwesomeSet.title))]),e("base-grid",{staticClass:"icons-grid",attrs:{columns:6,gap:10}},t._l(t.fontAwesomeSet.symbols,(function(t,n){return e("icon-cell",{key:"cell-".concat(n),attrs:{symbol:t}})})),1),e("h2",{staticClass:"article__h2"},[t._v("Copyright")]),e("ul",[e("li",[t._v("Designer：Dave Gandy")]),e("li",[t._v(" Homepage: "),e("a",{attrs:{href:"https://feathericons.com/"}},[t._v(" https://github.com/FortAwesome/Font-Awesome ")])]),e("li",[t._v("License：Custom (free to use)")])])],1)])],1)},o=[],a=n(90),c=n(5553),i=n(6635),r=n(9852),l=n(8565),u=n(5868),m=n(2830),d=n(8638),h=n(7970);(0,d.s)(h.Z);var v={name:"PageFontAwesomeIcons",componentName:"PageFontAwesomeIcons",components:{BaseContainer:a.Z,BaseHeader:c.Z,BaseMain:i.Z,BreadcrumbNav:r.Z,BreadcrumbNavItem:l.Z,BaseGrid:u.Z,IconCell:m.Z},data:function(){return{fontAwesomeSet:h.Z}}},f=v,p=n(1001),g=(0,p.Z)(f,s,o,!1,null,"10f7f942",null),_=g.exports},5868:function(t,e,n){n.d(e,{Z:function(){return u}});n(8309);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-grid",style:t.cssRules},[t._t("default")],2)},o=[],a=(n(9653),{name:"BaseGrid",componentName:"BaseGrid",props:{padding:{type:String,default:"none"},columns:{type:Number,default:4},gap:{type:Number,default:20},overflow:{type:String,default:"hidden"}},computed:{cssRules:function(){var t=this.columns,e=this.gap;return"grid-template-columns:repeat("+t+", 1fr);gap:"+e+"px"}}}),c=a,i=n(1001),r=(0,i.Z)(c,s,o,!1,null,null,null),l=r.exports;l.install=function(t){t.component(l.name,l)};var u=l},2830:function(t,e,n){n.d(e,{Z:function(){return h}});n(8309);var s=function(){var t=this,e=t._self._c;return e("div",{class:["icon-cell",{"is-checked":t.isChecked}],on:{click:t.onCheck}},[e("span",{staticClass:"icon-cell__marked"},[e("svg-icon",{attrs:{name:"selected",size:24}})],1),e("div",{staticClass:"icon-cell__svg"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("p",{staticClass:"icon-cell__name"},[t._v(" "+t._s(t.name)+" ")]),e("div",{staticClass:"icon-cell__toolbar"},[e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onCopy.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"copy",size:14}}),t._v(" 复制 ")],1),e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onDownload.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"download",size:14}}),t._v(" 下载 ")],1)])])},o=[],a=(n(4916),n(4723),n(2222),n(9467)),c=n(8249),i=n(481),r={name:"IconCell",componentName:"IconCell",components:{SvgIcon:a.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",isChecked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("clean:cart",this.update)},methods:{update:function(){var t=(0,i.cF)("svg.icon.set"),e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.isChecked=!!t&&JSON.parse(t).indexOf(this.symbol)>-1},add:function(t){this.$broadcast("add:icon",t)},remove:function(t){this.$broadcast("remove:icon",t)},check:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标“".concat(t,"”已").concat(e,"图标集购物车！")})},copy:function(t){(0,c.vQ)(t),this.$message.success({round:!0,message:"图标名“".concat(t,"”已复制到粘贴板！")})},download:function(){var t=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,e=this.symbol,n=e.match(t)[3],s=e.match(/viewBox="0 0 (.*?)"/)[1].split(" "),o=s[0],a=s[1],i='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="'+o+'" height="'+a+'" viewBox="0 0 '+o+" "+a+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,c.dX)("".concat(this.name,".svg"),i)},toggle:function(){this.isChecked=!this.isChecked},onCheck:function(){var t="",e=this.symbol;this.toggle(),this.isChecked?(this.add(e),t="加入"):(t="移除",this.remove(e)),this.check(this.name,t)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=r,u=n(1001),m=(0,u.Z)(l,s,o,!1,null,null,null),d=m.exports;d.install=function(t){t.component(d.name,d)};var h=d},481:function(t,e,n){n.d(e,{B$:function(){return a},cF:function(){return o},po:function(){return s}});var s=function(t,e){localStorage.setItem(t,e)},o=function(t){return localStorage.getItem(t)},a=function(t){localStorage.removeItem(t)}}}]);