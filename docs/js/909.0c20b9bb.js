"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[909],{1909:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.checked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},c=[],o=s(6105),i=s(8249),a=s(481),l={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",checked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("update:icons",this.updateChecked),this.$subscribe("clean:cart",this.updateChecked)},beforeDestroy(){this.$unsubscribe("update:icons",this.updateChecked),this.$unsubscribe("clean:cart",this.updateChecked)},methods:{update(){const e=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=e[1],this.updateChecked()},updateChecked(){const e=(0,a.cF)("svg.icon.set");this.checked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,i.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,s=t.match(e)[3],n=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),c=parseInt(n[0],10),o=parseInt(n[1],10),a=c>200?200:c,l=o>200?200:o,h='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'" height="'+l+'" viewBox="0 0 '+c+" "+o+'">\n<title>'+this.name+"</title>\n"+s+"\n</svg>";(0,i.dX)(`${this.name}.svg`,h)},toggle(){this.checked=!this.checked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.checked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},h=l,d=s(1001),r=(0,d.Z)(h,n,c,!1,null,null,null),u=r.exports;u.install=function(e){e.component(u.name,u)};var m=u},481:function(e,t,s){s.d(t,{B$:function(){return o},cF:function(){return c},po:function(){return n}});const n=(e,t)=>{localStorage.setItem(e,t)},c=e=>localStorage.getItem(e),o=e=>{localStorage.removeItem(e)}}}]);