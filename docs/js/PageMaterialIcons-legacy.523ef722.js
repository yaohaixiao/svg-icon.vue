"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[676],{7079:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});n(2222);var a=function(){var t=this,e=t._self._c;return e("base-container",[e("base-header",{attrs:{flex:"",border:"",height:"inner"}},[e("base-breadcrumb",[e("base-breadcrumb-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[t._v(" Home ")]),e("base-breadcrumb-item",{attrs:{to:"/icons"}},[t._v("Icons")]),e("base-breadcrumb-item",{attrs:{current:""}},[t._v("Material")])],1)],1),e("base-main",{attrs:{padding:"outer"}},[e("article",{staticClass:"article"},[e("h1",{staticClass:"article__h1"},[t._v("Material")]),e("h2",{staticClass:"article__h2"},[t._v(" "+t._s("".concat(t.materialSet.title,"（").concat(t.count,"）"))+" ")]),e("base-grid",{staticClass:"article__grid",attrs:{columns:6,gap:10}},t._l(t.materialSet.symbols,(function(t,n){return e("icon-cell",{key:"cell-".concat(n),attrs:{symbol:t}})})),1),e("h2",{staticClass:"article__h2"},[t._v("Copyright")]),e("ul",[e("li",[t._v("Designer：Google")]),e("li",[t._v(" Homepage: "),e("a",{attrs:{href:"https://material.io/resources/icons"}},[t._v(" https://material.io/resources/icons ")])]),e("li",[t._v("License：Apache License 2.0")])])],1)])],1)},s=[],c=n(90),o=n(6924),r=n(6635),i=n(6212),l=n(3734),u=n(5868),d=n(4341),m=n(2905),p={name:"PageMaterialIcons",componentName:"PageMaterialIcons",components:{BaseContainer:c.Z,BaseHeader:o.Z,BaseMain:r.Z,BaseBreadcrumb:i.Z,BaseBreadcrumbItem:l.Z,BaseGrid:u.Z,IconCell:d.Z},data:function(){return{materialSet:m.Z}},computed:{count:function(){return this.materialSet.symbols.length}}},h=p,f=n(1001),b=(0,f.Z)(h,a,s,!1,null,"9f839772",null),v=b.exports},3734:function(t,e,n){n.d(e,{Z:function(){return m}});n(8309);var a=function(){var t=this,e=t._self._c;return e("span",{ref:"root",staticClass:"base-breadcrumb-item"},[t.to?e("base-link",{attrs:{route:"",icon:t.icon,href:t.to,target:"_self",role:"link"}},[t._t("default")],2):[t.icon?e("svg-icon",{staticClass:"base-breadcrumb-item__icon",attrs:{name:t.icon,size:16}}):t._e(),e("span",{staticClass:"base-breadcrumb-item__text"},[t._t("default")],2)],t.current?t._e():e("span",{staticClass:"base-breadcrumb-item__separator",attrs:{role:"presentation"}},[t.separatorIcon?e("svg-icon",{attrs:{name:t.separatorIcon,size:16}}):[t._v(" "+t._s(t.separator)+" ")]],2)],2)},s=[],c=n(1294),o=n(9126),r={name:"BaseBreadcrumbItem",componentName:"BaseBreadcrumbItem",components:{BaseLink:c.Z,SvgIcon:o.Z},props:{icon:{type:String,default:""},current:{type:Boolean,default:!1},to:{type:[String,Object],default:""}},data:function(){return{separator:"",separatorIcon:""}},inject:["BaseBreadcrumb"],mounted:function(){var t=this.BaseBreadcrumb;this.separator=t.separator,this.separatorIcon=t.separatorIcon,this.current&&this.$el.setAttribute("aria-current","")}},i=r,l=n(1001),u=(0,l.Z)(i,a,s,!1,null,null,null),d=u.exports;d.install=function(t){t.component(d.name,d)};var m=d},6212:function(t,e,n){n.d(e,{Z:function(){return u}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-breadcrumb",attrs:{"aria-label":"breadcrumb",role:"navigation"}},[t._t("default")],2)},s=[],c={name:"BaseBreadcrumb",componentName:"BaseBreadcrumb",props:{separator:{type:String,default:"/"},separatorIcon:{type:String,default:""}},provide:function(){return{BaseBreadcrumb:this}}},o=c,r=n(1001),i=(0,r.Z)(o,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},5868:function(t,e,n){n.d(e,{Z:function(){return u}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-grid",style:t.cssRules},[t._t("default")],2)},s=[],c=(n(9653),{name:"BaseGrid",componentName:"BaseGrid",props:{padding:{type:String,default:"none"},columns:{type:Number,default:4},gap:{type:Number,default:20},overflow:{type:String,default:"hidden"}},computed:{cssRules:function(){var t=this.columns,e=this.gap;return"grid-template-columns:repeat("+t+", 1fr);gap:"+e+"px"}}}),o=c,r=n(1001),i=(0,r.Z)(o,a,s,!1,null,null,null),l=i.exports;l.install=function(t){t.component(l.name,l)};var u=l},4341:function(t,e,n){n.d(e,{Z:function(){return p}});n(8309);var a=function(){var t=this,e=t._self._c;return e("div",{class:["icon-cell",{"is-checked":t.checked}],on:{click:t.onCheck}},[e("span",{staticClass:"icon-cell__marked"},[e("svg-icon",{attrs:{name:"selected",size:24}})],1),e("div",{staticClass:"icon-cell__svg"},[e("svg-icon",{attrs:{name:t.name,size:32}})],1),e("p",{staticClass:"icon-cell__name"},[t._v(" "+t._s(t.name)+" ")]),e("div",{staticClass:"icon-cell__toolbar"},[e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onCopy.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"copy",size:14}}),t._v(" 复制 ")],1),e("div",{staticClass:"icon-cell__button",on:{click:function(e){return e.stopPropagation(),t.onDownload.apply(null,arguments)}}},[e("svg-icon",{attrs:{name:"download",size:14}}),t._v(" 下载 ")],1)])])},s=[],c=(n(4916),n(4723),n(2222),n(9126)),o=n(8249),r=n(481),i={name:"IconCell",componentName:"IconCell",components:{SvgIcon:c.Z},props:{symbol:{type:String,default:""}},data:function(){return{name:"",checked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy:function(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update:function(){var t=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=t[1],this.updateChecked()},updateChecked:function(){var t=(0,r.cF)("svg.icon.set");this.checked=!!t&&JSON.parse(t).indexOf(this.symbol)>-1},add:function(t){this.$broadcast("add:icon",t)},remove:function(t){this.$broadcast("remove:icon",t)},check:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(t," 已").concat(e,"购物车！")})},copy:function(t){(0,o.vQ)(t),this.$message.success({round:!0,message:"图标名 ".concat(t," 已复制到粘贴板！")})},download:function(){var t=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,e=this.symbol,n=e.match(t)[3],a=e.match(/viewBox="0 0 (.*?)"/)[1].split(" "),s=parseInt(a[0],10),c=parseInt(a[1],10),r=s>200?200:s,i=c>200?200:c,l='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+i+'" viewBox="0 0 '+s+" "+c+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,o.dX)("".concat(this.name,".svg"),l)},toggle:function(){this.checked=!this.checked},onCheck:function(){var t="",e=this.symbol;this.toggle(),this.checked?(this.add(e),t="加入"):(t="移除",this.remove(e)),this.check(this.name,t)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},l=i,u=n(1001),d=(0,u.Z)(l,a,s,!1,null,null,null),m=d.exports;m.install=function(t){t.component(m.name,m)};var p=m},481:function(t,e,n){n.d(e,{B$:function(){return c},cF:function(){return s},po:function(){return a}});var a=function(t,e){localStorage.setItem(t,e)},s=function(t){return localStorage.getItem(t)},c=function(t){localStorage.removeItem(t)}}}]);