"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[341],{4341:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});e(8309);var c=function(){var t=this,n=t._self._c;return n("div",{class:["icon-cell",{"is-checked":t.checked}],on:{click:t.onCheck}},[n("span",{staticClass:"icon-cell__marked"},[n("svg-icon",{attrs:{name:"selected",size:24}})],1),n("div",{staticClass:"icon-cell__svg"},[n("svg-icon",{attrs:{name:t.name,size:32}})],1),n("p",{staticClass:"icon-cell__name"},[t._v(" "+t._s(t.name)+" ")]),n("div",{staticClass:"icon-cell__toolbar"},[n("div",{staticClass:"icon-cell__button",on:{click:function(n){return n.stopPropagation(),t.onCopy.apply(null,arguments)}}},[n("svg-icon",{attrs:{name:"copy",size:14}}),t._v(" 复制 ")],1),n("div",{staticClass:"icon-cell__button",on:{click:function(n){return n.stopPropagation(),t.onDownload.apply(null,arguments)}}},[n("svg-icon",{attrs:{name:"download",size:14}}),t._v(" 下载 ")],1)])])},s=[],o=(e(4916),e(4723),e(2222),e(9126)),i=e(8249),a=e(481),l={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o["default"]},props:{symbol:{type:String,default:""}},data:function(){return{name:"",checked:!1}},watch:{symbol:function(){this.update()}},mounted:function(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy:function(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update:function(){var t=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=t[1],this.updateChecked()},updateChecked:function(){var t=(0,a.cF)("svg.icon.set");this.checked=!!t&&JSON.parse(t).indexOf(this.symbol)>-1},add:function(t){this.$broadcast("add:icon",t)},remove:function(t){this.$broadcast("remove:icon",t)},check:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加入";this.$message.success({round:!0,message:"图标 ".concat(t," 已").concat(n,"购物车！")})},copy:function(t){(0,i.vQ)(t),this.$message.success({round:!0,message:"图标名 ".concat(t," 已复制到粘贴板！")})},download:function(){var t=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,n=this.symbol,e=n.match(t)[3],c=n.match(/viewBox="0 0 (.*?)"/)[1].split(" "),s=parseInt(c[0],10),o=parseInt(c[1],10),a=s>200?200:s,l=o>200?200:o,u='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+l+'" viewBox="0 0 '+s+" "+o+'">\n<title>'+this.name+"</title>\n"+e+"\n</svg>";(0,i.dX)("".concat(this.name,".svg"),u)},toggle:function(){this.checked=!this.checked},onCheck:function(){var t="",n=this.symbol;this.toggle(),this.checked?(this.add(n),t="加入"):(t="移除",this.remove(n)),this.check(this.name,t)},onCopy:function(){this.copy(this.name)},onDownload:function(){this.download()}}},u=l,h=e(1001),r=(0,h.Z)(u,c,s,!1,null,null,null),d=r.exports;d.install=function(t){t.component(d.name,d)};var m=d},481:function(t,n,e){e.d(n,{B$:function(){return o},cF:function(){return s},po:function(){return c}});var c=function(t,n){localStorage.setItem(t,n)},s=function(t){return localStorage.getItem(t)},o=function(t){localStorage.removeItem(t)}}}]);