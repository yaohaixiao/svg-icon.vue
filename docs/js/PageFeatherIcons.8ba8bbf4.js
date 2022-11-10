"use strict";(self["webpackChunk_yaohaixiao_svg_icon_vue"]=self["webpackChunk_yaohaixiao_svg_icon_vue"]||[]).push([[988],{4037:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=function(){var e=this,t=e._self._c;return t("base-container",[t("base-header",{attrs:{flex:"",border:"",height:"inner"}},[t("breadcrumb-nav",[t("breadcrumb-nav-item",{attrs:{to:"/",icon:"circle-arrow-left"}},[e._v(" Home ")]),t("breadcrumb-nav-item",{attrs:{to:"/icons"}},[e._v("Icons")]),t("breadcrumb-nav-item",{attrs:{current:""}},[e._v("Feather")])],1)],1),t("base-main",{attrs:{padding:"outer"}},[t("article",{staticClass:"article"},[t("h1",{staticClass:"article__h1"},[e._v("Feather")]),t("h2",{staticClass:"article__h2"},[e._v(e._s(e.featherSet.title))]),t("base-grid",{staticClass:"icons-grid",attrs:{columns:6,gap:10}},e._l(e.featherSet.symbols,(function(e,n){return t("icon-cell",{key:`cell-${n}`,attrs:{symbol:e}})})),1),t("h2",{staticClass:"article__h2"},[e._v("Copyright")]),t("ul",[t("li",[e._v("Designer：Cole Bemis")]),t("li",[e._v(" Homepage: "),t("a",{attrs:{href:"https://feathericons.com/"}},[e._v("https://feathericons.com/")])]),t("li",[e._v("License：MIT")])])],1)])],1)},a=[],o=n(90),c=n(6225),i=n(6635),l=n(9852),r=n(5693),u=n(5868),d=n(1719),m=n(9217),h={name:"PageFeatherIcons",componentName:"PageFeatherIcons",components:{BaseContainer:o.Z,BaseHeader:c.Z,BaseMain:i.Z,BreadcrumbNav:l.Z,BreadcrumbNavItem:r.Z,BaseGrid:u.Z,IconCell:d.Z},data(){return{featherSet:m.Z}}},p=h,v=n(1001),g=(0,v.Z)(p,s,a,!1,null,"279c4e33",null),_=g.exports},5868:function(e,t,n){n.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-grid",style:e.cssRules},[e._t("default")],2)},a=[],o={name:"BaseGrid",componentName:"BaseGrid",props:{padding:{type:String,default:"none"},columns:{type:Number,default:4},gap:{type:Number,default:20},overflow:{type:String,default:"hidden"}},computed:{cssRules(){const e=this.columns,t=this.gap;return"grid-template-columns:repeat("+e+", 1fr);gap:"+t+"px"}}},c=o,i=n(1001),l=(0,i.Z)(c,s,a,!1,null,null,null),r=l.exports;r.install=function(e){e.component(r.name,r)};var u=r},1719:function(e,t,n){n.d(t,{Z:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("div",{class:["icon-cell",{"is-checked":e.isChecked}],on:{click:e.onCheck}},[t("span",{staticClass:"icon-cell__marked"},[t("svg-icon",{attrs:{name:"selected",size:24}})],1),t("div",{staticClass:"icon-cell__svg"},[t("svg-icon",{attrs:{name:e.name,size:32}})],1),t("p",{staticClass:"icon-cell__name"},[e._v(" "+e._s(e.name)+" ")]),t("div",{staticClass:"icon-cell__toolbar"},[t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onCopy.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"copy",size:14}}),e._v(" 复制 ")],1),t("div",{staticClass:"icon-cell__button",on:{click:function(t){return t.stopPropagation(),e.onDownload.apply(null,arguments)}}},[t("svg-icon",{attrs:{name:"download",size:14}}),e._v(" 下载 ")],1)])])},a=[],o=n(6105),c=n(8249),i=n(481),l={name:"IconCell",componentName:"IconCell",components:{SvgIcon:o.Z},props:{symbol:{type:String,default:""}},data(){return{name:"",isChecked:!1}},watch:{symbol(){this.update()}},mounted(){this.update(),this.$subscribe("clean:cart",this.update)},methods:{update(){const e=(0,i.cF)("svg.icon.set"),t=this.symbol.match(/icon-(\w+(-\w+)*)+/);this.name=t[1],this.isChecked=!!e&&JSON.parse(e).indexOf(this.symbol)>-1},add(e){this.$broadcast("add:icon",e)},remove(e){this.$broadcast("remove:icon",e)},check(e,t="加入"){this.$message.success({round:!0,message:`图标 ${e} 已${t}购物车！`})},copy(e){(0,c.vQ)(e),this.$message.success({round:!0,message:`图标名 ${e} 已复制到粘贴板！`})},download(){const e=/<symbol(([\s\S])*?)>(.*?)<\/symbol>/,t=this.symbol,n=t.match(e)[3],s=t.match(/viewBox="0 0 (.*?)"/)[1].split(" "),a=parseInt(s[0],10),o=parseInt(s[1],10),i=a>200?200:a,l=o>200?200:o,r='\x3c!-- Generated by svg-icon.vue --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+l+'" viewBox="0 0 '+a+" "+o+'">\n<title>'+this.name+"</title>\n"+n+"\n</svg>";(0,c.dX)(`${this.name}.svg`,r)},toggle(){this.isChecked=!this.isChecked},onCheck(){let e="";const t=this.symbol;this.toggle(),this.isChecked?(this.add(t),e="加入"):(e="移除",this.remove(t)),this.check(this.name,e)},onCopy(){this.copy(this.name)},onDownload(){this.download()}}},r=l,u=n(1001),d=(0,u.Z)(r,s,a,!1,null,null,null),m=d.exports;m.install=function(e){e.component(m.name,m)};var h=m},481:function(e,t,n){n.d(t,{B$:function(){return o},cF:function(){return a},po:function(){return s}});const s=(e,t)=>{localStorage.setItem(e,t)},a=e=>localStorage.getItem(e),o=e=>{localStorage.removeItem(e)}},8249:function(e,t,n){n.d(t,{dX:function(){return o},p1:function(){return a},vQ:function(){return s}});const s=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},a=e=>{const t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'};return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>t[e]||e)).replace(/\{\s+\{/g,"{{")},o=(e,t)=>{const n=new Blob([t]),s=document.createElement("a");s.download=e,s.href=URL.createObjectURL(n),s.click(),URL.revokeObjectURL(n)}}}]);