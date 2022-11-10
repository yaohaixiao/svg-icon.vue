"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[951],{5381:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var a=function(){var t=this,n=t._self._c;return n("base-container",[n("base-header",{attrs:{flex:"",border:"",height:"inner"}},[n("breadcrumb-nav",[n("breadcrumb-nav-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),n("breadcrumb-nav-item",{attrs:{to:"/icons"}},[t._v("Icons")]),n("breadcrumb-nav-item",{attrs:{current:""}},[t._v("Hawcons")])],1)],1),n("base-main",{attrs:{padding:"outer"}},[n("article",{staticClass:"article"},[n("h1",{staticClass:"article__h1"},[t._v("Hawcons")]),n("h2",{staticClass:"article__h2"},[t._v(t._s(t.hawconsSet.title))]),n("base-grid",{staticClass:"icons-grid",attrs:{columns:6,gap:10}},t._l(t.hawconsSet.symbols,(function(t,e){return n("icon-cell",{key:"cell-".concat(e),attrs:{symbol:t}})})),1),n("h2",{staticClass:"article__h2"},[t._v("Copyright")]),n("ul",[n("li",[t._v("Designer：Yannick")]),n("li",[t._v(" Homepage: "),n("a",{attrs:{href:"http://hawcons.com/"}},[t._v("http://hawcons.com/")])]),n("li",[t._v("License：Custom (free to use)")])])],1)])],1)},s=[],o=e(90),c=e(6225),r=e(6635),i=e(9852),l=e(5693),u=e(5868),m=e(4088),d=e(2454),p={name:"PageHawconsIcons",componentName:"PageHawconsIcons",components:{BaseContainer:o.Z,BaseHeader:c.Z,BaseMain:r.Z,BreadcrumbNav:i.Z,BreadcrumbNavItem:l.Z,BaseGrid:u.Z,IconCell:m.Z},data:function(){return{hawconsSet:d.Z}}},v=p,h=e(1001),f=(0,h.Z)(v,a,s,!1,null,"c1dbc366",null),_=f.exports},5868:function(t,n,e){e.d(n,{Z:function(){return u}});e(8309);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"base-grid",style:t.cssRules},[t._t("default")],2)},s=[],o=(e(9653),{name:"BaseGrid",componentName:"BaseGrid",props:{padding:{type:String,default:"none"},columns:{type:Number,default:4},gap:{type:Number,default:20},overflow:{type:String,default:"hidden"}},computed:{cssRules:function(){var t=this.columns,n=this.gap;return"grid-template-columns:repeat("+t+", 1fr);gap:"+n+"px"}}}),c=o,r=e(1001),i=(0,r.Z)(c,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},5693:function(t,n,e){e.d(n,{Z:function(){return d}});e(8309);var a=function(){var t=this,n=t._self._c;return n("span",{ref:"root",staticClass:"breadcrumb-nav-item"},[t.to?n("base-link",{attrs:{route:"",icon:t.icon,href:t.to,target:"_self",role:"link"}},[t._t("default")],2):[t.icon?n("svg-icon",{staticClass:"breadcrumb-nav-item__icon",attrs:{name:t.icon,size:16}}):t._e(),n("span",{staticClass:"breadcrumb-nav-item__text"},[t._t("default")],2)],t.current?t._e():n("span",{staticClass:"breadcrumb-nav-item__separator",attrs:{role:"presentation"}},[t.separatorIcon?n("svg-icon",{attrs:{name:t.separatorIcon,size:16}}):[t._v(" "+t._s(t.separator)+" ")]],2)],2)},s=[],o=e(1294),c=e(9126),r={name:"BreadcrumbNavItem",componentName:"BreadcrumbNavItem",components:{BaseLink:o.Z,SvgIcon:c.Z},props:{icon:{type:String,default:""},current:{type:Boolean,default:!1},to:{type:[String,Object],default:""}},data:function(){return{separator:"",separatorIcon:""}},inject:["BreadcrumbNav"],mounted:function(){var t=this.BreadcrumbNav;this.separator=t.separator,this.separatorIcon=t.separatorIcon,this.current&&this.$el.setAttribute("aria-current","")}},i=r,l=e(1001),u=(0,l.Z)(i,a,s,!1,null,null,null),m=u.exports;m.install=function(t){t.component(m.name,m)};var d=m},9852:function(t,n,e){e.d(n,{Z:function(){return u}});e(8309);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb",role:"navigation"}},[t._t("default")],2)},s=[],o={name:"BreadcrumbNav",componentName:"BreadcrumbNav",props:{separator:{type:String,default:"/"},separatorIcon:{type:String,default:""}},provide:function(){return{BreadcrumbNav:this}}},c=o,r=e(1001),i=(0,r.Z)(c,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},4088:function(t,n,e){e.d(n,{Z:function(){return p}});e(8309);var a=function(){var t=this,n=t._self._c;return n("div",{class:["icon-cell",{"is-checked":t.isChecked}],on:{click:t.onCheck}},[n("span",{staticClass:"icon-cell__marked"},[n("svg-icon",{attrs:{name:"selected",size:24}})],1),n("div",{staticClass:"icon-cell__svg"},[n("svg-icon",{attrs:{name:t.name,size:32}})],1),n("p",{staticClass:"icon-cell__name"},[t._v(" "+t._s(t.name)+" ")]),n("div",{staticClass:"icon-cell__toolbar"},[n("div",{staticClass:"icon-cell__button",on:{click:function(n){return n.stopPropagation(),t.onCopy.apply(null,arguments)}}},[n("svg-icon",{attrs:{name:"copy",size:14}}),t._v(" 复制 ")],1),n("div",{staticClass:"icon-cell__button",on:{click:function(n){return n.stopPropagation(),t.onDownload.apply(null,arguments)}}},[n("svg-icon",{attrs:{name:"download",size:14}}),t._v(" 下载 ")],1)])])},s=[],o=(e(4916),e(4723),e(2222),e(9126)),c=e(8249),r=e(481),i={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",isChecked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("clean:cart",this.update)},methods:{update:function(){var t=(0,r.cF)("svg.icon.set"),n=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=n[1],this.isChecked=!!t&&JSON.parse(t).indexOf(this.symbol)>-1},add:function(t){this.$broadcast("add:icon",t)},remove:function(t){this.$broadcast("remove:icon",t)},check:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(t," 已").concat(n,"购物车！")})},copy:function(t){(0,c.vQ)(t),this.$message.success({round:!0,message:"图标名 ".concat(t," 已复制到粘贴板！")})},download:function(){var t=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,n=this.symbol,e=n.match(t)[3],a=n.match(/viewBox="0 0 (.*?)"/)[1].split(" "),s=parseInt(a[0],10),o=parseInt(a[1],10),r=s>200?200:s,i=o>200?200:o,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+i+'" viewBox="0 0 '+s+" "+o+'">\n<title>'+this.name+"</title>\n"+e+"\n</svg>";(0,c.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.isChecked=!this.isChecked},onCheck:function(){var t="",n=this.symbol;this.toggle(),this.isChecked?(this.add(n),t="加入"):(t="移除",this.remove(n)),this.check(this.name,t)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=i,u=e(1001),m=(0,u.Z)(l,a,s,!1,null,null,null),d=m.exports;d.install=function(t){t.component(d.name,d)};var p=d},481:function(t,n,e){e.d(n,{B$:function(){return o},cF:function(){return s},po:function(){return a}});var a=function(t,n){localStorage.setItem(t,n)},s=function(t){return localStorage.getItem(t)},o=function(t){localStorage.removeItem(t)}}}]);