"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[600],{6600:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=function(){var e=this,n=e._self._c;return n("ul",{staticClass:"app-nav"},e._l(e.navs,(function(e,t){return n("li",{key:"nav-".concat(t),staticClass:"app-nav__item"},[n("base-link",{staticClass:"app-nav__link",attrs:{route:e.route,role:e.role,href:e.href,icon:e.icon,"icon-size":e.iconSize,target:e.target,download:e.download}})],1)})),0)},i=[],o=t(8358),l={name:"AppNav",componentName:"AppNav",components:{BaseLink:o.Z},data:function(){return{navs:[{route:!1,role:"link",href:"http://www.yaohaixiao.com/",icon:"bold-home",iconSize:18},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue",icon:"bold-branch",iconSize:16},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/archive/refs/heads/main.zip",icon:"bold-download",iconSize:20,download:"svg-icon.vue-main.zip",target:"_blank"},{route:!1,role:"link",href:"https://github.com/yaohaixiao/svg-icon.vue/issues",icon:"bold-help",iconSize:20}]}}},s=l,r=t(1001),c=(0,r.Z)(s,a,i,!1,null,"23a8c4e0",null),u=c.exports},8358:function(e,n,t){t.d(n,{Z:function(){return d}});t(8309);var a=function(){var e=this,n=e._self._c;return e.route?n("router-link",{class:e.className,attrs:{to:e.disabled?null:e.href,target:e.target}},[e.icon?n("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),n("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1):n("a",{class:e.className,attrs:{href:e.disabled?null:e.href,target:e.target,download:e.download}},[e.icon?n("svg-icon",{staticClass:"base-link__icon",attrs:{name:e.icon,size:e.iconSize}}):e._e(),n("span",{staticClass:"base-link__inner"},[e._t("default")],2)],1)},i=[],o=(t(1539),t(8783),t(3948),t(9653),function(){return t.e(27).then(t.bind(t,9126))}),l={name:"BaseLink",componentName:"BaseLink",components:{SvgIcon:o},props:{type:{type:String,default:"default"},href:{type:String,default:""},target:{type:String,default:"_self"},route:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},download:{type:[Boolean,String],default:null},underline:{type:Boolean,default:!1},icon:{type:String,default:""},iconSize:{type:Number,default:16}},computed:{className:function(){var e=this.disabled?"util-anchor-".concat(this.type,"--disabled"):"";return["base-link","util-anchor-".concat(this.type),{"util-anchor-underline":this.underline,clsDisabled:e}]}}},s=l,r=t(1001),c=(0,r.Z)(s,a,i,!1,null,null,null),u=c.exports;u.install=function(e){e.component(u.name,u)};var d=u}}]);