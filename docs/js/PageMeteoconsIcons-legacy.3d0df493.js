"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[632],{4068:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("base-container",[e("base-header",{attrs:{flex:"",border:"",height:"inner"}},[e("breadcrumb-nav",[e("breadcrumb-nav-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),e("breadcrumb-nav-item",{attrs:{to:"/icons"}},[t._v("Icons")]),e("breadcrumb-nav-item",{attrs:{current:""}},[t._v("Meteocons")])],1)],1),e("base-main",{attrs:{padding:"outer"}},[e("article",{staticClass:"article"},[e("h1",{staticClass:"article__h1"},[t._v("Meteocons")]),e("h2",{staticClass:"article__h2"},[t._v(t._s(t.meteoconsSet.title))]),e("base-grid",{staticClass:"icons-grid",attrs:{columns:6,gap:10}},t._l(t.meteoconsSet.symbols,(function(t,n){return e("icon-cell",{key:"cell-".concat(n),attrs:{symbol:t}})})),1),e("h2",{staticClass:"article__h2"},[t._v("Copyright")]),e("ul",[e("li",[t._v("Designer：Alessio Atzeni")]),e("li",[t._v(" Homepage: "),e("a",{attrs:{href:"http://www.alessioatzeni.com/meteocons/"}},[t._v(" http://www.alessioatzeni.com/meteocons/ ")])]),e("li",[t._v("License：Custom (both commercial and personal)")])])],1)])],1)},s=[],o=n(90),c=n(6225),r=n(6635),i=n(9852),l=n(5693),u=n(5868),m=n(4088),d=n(416),p={name:"PageMeteoconsIcons",componentName:"PageMeteoconsIcons",components:{BaseContainer:o.Z,BaseHeader:c.Z,BaseMain:r.Z,BreadcrumbNav:i.Z,BreadcrumbNavItem:l.Z,BaseGrid:u.Z,IconCell:m.Z},data:function(){return{meteoconsSet:d.Z}}},v=p,h=n(1001),f=(0,h.Z)(v,a,s,!1,null,"4e95792f",null),_=f.exports},5868:function(t,e,n){n.d(e,{Z:function(){return u}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-grid",style:t.cssRules},[t._t("default")],2)},s=[],o=(n(9653),{name:"BaseGrid",componentName:"BaseGrid",props:{padding:{type:String,default:"none"},columns:{type:Number,default:4},gap:{type:Number,default:20},overflow:{type:String,default:"hidden"}},computed:{cssRules:function(){var t=this.columns,e=this.gap;return"grid-template-columns:repeat("+t+", 1fr);gap:"+e+"px"}}}),c=o,r=n(1001),i=(0,r.Z)(c,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},5693:function(t,e,n){n.d(e,{Z:function(){return d}});n(8309);var a=function(){var t=this,e=t._self._c;return e("span",{ref:"root",staticClass:"breadcrumb-nav-item"},[t.to?e("base-link",{attrs:{route:"",icon:t.icon,href:t.to,target:"_self",role:"link"}},[t._t("default")],2):[t.icon?e("svg-icon",{staticClass:"breadcrumb-nav-item__icon",attrs:{name:t.icon,size:16}}):t._e(),e("span",{staticClass:"breadcrumb-nav-item__text"},[t._t("default")],2)],t.current?t._e():e("span",{staticClass:"breadcrumb-nav-item__separator",attrs:{role:"presentation"}},[t.separatorIcon?e("svg-icon",{attrs:{name:t.separatorIcon,size:16}}):[t._v(" "+t._s(t.separator)+" ")]],2)],2)},s=[],o=n(1294),c=n(9126),r={name:"BreadcrumbNavItem",componentName:"BreadcrumbNavItem",components:{BaseLink:o.Z,SvgIcon:c.Z},props:{icon:{type:String,default:""},current:{type:Boolean,default:!1},to:{type:[String,Object],default:""}},data:function(){return{separator:"",separatorIcon:""}},inject:["BreadcrumbNav"],mounted:function(){var t=this.BreadcrumbNav;this.separator=t.separator,this.separatorIcon=t.separatorIcon,this.current&&this.$el.setAttribute("aria-current","")}},i=r,l=n(1001),u=(0,l.Z)(i,a,s,!1,null,null,null),m=u.exports;m.install=function(t){t.component(m.name,m)};var d=m},9852:function(t,e,n){n.d(e,{Z:function(){return u}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb",role:"navigation"}},[t._t("default")],2)},s=[],o={name:"BreadcrumbNav",componentName:"BreadcrumbNav",props:{separator:{type:String,default:"/"},separatorIcon:{type:String,default:""}},provide:function(){return{BreadcrumbNav:this}}},c=o,r=n(1001),i=(0,r.Z)(c,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},4088:function(t,e,n){n.d(e,{Z:function(){return p}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{class:["icon-cell",{"is-checked":t.isChecked}],on:{click:t.onCheck}},[e("span",{staticClass:"icon-cell__marked"},[e("svg-icon",{attrs:{name:"selected",size:24}})],1),e("div",{staticClass:"icon-cell__svg"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("p",{staticClass:"icon-cell__name"},[t._v(" "+t._s(t.name)+" ")]),e("div",{staticClass:"icon-cell__toolbar"},[e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onCopy.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"copy",size:14}}),t._v(" 复制 ")],1),e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onDownload.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"download",size:14}}),t._v(" 下载 ")],1)])])},s=[],o=(n(4916),n(4723),n(2222),n(9126)),c=n(8249),r=n(481),i={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",isChecked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("clean:cart",this.update)},methods:{update:function(){var t=(0,r.cF)("svg.icon.set"),e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.isChecked=!!t&&JSON.parse(t).indexOf(this.symbol)>-1},add:function(t){this.$broadcast("add:icon",t)},remove:function(t){this.$broadcast("remove:icon",t)},check:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(t," 已").concat(e,"购物车！")})},copy:function(t){(0,c.vQ)(t),this.$message.success({round:!0,message:"图标名 ".concat(t," 已复制到粘贴板！")})},download:function(){var t=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,e=this.symbol,n=e.match(t)[3],a=e.match(/viewBox="0 0 (.*?)"/)[1].split(" "),s=parseInt(a[0],10),o=parseInt(a[1],10),r=s>200?200:s,i=o>200?200:o,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+i+'" viewBox="0 0 '+s+" "+o+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,c.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.isChecked=!this.isChecked},onCheck:function(){var t="",e=this.symbol;this.toggle(),this.isChecked?(this.add(e),t="加入"):(t="移除",this.remove(e)),this.check(this.name,t)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=i,u=n(1001),m=(0,u.Z)(l,a,s,!1,null,null,null),d=m.exports;d.install=function(t){t.component(d.name,d)};var p=d},481:function(t,e,n){n.d(e,{B$:function(){return o},cF:function(){return s},po:function(){return a}});var a=function(t,e){localStorage.setItem(t,e)},s=function(t){return localStorage.getItem(t)},o=function(t){localStorage.removeItem(t)}}}]);